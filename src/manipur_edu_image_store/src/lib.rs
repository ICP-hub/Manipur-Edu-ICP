use candid::{CandidType, Decode, Deserialize, Encode};
use ic_stable_structures::memory_manager::{MemoryId, MemoryManager, VirtualMemory};
use ic_stable_structures::storable::Bound;
use ic_stable_structures::{DefaultMemoryImpl, StableBTreeMap, Storable};

use ic_cdk_macros::*;
use serde::Serialize;

use std::{borrow::Cow, cell::RefCell};


type Memory = VirtualMemory<DefaultMemoryImpl>;

const MAX_KEY_SIZE: u32 = 8;
const MAX_VALUE_SIZE: u32 = 129;

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



thread_local! {
    

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

export_candid!();