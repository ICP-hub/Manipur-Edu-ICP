// use crate::institute;
// use crate::InstituteData;
// use crate::UserData;
// use super::State;

// use super::STATE;
// use candid::CandidType;
// use ic_cdk::api::caller;

// use ic_cdk_macros::*;
// use institute::*;
// use serde::{Deserialize, Serialize};
// use std::cell::RefCell;
// use std::collections::HashMap;
// //function to check whether the caller is admin or not
// #[query]
// fn check_admin() -> bool {
//     if ic_cdk::api::is_controller(&ic_cdk::api::caller()) {
//         true // Authorized
//     } else {
//         false // Unauthorized
//     }
// }


// //Temp check_admin for testing
// #[query]
// fn checkk_admin() -> bool {
//     let principal_id = caller().to_string();
//     // let principal_ref = caller();
//     STATE.with(|state| {
//         let state = state.borrow();
//         if state.admin.contains(&principal_id.clone()){
//             true
//         }
//         else{
//             false
//         }
//     })
// }
// // fn check_admin() -> bool {
// //     if !(caller().to_string() == "2vxsx-fae") && !ic_cdk::api::is_controller(&ic_cdk::api::caller())
// //     {
// //         ic_cdk::api::trap("This user is unauthorised to use this function");
// //     }
// // }
// #[update]
// pub fn register_admin() -> String {
//     let principal_id = caller().to_string();
//     STATE.with(|state| {
//         let mut state = state.borrow_mut();
//         if state.admin.contains(&principal_id) {
           
//              format!("You have already sign up. Click on Login to login",)
           
//         }
//          else{ 
//             state.admin.push(principal_id);
//             format!("You have successfully sign up as admin.",)
//          }
//     })
// }

// #[query]
// pub fn get_admin() -> String{
//        // check_admin();
//        STATE.with(|state| {
//         let state = state.borrow_mut();

//         format!("All admin - : {:?}", state.admin)
//     })

// }

// #[query]
// pub fn get_all_institute_edit_req() -> Vec<String> {
//     STATE.with(|state| {
//         let state = state.borrow();
//         // let principal = caller().to_string();
//         // let mut edit_requests: Vec<String> = Vec::new();
       
//         // let mut institute = state.institute.keys();
//         // for institute_id in institutes {
//         //     if let Some(institute_data) = state.unapproved_institute_profile.contains_key(institute_id) {
//         //         edit_requests.push(institute_id.clone());
        
//         //     }
//         // }
//         let mut unapproved_institutes: Vec<String> = Vec::new();

//     for (institute_id, _) in &state.unapproved_institute_profile {
//         unapproved_institutes.push(institute_id.clone());
//     }
//     unapproved_institutes
        
//     })
// }
  

// //get unapproved_institute_profile institute data
// #[query]
// pub fn get_institute_profile_updated(institute_principal: String) -> Option<InstituteData>{
//     STATE.with(|state| {
//         let state = state.borrow();
//         state.unapproved_institute_profile.get(&institute_principal).cloned()
//     })

// }


// //function to approve institute profile update
// #[update]
// pub fn approve_institute_profile_update(institute_principal: String) -> String {
//     // check_admin();
//     STATE.with(|state: &RefCell<State>| {
//         let mut state = state.borrow_mut();

//         if let Some(institute_data) = state.unapproved_institute_profile.get(&institute_principal) {
//             let institute_data_clone = institute_data.clone();

//             state
//                 .institute
//                 .entry(institute_principal.clone())
//                 .and_modify(|e| {
//                     *e = institute_data_clone;
//                 });

//             state
//                 .unapproved_institute_profile
//                 .remove(&institute_principal);

//             format!(
//                 "institute information updated for user: {}",
//                 institute_principal
//             )
//         } else {
//             "institute not found".to_string()
//         }
//     })
// }

// //function to verify institute
// #[update]
// pub fn verify_institute(user_principal: String) -> String {
//     // check_admin();
//     STATE.with(|state: &RefCell<State>| {
//         let mut state = state.borrow_mut();
//         if let Some(index) = state
//             .unapproved_institute
//             .iter()
//             .position(|principal| principal == &user_principal)
//         {
//             state.unapproved_institute.remove(index);
//             if let Some(user) = state.institute.get_mut(&user_principal) {
//                 user.status = Some("approved".to_string());
//             }
//             return "institute is verified".to_string();
//         }
//         return "Institute not found".to_string();
//     })
// }

// //function to get students list

// #[query]
// pub fn get_students() -> String {
//     // check_admin();
//     STATE.with(|state| {
//         let state = state.borrow_mut();

//         format!("All users - : {:?}", state.users)
//     })
// }

// #[query]
// fn get_institute_details(institute_principal: Option<String>) -> Option<InstituteData> {
//     // check_admin();
//     let default_principal = caller().to_string();
//     let principal = institute_principal.unwrap_or(default_principal);

//     STATE.with(|state| {
//         let state = state.borrow();
//         state.institute.get(&principal).cloned()
//     })
// }

// #[query]
// pub fn get_institute_students() -> Option<Vec<String>> {
//     // // check_admin();
//     let institute_id = caller().to_string();
//     STATE.with(|state| {
//         let state = state.borrow();
//         if let Some(institute_data) = state.institute.get(&institute_id) {
//             match &institute_data.institute_name {
//                 Some(institute_name) => {
//                     match state.institute_students.get(institute_name) {
//                         Some(students) if !students.is_empty() => Some(students.clone()), // Return Some with cloned Vec if students are found
//                         _ => {
//                             None // No students or empty list
//                         }
//                     }
//                 }
//                 None => {
//                     None // Institute name not set
//                 }
//             }
//         } else {
//             None // Institute not found
//         }
//     })
// }




// #[query]
// pub fn get_institute_students_by_id(institute_principal: String) -> Option<Vec<String>> {
//     // let default_principal = caller().to_string();
//     // let institute_id = institute_principal.unwrap_or_else(|| default_principal.clone()); // Handle potential panic by using unwrap_or_else
//     let institute_id = institute_principal;
//     STATE.with(|state| {
//         let state = state.borrow();
//         if let Some(institute_data) = state.institute.get(&institute_id) {
//             if let Some(institute_name) = &institute_data.institute_name {
//                 if let Some(students) = state.institute_students.get(institute_name) {
//                     if !students.is_empty() {
//                         return Some(students.clone());
//                     }
//                 }
//             }
//         }
//         None
//     })
// }


// #[query]
// pub fn get_students_withdetails() -> HashMap<String, UserData> {
//     // check_admin();
//     STATE.with(|state| {
//         let state = state.borrow_mut();
//         state.users.clone()
        
//     })
// }








// // function to get institutes list
// #[query]
// pub fn get_institutes() -> HashMap<String, InstituteData> {
//     // // check_admin();

//     STATE.with(|state| {
//         let state = state.borrow();
//         // Clone the hashmap before returning
//         state.institute.clone()
//     })
// }
// //function to delete institute record
// #[update]
// fn delete_institute_record(institute_principal: String) -> String {
//     // check_admin();
//     STATE.with(|state| {
//         let mut state = state.borrow_mut();
//         if state.institute.contains_key(&institute_principal) {
//             state.institute.remove(&institute_principal);
//             "removed institute".to_string()
//         } else {
//             "institute not found".to_string()
//         }
//     })
// }

// #[derive(Serialize, CandidType, Deserialize, Debug)]
// pub struct InstituteInfo {
//     name: String,
//     public_key: String,
// }

// #[query]
// fn get_institutes_name_and_public_key() -> Vec<InstituteInfo> {
//     STATE.with(|state| {
//         let state = state.borrow();

//         state
//             .institute
//             .values()
//             .map(|institute| InstituteInfo {
//                 name: institute
//                     .institute_name
//                     .clone()
//                     .unwrap_or_else(|| String::from("Unknown")),
//                 public_key: institute
//                     .public_key
//                     .clone()
//                     .unwrap_or_else(|| String::from("Unknown")),
//             })
//             .collect()
//     })
// }

// #[query]
// fn get_all_institute_students() -> String {
//     STATE.with(|state| {
//         let state = state.borrow_mut();
//         format!("all data:- {:?}", state.institute_students)
//     })
// }
// #[update]
// pub fn reject_institute(user_principal: String) -> String {
//     // check_admin();
//     STATE.with(|state: &RefCell<State>| {
//         let mut state = state.borrow_mut();
//         if let Some(index) = state
//             .unapproved_institute
//             .iter()
//             .position(|principal| principal == &user_principal)
//         {
//             state
//                 .unapproved_institute
//                 .retain(|principal| principal != &user_principal);
//             state.rejected_institutes.push(user_principal.clone());
//             if let Some(user) = state.institute.get_mut(&user_principal) {
//                 user.status = Some("rejected".to_string());
//             }
//             return "institute is rejected".to_string();
//         }
//         return "Institute not found".to_string();
//     })
// }

// #[query]
// pub fn get_unverified_institutes() -> Vec<String> {
//     STATE.with(|state| {
//         let state = state.borrow();

//         state.unapproved_institute.clone()
//     })
// }


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
fn check_admin() -> bool {
    if ic_cdk::api::is_controller(&ic_cdk::api::caller()) {
        true // Authorized
    } else {
        false // Unauthorized
    }
}


//Temp check_admin for testing
#[query]
fn checkk_admin() -> bool {
    let principal_id = caller().to_string();
    // let principal_ref = caller();
    STATE.with(|state| {
        let state = state.borrow();
        if state.admin.contains(&principal_id.clone()){
            true
        }
        else{
            false
        }
    })
}
// fn check_admin() -> bool {
//     if !(caller().to_string() == "2vxsx-fae") && !ic_cdk::api::is_controller(&ic_cdk::api::caller())
//     {
//         ic_cdk::api::trap("This user is unauthorised to use this function");
//     }
// }
#[update]
pub fn register_admin() -> String {
    let principal_id = caller().to_string();
    STATE.with(|state| {
        let mut state = state.borrow_mut();
        if state.admin.contains(&principal_id) {
           
             format!("You have already sign up. Click on Login to login",)
           
        }
         else{ 
            state.admin.push(principal_id);
            format!("You have successfully sign up as admin.",)
         }
    })
}

#[query]
pub fn get_admin() -> String{
       // check_admin();
       STATE.with(|state| {
        let state = state.borrow_mut();

        format!("All admin - : {:?}", state.admin)
    })

}

#[query]
pub fn get_all_institute_edit_req() -> Vec<String> {
    STATE.with(|state| {
        let state = state.borrow();
        // let principal = caller().to_string();
        // let mut edit_requests: Vec<String> = Vec::new();
       
        // let mut institute = state.institute.keys();
        // for institute_id in institutes {
        //     if let Some(institute_data) = state.unapproved_institute_profile.contains_key(institute_id) {
        //         edit_requests.push(institute_id.clone());
        
        //     }
        // }
        let mut unapproved_institutes: Vec<String> = Vec::new();

    for (institute_id, _) in &state.unapproved_institute_profile {
        unapproved_institutes.push(institute_id.clone());
    }
    unapproved_institutes
        
    })
}
  

//get unapproved_institute_profile institute data
#[query]
pub fn get_institute_profile_updated(institute_principal: String) -> Option<InstituteData>{
    STATE.with(|state| {
        let state = state.borrow();
        state.unapproved_institute_profile.get(&institute_principal).cloned()
    })

}


//function to approve institute profile update
#[update]
pub fn approve_institute_profile_update(institute_principal: String) -> String {
    STATE.with(|state: &RefCell<State>| {
        let mut state = state.borrow_mut();

        if let Some(institute_data) = state.unapproved_institute_profile.get(&institute_principal) {
            let institute_data_clone = institute_data.clone();
            let result = replace_institute_name(&mut state, &institute_principal, &institute_data_clone);
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
                "Institute information updated for user: {}",
                institute_principal
            )
        } else {
            "Institute not found".to_string()
        }
    })
}


fn replace_institute_name(state: &mut State, institute_principal: &str, institute_data_clone: &InstituteData) -> Option<String> {
    if let Some(institute_og_data) = state.institute.get(institute_principal) {
        match &institute_og_data.institute_name {
            Some(institute_name) => {
                if let Some(student_ids) = state.institute_students.get(institute_name) {
                    for student_id in student_ids {
                        if let Some(student_data) = state.users.get_mut(student_id) {
                            student_data.institute_name = Some(institute_data_clone.institute_name.clone().unwrap_or_else(|| String::new()));
                        }
                    }
                    // Update institute name in institute_students
                    state.institute_students.insert(institute_data_clone.institute_name.clone().unwrap_or_else(|| String::new()), student_ids.clone());
                    // Remove old institute name from institute_students
                    state.institute_students.remove(institute_name);
                }
            }
            None => {
                // Handle the case where the institute name is not set
                return Some("Institute name not set".to_string());
            }
        }
    } else {
        // Handle the case where the institute is not found
        return Some("Institute not found".to_string());
    }
    None
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

//func to get students registered under the caller institute 
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



//func to get students registered under the institute by its id
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

//func to get students registered under the institute page


//func to get all students list with details
#[query]
pub fn get_students_withdetails() -> HashMap<String, UserData> {
    // check_admin();
    STATE.with(|state| {
        let state = state.borrow_mut();
        state.users.clone()
        
    })
}

//students list pagination
#[query]
pub fn get_students_withdetails_page(page: u32, page_size: u32) -> HashMap<String, UserData> {
    STATE.with(|state| {
        let state = state.borrow();

        let all_students = state.users.clone();
        let total_students = all_students.len() as u32;
        let total_pages = (total_students + page_size - 1) / page_size; 

        
        let offset = (page - 1) * page_size;
        let limit = page_size.min(total_students - offset);

        // Fetch the subset of students for the current page
        let mut students_page: HashMap<String, UserData> = HashMap::new();
        for (key, value) in all_students.iter().skip(offset as usize).take(limit as usize) {
            students_page.insert(key.clone(), value.clone());
        }

        students_page
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

// institute list page wise
#[query]
pub fn get_institutes_page(page: u32, page_size: u32) -> HashMap<String, InstituteData> {
    STATE.with(|state| {
        let state = state.borrow();

        let all_institutes = state.institute.clone();
        let total_institutes = all_institutes.len() as u32;
        let total_pages = (total_institutes + page_size - 1) / page_size; // Calculate total number of pages

        // Calculate offset and limit for fetching the current page of data
        let offset = (page - 1) * page_size;
        let limit = page_size.min(total_institutes - offset);

        // Fetch the subset of institutes for the current page
        let mut institutes_page: HashMap<String, InstituteData> = HashMap::new();
        for (key, value) in all_institutes.iter().skip(offset as usize).take(limit as usize) {
            institutes_page.insert(key.clone(), value.clone());
        }

        institutes_page
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

//institute_students list pagination
#[query]
fn get_allinstitute_students_page(page: u32, page_size: u32) -> Vec<String> {
    STATE.with(|state| {
        let state = state.borrow();

        let all_students = state.institute_students.values().flatten().cloned().collect::<Vec<String>>();
        let total_students = all_students.len() as u32;
        let total_pages = (total_students + page_size - 1) / page_size; // Calculate total number of pages

        // Calculate offset and limit for fetching the current page of data
        let offset = (page - 1) * page_size;
        let limit = page_size.min(total_students - offset);

        // Fetch the subset of institute students for the current page
        let students_page: Vec<String> = all_students.iter().skip(offset as usize).take(limit as usize).cloned().collect();

        students_page
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

