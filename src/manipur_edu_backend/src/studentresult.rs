// use crate::canister;
// use crate::student;

// use super::State;
use super::STATE;
// use candid::types::principal;
use candid::CandidType;

use candid::Principal;
// use ic_cdk::api::caller;
// use ic_cdk::api::management_canister::main::raw_rand;
use ic_cdk_macros::*;
// use regex::Regex;
use serde::{Deserialize, Serialize};
// use serde_json::to_string;
// use sha2::{Digest, Sha256};
// use std::cell::RefCell;
// use std::result;
use crate::canister::check_canister;
use crate::get_canister_id;
use crate::CanisterIdRecord;

use ic_cdk::api::call::call;

#[derive(Serialize, CandidType, Deserialize, Debug, Clone)]
pub struct UserResult {
    result_id: String,
    result: Vec<u8>,
    issued_by: String,
    issued_date: String,
    semester: String,
    canisterid: Option<Principal>,
}


//function for institutes to upload student result

#[update]
pub async fn create_user_result(
    student_principal: String,
    mut user_result: UserResult,
) -> Result<String, String> {
    let canisterid = get_canister_id();
    let canister_id_record = CanisterIdRecord {
        canister_id: canisterid,
    };
    let canister_principal = check_canister(canister_id_record).await?;

    if canisterid != canister_principal {
        let result: Result<(String,), _> = call(canister_principal, "create_user_result", (student_principal.clone(), user_result)).await;
        match result {
            Ok((res,)) => Ok(res),
            Err(e) => Err(format!("Failed to call canister: {:?}", e)),
        }
    }else {
        
    
    STATE.with(|state| {
        // Borrow state mutably once and perform operations within this scope
        let mut state = state.borrow_mut();
        
        // Check if the user exists first
        if let Some(user_data) = state.users.get_mut(&student_principal) {
            // User exists, proceed to add result to user data and student_result map
            match user_data.add_result(user_result.result_id.clone()) {
                Ok(_) => {
                    // Now, add the user_result to the student_result map
                    user_result.canisterid = Some(canisterid);
                    state
                        .student_result
                        .entry(student_principal.clone())
                        .or_insert_with(Vec::new)
                        .push(user_result);
                    // state.canister_map.insert(student_principal.clone(), canisterid);
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

//this func first get the canisterid using the userid from CanisterMap then call another result function with canister id
// #[update]
// pub async fn fetch_user_result(user_principal: String) -> Result<Vec<UserResult>, String> {
//     let canister_id = STATE.with(|state| {
//         let state = state.borrow();
//         state.canister_map.get(&user_principal).cloned()
//     });

//     match canister_id {
//         Some(canisterid) => {
//             get_user_result_from_canister(canisterid, user_principal).await
//         }
//         None => Err("Canister ID not found for the given user principal".to_string()),
//     }
// }

// this func call that canister's func get_user_result to get the result -> makes a cross-canister call
// async fn get_user_result_from_canister(
//     canister_id: Principal,
//     user_principal: String,
// ) -> Result<Vec<UserResult>, String> {
//     let result: Result<(Vec<UserResult>,), _> = call(canister_id, "get_user_result", (user_principal,)).await;
//     // result.map(|(res,)| res).map_err(|err| format!("Failed to call canister: {:?}", err))
//     match result {
//         Ok((res,)) => Ok(res),
//         Err((_code, message)) => Err(format!("Failed to call canister: (CanisterError, {:?})", message)),
//     }
// }
