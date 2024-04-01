use crate::institute;
use crate::InstituteData;
use crate::UserData;
use super::State;

use super::STATE;
use candid::CandidType;
use ic_cdk::api::caller;

use ic_cdk_macros::*;
use institute::*;
use serde::{Deserialize, Serialize};
use std::cell::RefCell;
use std::collections::HashMap;
//function to check whether the caller is admin or not
#[query]
// fn check_admin() -> bool {
//     if !(caller().to_string() == "2vxsx-fae") && !ic_cdk::api::is_controller(&ic_cdk::api::caller())
//     {
//         ic_cdk::api::trap("This user is unauthorised to use this function");
//     }
// }

fn check_admin() -> bool {
    if ic_cdk::api::is_controller(&ic_cdk::api::caller()) {
        true // Authorized
    } else {
        false // Unauthorized
    }
}

//function to approve institute profile update
#[update]
pub fn approve_institute_profile_update(institute_principal: String) -> String {
    // check_admin();
    STATE.with(|state: &RefCell<State>| {
        let mut state = state.borrow_mut();

        if let Some(institute_data) = state.unapproved_institute_profile.get(&institute_principal) {
            let institute_data_clone = institute_data.clone();

            state
                .institute
                .entry(institute_principal.clone())
                .and_modify(|e| {
                    *e = institute_data_clone;
                });

            state
                .unapproved_institute_profile
                .remove(&institute_principal);

            format!(
                "institute information updated for user: {}",
                institute_principal
            )
        } else {
            "institute not found".to_string()
        }
    })
}

//function to verify institute
#[update]
pub fn verify_institute(user_principal: String) -> String {
    // check_admin();
    STATE.with(|state: &RefCell<State>| {
        let mut state = state.borrow_mut();
        if let Some(index) = state
            .unapproved_institute
            .iter()
            .position(|principal| principal == &user_principal)
        {
            state.unapproved_institute.remove(index);
            if let Some(user) = state.institute.get_mut(&user_principal) {
                user.status = Some("approved".to_string());
            }
            return "institute is verified".to_string();
        }
        return "Institute not found".to_string();
    })
}

//function to get students list

#[query]
pub fn get_students() -> String {
    // check_admin();
    STATE.with(|state| {
        let state = state.borrow_mut();

        format!("All users - : {:?}", state.users)
    })
}

#[query]
fn get_institute_details(institute_principal: Option<String>) -> Option<InstituteData> {
    // check_admin();
    let default_principal = caller().to_string();
    let principal = institute_principal.unwrap_or(default_principal);

    STATE.with(|state| {
        let state = state.borrow();
        state.institute.get(&principal).cloned()
    })
}

#[query]
pub fn get_institute_students() -> Option<Vec<String>> {
    // // check_admin();
    let institute_id = caller().to_string();
    STATE.with(|state| {
        let state = state.borrow();
        if let Some(institute_data) = state.institute.get(&institute_id) {
            match &institute_data.institute_name {
                Some(institute_name) => {
                    match state.institute_students.get(institute_name) {
                        Some(students) if !students.is_empty() => Some(students.clone()), // Return Some with cloned Vec if students are found
                        _ => {
                            None // No students or empty list
                        }
                    }
                }
                None => {
                    None // Institute name not set
                }
            }
        } else {
            None // Institute not found
        }
    })
}



//mychange
#[query]
pub fn get_institute_students_by_id(institute_principal: String) -> Option<Vec<String>> {
    // let default_principal = caller().to_string();
    // let institute_id = institute_principal.unwrap_or_else(|| default_principal.clone()); // Handle potential panic by using unwrap_or_else
    let institute_id = institute_principal;
    STATE.with(|state| {
        let state = state.borrow();
        if let Some(institute_data) = state.institute.get(&institute_id) {
            if let Some(institute_name) = &institute_data.institute_name {
                if let Some(students) = state.institute_students.get(institute_name) {
                    if !students.is_empty() {
                        return Some(students.clone());
                    }
                }
            }
        }
        None
    })
}

//mychanges
#[query]
pub fn get_students_withdetails() -> HashMap<String, UserData> {
    // check_admin();
    STATE.with(|state| {
        let state = state.borrow_mut();
        state.users.clone()
        
    })
}








// function to get institutes list
#[query]
pub fn get_institutes() -> HashMap<String, InstituteData> {
    // // check_admin();

    STATE.with(|state| {
        let state = state.borrow();
        // Clone the hashmap before returning
        state.institute.clone()
    })
}
//function to delete institute record
#[update]
fn delete_institute_record(institute_principal: String) -> String {
    // check_admin();
    STATE.with(|state| {
        let mut state = state.borrow_mut();
        if state.institute.contains_key(&institute_principal) {
            state.institute.remove(&institute_principal);
            "removed institute".to_string()
        } else {
            "institute not found".to_string()
        }
    })
}

#[derive(Serialize, CandidType, Deserialize, Debug)]
pub struct InstituteInfo {
    name: String,
    public_key: String,
}

#[query]
fn get_institutes_name_and_public_key() -> Vec<InstituteInfo> {
    STATE.with(|state| {
        let state = state.borrow();

        state
            .institute
            .values()
            .map(|institute| InstituteInfo {
                name: institute
                    .institute_name
                    .clone()
                    .unwrap_or_else(|| String::from("Unknown")),
                public_key: institute
                    .public_key
                    .clone()
                    .unwrap_or_else(|| String::from("Unknown")),
            })
            .collect()
    })
}

#[query]
fn get_all_institute_students() -> String {
    STATE.with(|state| {
        let state = state.borrow_mut();
        format!("all data:- {:?}", state.institute_students)
    })
}
#[update]
pub fn reject_institute(user_principal: String) -> String {
    // check_admin();
    STATE.with(|state: &RefCell<State>| {
        let mut state = state.borrow_mut();
        if let Some(index) = state
            .unapproved_institute
            .iter()
            .position(|principal| principal == &user_principal)
        {
            state
                .unapproved_institute
                .retain(|principal| principal != &user_principal);
            state.rejected_institutes.push(user_principal.clone());
            if let Some(user) = state.institute.get_mut(&user_principal) {
                user.status = Some("rejected".to_string());
            }
            return "institute is rejected".to_string();
        }
        return "Institute not found".to_string();
    })
}

#[query]
pub fn get_unverified_institutes() -> Vec<String> {
    STATE.with(|state| {
        let state = state.borrow();

        state.unapproved_institute.clone()
    })
}
