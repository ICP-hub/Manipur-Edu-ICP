// use candid::{CandidType, Deserialize};
use candid::{CandidType, Decode, Deserialize, Encode};
use ic_stable_structures::memory_manager::{MemoryId, MemoryManager, VirtualMemory};
use ic_stable_structures::storable::Bound;
use ic_stable_structures::{DefaultMemoryImpl, StableBTreeMap, Storable};
// use stable_structures::{Ic0StableMemory, RestrictedMemory, StableBTreeMap, Storable};
use std::{borrow::Cow, cell::RefCell};
use ic_cdk::api;
use ic_cdk::api::caller;
use ic_cdk::storage;
use ic_cdk_macros::*;
use serde::Serialize;
use serde_json;

use std::collections::HashMap;
use std::hash::Hash;
pub mod admin;
pub mod institute;
pub mod student;
pub mod studentresult;
use admin::*;
use institute::*;
use student::*;
use studentresult::*;
pub mod certificate;
use certificate::*;

//scholarship
pub mod scholarship;
use scholarship::*;

// type Memory = RestrictedMemory<Ic0StableMemory>;
type Memory = VirtualMemory<DefaultMemoryImpl>;

const MAX_KEY_SIZE: u32 = 8;
const MAX_VALUE_SIZE: u32 = 100;

// State of the Canister
#[derive(Serialize, CandidType, Deserialize, Debug, Clone, Default)]
pub struct State {
    pub users: HashMap<String, UserData>,
    pub institute: HashMap<String, InstituteData>,
    pub unapproved_students: Vec<String>,
    pub unapproved_institute: Vec<String>,
    pub rejected_students: Vec<String>,
    pub rejected_institutes: Vec<String>,
    pub admin: Vec<String>,
    pub unapproved_student_profile: HashMap<String, UserData>,
    pub unapproved_institute_profile: HashMap<String, InstituteData>,
    pub student_result: HashMap<String, Vec<UserResult>>,
    pub student_certificate: HashMap<String, Vec<CertificateData>>,
    pub institute_students: HashMap<String, Vec<String>>,
    pub students_registered_by_institute: Vec<String>,
    pub institutes_registered_by_admin: Vec<String>,
    pub private_keys: HashMap<String, String>,
    
}  

#[derive(Serialize, CandidType, Deserialize, Debug, Clone, Default)]
pub struct Chunk {
    chunk_value: Vec<u8>,
    next_chunkid: u32,
   
}

impl Storable for Chunk {
    fn to_bytes(&self) -> std::borrow::Cow<[u8]> {
        Cow::Owned(Encode!(self).unwrap())
    }

    fn from_bytes(bytes: Cow<[u8]>) -> Self {
        Decode!(&bytes, Self).unwrap()
    }

    const BOUND: Bound = Bound::Bounded {
        max_size: MAX_VALUE_SIZE,
        is_fixed_size: false,
    };
}


// impl Storable for Chunk {
//     fn to_bytes(&self) -> std::borrow::Cow<[u8]> {
//         Cow::Owned(Encode!(self).unwrap())
//     }

//     fn from_bytes(bytes: Vec<u8>) -> Self {
//         Decode!(&bytes, Self).unwrap()
//     }
// }

// impl Storable for Chunk {
//     // const BOUND: Bound = 1024;
//     fn to_bytes(&self) -> std::borrow::Cow<[u8]> {
//         std::borrow::Cow::Owned(Encode!(&self.chunk_value, &self.next_chunkid).unwrap())
//     }

//     fn from_bytes(bytes: Vec<u8>) -> Self {
//         let (chunk_value, next_chunkid) = Decode!(&bytes, Vec<u8>, u32).unwrap();
//         Chunk {
//             chunk_value,
//             next_chunkid,
//         }
//     }
// }


thread_local! {
    pub static STATE: RefCell<State> = RefCell::new(State::default());

    static MEMORY_MANAGER: RefCell<MemoryManager<DefaultMemoryImpl>> =
    RefCell::new(MemoryManager::init(DefaultMemoryImpl::default()));

    static FILE_STABLE_STATE: RefCell<StableBTreeMap<(u32,u32), Chunk , Memory>> = RefCell::new(
        StableBTreeMap::init(
            MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(1))),
        )

    );
    
    // static MAP: RefCell<StableBTreeMap<(u32,u32), Chunk, Memory>> = RefCell::new(
    //     StableBTreeMap::init(RestrictedMemory::new(Ic0StableMemory, 0..99), MAX_KEY_SIZE, MAX_VALUE_SIZE)
    // );

}


#[ic_cdk_macros::query]
fn get_image(key1: u32, key2: u32) -> Option<Chunk> {
    FILE_STABLE_STATE.with(|p| {
        let map_ref = p.borrow();
        let value = map_ref.get(&(key1, key2));
        value
    })
}
// fn get_image(key1: u32, key2: u32) -> Option<Vec<u8>,u32> {
//     FILE_STABLE_STATE.with(|p| p.borrow().get(&(key1, key2)))
// }

// Inserts an entry into the map and returns the previous value of the key if it exists.
#[ic_cdk_macros::update]
fn upload_image(key1: u32, key2: u32, chunk: Chunk) -> String{
    
    FILE_STABLE_STATE.with(|p| p.borrow_mut().insert((key1, key2), chunk));
    "Successful".to_string()
}

#[query]
fn calculate_state_size() -> usize {
    STATE.with(|state| {
        let state_borrowed: std::cell::Ref<'_, State> = state.borrow();
        match serde_json::to_string(&state_borrowed.users) {
            Ok(json_str) => json_str.len(),
            Err(e) => {
                // Log the error. Replace this with your preferred logging mechanism.
                eprintln!("Error serializing state: {}", e);
                0 // Return 0 or another default size in case of error
            }
        }
    })
}

#[update]
fn add_private_key(private_key: String) -> Result<(), String> {
    let principal_id = caller().to_string();
    STATE.with(|state| {
        let mut state = state.borrow_mut();
        if state.private_keys.contains_key(&principal_id) {
            Err("Private key already exists for this principal".to_string())
        } else {
            state.private_keys.insert(principal_id.clone(), private_key);
            Ok(())
        }
    })
}

#[query]
fn get_private_key(principal_id: String) -> Result<String, String> {
    let caller_id = caller().to_string();

    if caller_id != principal_id {
        return Err("Access denied. Caller is not authorized to access the private key.".to_string());
    }

    STATE.with(|state| {
        let state = state.borrow();

        if let Some(private_key) = state.private_keys.get(&principal_id) {
            Ok(private_key.clone())
        } else {
            Err("User not found.".to_string())
        }
    })
}

// Login function
#[query]
fn login(user_type: String) -> bool {
    let principal_id = caller().to_string();
    // let principal_ref = caller();
    STATE.with(|state| {
        let state = state.borrow();
        match user_type.as_str() {
            "student" => {
                state.users.contains_key(&principal_id)
                    && student_application_status(principal_id) == Some("approved".to_string())
            }
            "institute" => {
                state.institute.contains_key(&principal_id)
                    && institute_application_status(principal_id) == Some("approved".to_string())
            }
            "admin" => state.admin.contains(&principal_id),
            _ => false,
        }
    })
}

#[query]
fn check_user_type() -> String {
    let principal_id = caller().to_string();
    // let principal_ref = caller();
    STATE.with(|state| {
        let state = state.borrow();
        if state.users.contains_key(&principal_id)
            && student_application_status(principal_id.clone()) == Some("approved".to_string())
        {
            "student".to_string()
        } else if state.institute.contains_key(&principal_id)
            && institute_application_status(principal_id.clone()) == Some("approved".to_string())
        {
            "institute".to_string()
        } else if 
        // ic_cdk::api::is_controller(&principal_ref)
        state.admin.contains(&principal_id) 
        {
            "admin".to_string()
        } else {
            "unknown".to_string()
        }
    })
}

//checks caller principal id
#[query]
fn greet() -> String {
    let principal_id = caller().to_string();
    format!("principal id - : {:?}", principal_id)
}

#[query]
pub fn is_user_already_registered() -> bool {
    let principal_id = caller().to_string();
    // let principal_ref = caller();
    STATE.with(|state| {
        let state = state.borrow();
        if state.users.contains_key(&principal_id.clone())
            || state.institute.contains_key(&principal_id.clone())
            || 
            // ic_cdk::api::is_controller(&principal_ref)
            state.admin.contains(&principal_id.clone())
        {
            true
            
        } else {
            false
        }
    })
}

#[pre_upgrade]
fn pre_upgrade() {
    STATE.with(|state| {
        let state = state.borrow();
        storage::stable_save((state.clone(),)).expect("Failed to save state to stable storage");
    });
}

#[post_upgrade]
fn post_upgrade() {
    // let (state,): (State,) =
    //     storage::stable_restore().expect("Failed to restore state from stable storage");
    // STATE.with(|s| {
    //     *s.borrow_mut() = state;
    // });
    STATE.with(|state: &RefCell<State>| {
        *state.borrow_mut() = State {
            users: HashMap::new(),
            institute: HashMap::new(),
            unapproved_institute: Vec::new(),
            unapproved_students: Vec::new(),
            rejected_students: Vec::new(),
            rejected_institutes: Vec::new(),
            admin: Vec::new(),
            unapproved_student_profile: HashMap::new(),
            unapproved_institute_profile: HashMap::new(),
            student_certificate: HashMap::new(),
            student_result: HashMap::new(),
            institute_students: HashMap::new(),
            students_registered_by_institute: Vec::new(),
            institutes_registered_by_admin: Vec::new(),
            private_keys: HashMap::new(),
            // Reset the users HashMap
        };
    });
}

export_candid!();
