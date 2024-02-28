use crate::student;

use super::State;
use super::STATE;
use candid::types::principal;
use candid::CandidType;

use ic_cdk::api::caller;
use ic_cdk::api::management_canister::main::raw_rand;
use ic_cdk_macros::*;
use regex::Regex;
use serde::{Deserialize, Serialize};
use sha2::{Digest, Sha256};
use std::cell::RefCell;
use std::result;

#[derive(Serialize, CandidType, Deserialize, Debug, Clone)]
pub struct UserResult {
    result_id: String,
    result: Vec<u8>,
    issued_by: String,
    issued_date: String,
    semester: String,
}


//function for institutes to upload student result

#[update]
pub fn create_user_result(
    student_principal: String,
    user_result: UserResult,
) -> Result<String, String> {
    STATE.with(|state| {
        // Borrow state mutably once and perform operations within this scope
        let mut state = state.borrow_mut();

        // Check if the user exists first
        if let Some(user_data) = state.users.get_mut(&student_principal) {
            // User exists, proceed to add result to user data and student_result map
            match user_data.add_result(user_result.result_id.clone()) {
                Ok(_) => {
                    // Now, add the user_result to the student_result map
                    state
                        .student_result
                        .entry(student_principal.clone())
                        .or_insert_with(Vec::new)
                        .push(user_result);
                    Ok("Student result inserted".to_string())
                }
                Err(err) => Err(err),
            }
        } else {
            // If the user does not exist
            Err("Student not found".to_string())
        }
    })
}



//function to get student result
#[query]
pub fn get_user_result(user_principal: String) -> Result<Vec<UserResult>, String> {
    STATE.with(|state| {
        let state = state.borrow(); // Borrow state immutably

        if !state.users.contains_key(&user_principal) {
            // User does not exist
            return Err("Student doesn't exist".to_string());
        }

        match state.student_result.get(&user_principal) {
            Some(result) => Ok(result.clone()), // Assuming CertificateData can be cloned
            None => Err("No result found for student".to_string()),
        }
    })
}
