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

pub type ScholarshipStore = BTreeMap<String,ScholarShip>;

// thread_local! { 
//     static SCHOLARSHIP_STORE: RefCell<ScholarshipStore> = RefCell::new(HashMap::new());
// }

// pub type ScholarshipStore = HashMap<String, Vec<ScholarShip>>;


#[derive(Serialize, CandidType, Deserialize, Debug, Clone, Default)]
pub struct ScholarShip {
    scholarship_id: Option<String>,
    offerby: String,
    name: String,
    description: String,
    amount: String,
    date: String,
    deadline: String,
    education: String,
    gender: String,
    status: String,
    applicants: Vec<Principal>,
}
// pub struct ScholarShip {
//     scholarship_id: Option<String>,
//     name: String,
//     description: String,
//     amount: String,
//     date: String,
//     deadline: String,
//     education: String,
//     gender: String,
//     status: String,
//     applicants: Vec<Principal>,
// }
// pub struct ApplicantDetails {
//     pub scholarship_id : Option <String>,
//     student_id: Option<String>,
//     first_name: Option<String>,
//     last_name: Option<String>,
//     date_of_birth: Option<String>,
//     personal_email: Option<String>,
//     gender: Option<String>,
//     address: Option<String>,
//     // city: Option<String>,
//     state: Option<String>,
//     zip_code: Option<u32>,
//     // pub institute_name: Option<String>,
//     roll_no: Option<String>,
//     cgpa: Option<f32>,
//     graduation_year: Option<u16>,
//     program_enrolled: Option<String>,
//     message: Option<String>,
// }

#[update]
pub async fn create_scholarship(mut scholarship_details: ScholarShip) -> Result<String, String> {
    let principal_id = ic_cdk::api::caller();
    
    let uid = raw_rand().await.unwrap().0;
    let uid = format!("{:x}", Sha256::digest(&uid));
    

    let result = SCHOLARSHIP_STORE.with(|el| {
        let mut scholarship = el.borrow_mut();
        
        scholarship_details.scholarship_id = Some(uid.clone());
        scholarship_details.offerby = principal_id.to_string();
        // let key = (principal_id.to_string(), uid );
        // scholarship.insert(key, scholarship_details);
        scholarship.insert(uid.clone(), scholarship_details);
        // scholarship
        //     .entry(principal_id.to_string())
        //     .or_insert_with(Vec::new)
        //     .push(scholarship_details);
        "Scholarship created successfully".to_string()
    });
Ok(result)
}

// #[query]
// pub fn get_scholarship(scholarship_id: String) -> ScholarShip {
//     SCHOLARSHIP_STORE.with(|el| el.borrow().get(&scholarship_id).cloned().unwrap())
// }

// #[query]
// pub fn get_scholarship_by_institute(id : String)  {
//     SCHOLARSHIP_STORE.with(|el| el.borrow().clone());
// }


// #[query]
// pub fn get_scholarship(scholarship_id: String) -> Option<ScholarShip> {
//     SCHOLARSHIP_STORE.with(|el| {
//         let scholarship_store = el.borrow();
//         let mut result = None;
//         for scholarships in scholarship_store.values() {
//             for scholarship in scholarships {
//                 if let Some(id) = &scholarship.scholarship_id {
//                     if id == &scholarship_id {
//                         result = Some(scholarship.clone());
//                         break;
//                     }
//                 }
//             }
//         }
//         result
//     })
// }

// #[query]
// pub fn get_scholarship_by_institute(id : String) -> Vec<ScholarShip> {
//     SCHOLARSHIP_STORE.with(|el| {
//         let scholarship_store = el.borrow();
//         if let Some(scholarships) = scholarship_store.get(&id) {
//             scholarships.clone()
//         } else {
//             Vec::new()
//         }
//     })
// }





#[query]
pub fn get_all_scholarship() -> ScholarshipStore {
    SCHOLARSHIP_STORE.with(|el| el.borrow().clone())
}

// #[update]
// pub fn approve_scholarship(id : String) {
//     SCHOLARSHIP_STORE.with(|el| {
//         let _ =  el.borrow_mut()
//               .clone()
//               .entry(id)
//               .and_modify(|e| e.status = "approved".to_string());
//       });

// }

// #[update]
// pub fn apply_scholarship(id : String
//     // , applicant_data: ApplicantDetails
// ) {
//     let principal_id = ic_cdk::api::caller();
//     SCHOLARSHIP_STORE.with(|el| {
//         let _ =  el.borrow_mut()
//               .clone()
//               .entry(id)
//               .and_modify(move |e| e.applicants.push(principal_id));
//       });

// }
