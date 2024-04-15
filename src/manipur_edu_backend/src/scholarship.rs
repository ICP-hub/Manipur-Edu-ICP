// use super::State;
// use super::STATE;




use ic_cdk::api::management_canister::main::raw_rand;
use ic_cdk::api::time;

// use regex::Regex;
// use serde::{Deserialize, Serialize};
use sha2::{Digest, Sha256};

use chrono::{DateTime, NaiveDate};
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
    // static APPLICANT_STORE: RefCell<ApplicantStore> = RefCell::new(BTreeMap::new());
}

pub type ScholarshipStore = BTreeMap<String,ScholarShip>;
// pub type ApplicantStore = BTreeMap<String, ApplicantDetails>;


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
impl ScholarShip {
    fn validate(&self) -> Result<(), String> {
        // current date
        // let current_date = chrono::offset::Local::now();
        
        // let dt = Local::now();
        // // // Get components
        // let naive_utc = dt.naive_utc();
        // let offset = dt.offset().clone();
        // // Serialize, pass through FFI... and recreate the `DateTime`:
        // let  current_date = DateTime::<Local>::from_naive_utc_and_offset(naive_utc, offset);
       
        // // // // Fields validation
        if self.name.is_empty() {
            return Err(String::from("Name field is empty"));
        }

        if self.gender.is_empty() {
            return Err(String::from("Gender field is empty"));
        }

        if self.education.is_empty() {
            return Err(String::from("Education Level field is empty"));
        }



        // // // // DATE VALIDATION
        if self.date.is_empty() {
            return Err(String::from("Date field cannot be empty"));
        }

        // check format
        let date = NaiveDate::parse_from_str(&self.date, "%Y-%m-%d")
            .map_err(|_| String::from("Invalid date format"))?;

        // Check if date is in past
        // if date < current_date {
        //     return Err(String::from("Date must be in the future"));
        // }


        // // // // DEADLINE VALIDATION        
        if self.deadline.is_empty() {
            return Err(String::from("Deadline field cannot be empty"));
        }

        // check deadline format
        let deadline_date = NaiveDate::parse_from_str(&self.deadline, "%Y-%m-%d")
            .map_err(|_| String::from("Invalid deadline format"))?;

        // check deadline is in future
        // if deadline_date < current_date {
        //     return Err(String::from("Deadline must be in the future"));
        // }


        // // // // AMOUNT VALIDATION      
        if self.amount.is_empty() {
            return Err(String::from("Scholarship Worth cannot be empty"));
        }

        // check format
        let amount = self.amount.parse::<f64>()
            .map_err(|_| String::from("Invalid amount format"))?;

        // check amount>0 
        if amount <= 0.0 {
            return Err(String::from("Amount must be greater than zero"));
        }

        Ok(())
    }
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
//     , applicant_data: ApplicantDetails
// ) {
//     let principal_id = ic_cdk::api::caller();
//     SCHOLARSHIP_STORE.with(|el| {
//         let _ =  el.borrow_mut()
//               .clone()
//               .entry(id)
//               .and_modify(move |e| e.applicants.push(principal_id));
//       });
//     APPLICANT_STORE.with(|el| {
//         el.borrow_mut().insert(principal_id.clone(), applicant_data);
//     });
// }
