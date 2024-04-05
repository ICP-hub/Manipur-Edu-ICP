// use super::State;
// use super::STATE;




use ic_cdk::api::management_canister::main::raw_rand;

// use regex::Regex;
// use serde::{Deserialize, Serialize};
use sha2::{Digest, Sha256};


use candid::types::principal;
use candid::{CandidType, Deserialize, Principal};
use ic_cdk::api::caller;
use ic_cdk::storage;
use ic_cdk_macros::*;
use serde::Serialize;
use std::cell::RefCell;
use std::collections::{BTreeMap, HashMap};

thread_local! {
    static SCHOLARSHIP_STORE: RefCell<ScholarshipStore> = RefCell::new(BTreeMap::new());
}

pub type ScholarshipStore = BTreeMap<String, ScholarShip>;


#[derive(Serialize, CandidType, Deserialize, Debug, Clone, Default)]
pub struct ScholarShip {
    scholarship_id: Option<String>,
    name: String,
    description: String,
    amount: String,
    duration: String,
    deadline: String,
    eligibility: String,
    institute: String,
    status: String,
    applicants: Vec<Principal>,
}

#[update]
pub async fn create_scholarship(mut scholarship_details: ScholarShip) -> Result<String, String> {
    let principal_id = ic_cdk::api::caller();
    
    let uid = raw_rand().await.unwrap().0;
    let uid = format!("{:x}", Sha256::digest(&uid));


    let result = SCHOLARSHIP_STORE.with(|el| {
        let mut scholarship = el.borrow_mut();
        scholarship_details.scholarship_id = Some(uid.clone());
        scholarship.insert(principal_id.to_string(), scholarship_details);
        "Scholarship created successfully".to_string()
    });
Ok(result)
}

#[query]
pub fn get_scholarship(scholarship_id: String) -> ScholarShip {
    SCHOLARSHIP_STORE.with(|el| el.borrow().get(&scholarship_id).cloned().unwrap())
}

#[query]
pub fn get_scholarship_by_institute(id : String)  {
    SCHOLARSHIP_STORE.with(|el| el.borrow().clone());
}


#[query]
pub fn get_all_scholarship() -> ScholarshipStore {
    SCHOLARSHIP_STORE.with(|el| el.borrow().clone())
}

#[update]
pub fn approve_scholarship(id : String) {
    SCHOLARSHIP_STORE.with(|el| {
        let _ =  el.borrow_mut()
              .clone()
              .entry(id)
              .and_modify(|e| e.status = "approved".to_string());
      });

}

#[update]
pub fn apply_scholarship(id : String) {
    let principal_id = ic_cdk::api::caller();
    SCHOLARSHIP_STORE.with(|el| {
        let _ =  el.borrow_mut()
              .clone()
              .entry(id)
              .and_modify(move |e| e.applicants.push(principal_id));
      });

}
