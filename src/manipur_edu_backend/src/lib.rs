use candid::{CandidType, Deserialize};
use ic_cdk::api;
use ic_cdk::api::caller;
use ic_cdk::storage;
use ic_cdk_macros::*;
use serde::Serialize;
use serde_json;
use std::cell::RefCell;
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

thread_local! {
    pub static STATE: RefCell<State> = RefCell::new(State::default());
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
// Login function
#[query]
fn login(user_type: String) -> bool {
    let principal_id = caller().to_string();
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
        } else if state.admin.contains(&principal_id) {
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
    STATE.with(|state| {
        let state = state.borrow();
        if state.users.contains_key(&principal_id.clone())
            || state.institute.contains_key(&principal_id.clone())
            || state.admin.contains(&principal_id)
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
