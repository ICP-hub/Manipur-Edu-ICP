 use crate::UserData;

use super::State;

use super::STATE;
use candid::CandidType;
use ic_cdk::api::caller;

use ic_cdk_macros::*;
use serde::{Deserialize, Serialize};
use std::cell::RefCell;

use ic_cdk::api::management_canister::main::raw_rand;

use regex::Regex;
use sha2::{Digest, Sha256};

#[derive(Serialize, CandidType, Deserialize, Debug, Clone, Default)]
pub struct InstituteData {
    pub institute_id: Option<String>,
    pub institute_name: Option<String>,
    pub institute_size: Option<u32>,
    pub email: Option<String>,
    pub address: Option<String>,
    pub website: Option<String>,
    pub city: Option<String>,
    pub state: Option<String>,
    pub zip_code: Option<u32>,
    pub phone_no: Option<String>,
    pub public_key: Option<String>,
    pub coed_status: Option<String>,
    pub approval_authority: Option<String>,
    pub institute_type: Option<String>,
    pub status: Option<String>,
}

impl InstituteData {
    //institute form data validation

    pub fn validate(&self) -> Result<(), String> {
        // Validate institute_id
        if let Some(ref id) = self.institute_id {
            if id.trim().is_empty() {
                return Err("Institute ID cannot be empty".into());
            }
        }

        // Validate institute_name
        if let Some(ref name) = self.institute_name {
            if name.trim().is_empty() {
                return Err("Institute name cannot be empty".into());
            }
        }

        if let Some(ref city) = self.city {
            if city.trim().is_empty() {
                return Err("Institute city cannot be empty".into());
            }
        }
        if let Some(ref coed) = self.coed_status {
            if coed.trim().is_empty() {
                return Err("Institute coed status cannot be empty".into());
            }
        }

        if let Some(ref website) = self.website {
            if website.trim().is_empty() {
                return Err("Institute website cannot be empty".into());
            }
        }

        if let Some(ref state) = self.state {
            if state.trim().is_empty() {
                return Err("Institute state cannot be empty".into());
            }
        }

        if let Some(ref approval_authority) = self.approval_authority {
            if approval_authority.trim().is_empty() {
                return Err("Approval authority cannot be empty".into());
            }
        }

        // Validate institute_size
        if let Some(size) = self.institute_size {
            if size == 0 || size > u32::MAX {
                // In practice, `size > u32::MAX` is unnecessary due to Rust's type safety
                return Err("Institute size must be a positive number and within u32 range".into());
            }
        }

        // Validate email
        if let Some(ref email) = self.email {
            let email_regex =
                Regex::new(r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$").unwrap();
            if !email_regex.is_match(email) {
                return Err("Invalid email address".into());
            }
        }

        if let Some(ref address) = self.address {
            if address.trim().is_empty() {
                return Err("Primary address cannot be empty".into());
            }
        }

        // Validate zip_code
        if let Some(zip) = self.zip_code {
            if (zip <= 99999 || zip > 999999) || zip > u32::MAX {
                return Err("Zip code must be a valid 6-digit number".into());
            }
        }

        // Validate phone_no
        if let Some(ref phone) = self.phone_no {
            let phone_regex = Regex::new(r"^\+?[0-9]{10,15}$").unwrap();
            if !phone_regex.is_match(phone) {
                return Err("Invalid phone number".into());
            }
        }

        Ok(())
    }
}

//function to check whether the caller is institute or not
fn check_institute() {
    let institute_principal = caller();

    STATE.with(|state| {
        let state = state.borrow();
        if !state
            .institute
            .contains_key(&institute_principal.to_string())
            || state
                .unapproved_institute
                .contains(&institute_principal.to_string())
        {
            ic_cdk::api::trap("This user is unauthorised to use this function");
        }
    })
}

//function to check institute is approved or not
#[query]

pub fn institute_application_status(institute_principal: String) -> Option<String> {
    STATE.with(|state| {
        let state = state.borrow();
        state
            .institute
            .get(&institute_principal)
            .and_then(|user| user.status.clone())
    })
}
//function for institute to register
#[update]
pub async fn register_institute(mut institute_data: InstituteData) -> String {
    let principal_id: String = caller().to_string();
    let uid = raw_rand().await.unwrap().0;
    let uid = format!("{:x}", Sha256::digest(&uid));

    let id = uid.clone().to_string();

    // Get a reference to the thread-local STATE
    STATE.with(|state: &RefCell<State>| {
        let mut state = state.borrow_mut();

        if state.institute.contains_key(&principal_id) {
            format!("Institute already registered with data",)
        } else {
            institute_data.institute_id = Some(id);

            match institute_data.validate() {
                Ok(_) => {
                    println!("Validation passed!");
                    institute_data.status = Some("pending".to_string());
                    state.institute.insert(principal_id.clone(), institute_data);
                    state.unapproved_institute.push(principal_id.clone());
                    format!("Institute registered successfully with data",)
                }
                Err(e) => {
                    format!("Validation error: {}", e)
                }
            }
        }
    })
}

//function for institute to edit their profile
#[update]
pub fn edit_institute_profile(institute_data: InstituteData) -> String {
    check_institute();
    let principal_id = caller().to_string();

    STATE.with(|state: &RefCell<State>| {
        let mut state = state.borrow_mut();
        if state
            .unapproved_institute_profile
            .contains_key(&principal_id)
        {
            format!("you already have a pending request")
        } else {
            if state.institute.contains_key(&principal_id) {
                state
                    .unapproved_institute_profile
                    .insert(principal_id.clone(), institute_data);
                // Return a String without early return
                format!(
                    "institute profile request sent: {:?}",
                    state.unapproved_institute_profile.get(&principal_id)
                )
            } else {
                // Correctly return a String from this branch
                "institute doesn't exist".to_string()
            }
        }
    })
}

// #[query]
// pub fn get_all_students_edit_req() -> Vec<String> {
//     STATE.with(|state| {
//         let state = state.borrow();

//         
//         let edit_requests: Vec<String> = state.unapproved_student_profile.keys().cloned().collect();

//         edit_requests
//     })
// }


#[query]
pub fn get_all_students_edit_req(institute_principal: Option<String>) -> Vec<String> {
    STATE.with(|state| {
        let state = state.borrow();
        let institute_principal = institute_principal.unwrap_or(caller().to_string());
        let mut edit_requests: Vec<String> = Vec::new();
        if let Some(institute) = state.institute.get(&institute_principal) {
            if let Some(institute_name) = &institute.institute_name {
                // Assuming `institute_students` may contain both verified and unverified students
                // and you have a separate mechanism to distinguish them, like an `unverified_students` list
                if let Some(students) = state.institute_students.get(institute_name) {
                    for student_id in students {
                        if state.unapproved_student_profile.contains_key(student_id) {
                            edit_requests.push(student_id.clone());
                        }
                    }
                }
            }
        }
        

        edit_requests
    })
}
  

//get unapproved_student_profile userdata
#[query]
pub fn get_student_profile_updated(user_principal: String) -> Option<UserData>{
    STATE.with(|state| {
        let state = state.borrow();
        state.unapproved_student_profile.get(&user_principal).cloned()
    })
}


//function to approve student profile update
#[update]
pub fn approve_student_profile_update(user_principal: String) -> String {
    STATE.with(|state: &RefCell<State>| {
        let mut state = state.borrow_mut();

        if let Some(user_data) = state.unapproved_student_profile.get(&user_principal) {
            let user_data_clone = user_data.clone();

            state.users.entry(user_principal.clone()).and_modify(|e| {
                *e = user_data_clone;
            });

            state.unapproved_student_profile.remove(&user_principal);

            format!("Student information updated for user: {}", user_principal)
        } else {
            "Student not found".to_string()
        }
    })
}

//function to verify or approve student
#[update]
pub fn verify_student(user_principal: String) -> String {
    // check_institute();
    STATE.with(|state: &RefCell<State>| {
        let mut state = state.borrow_mut();
        if let Some(index) = state
            .unapproved_students
            .iter()
            .position(|principal| principal == &user_principal)
        {
            state.unapproved_students.remove(index);
            if let Some(user) = state.users.get_mut(&user_principal) {
                user.status = Some("approved".to_string());
            }
            return "Student is verified".to_string();
        }
        return "Student not found".to_string();
    })
}

#[update]
pub fn reject_student(user_principal: String) -> String {
    STATE.with(|state| {
        let institute_name: Option<String>;
        let mut found = false;

        {
            // Immutable borrow scope begins
            let state = state.borrow();
            if let Some(index) = state
                .unapproved_students
                .iter()
                .position(|principal| principal == &user_principal)
            {
                found = true;
                // Assuming `caller()` returns an ID that can be used to lookup institute information
                let institute_principal_id = caller().to_string();
                // Temporarily store the institute name for later use
                institute_name = state
                    .institute
                    .get(&institute_principal_id)
                    .and_then(|data| data.institute_name.clone());
            } else {
                institute_name = None;
            }
            // Immutable borrow scope ends here
        }

        // Now that the immutable borrow has ended, we can borrow state as mutable
        if found {
            let mut state = state.borrow_mut();
            // Perform the removal from unapproved_students and addition to rejected_students
            state
                .unapproved_students
                .retain(|principal| principal != &user_principal);
            state.rejected_students.push(user_principal.clone());

            // Use the institute_name to remove the student from institute_students, if found
            if let Some(name) = institute_name {
                if let Some(students) = state.institute_students.get_mut(&name) {
                    students.retain(|x| x != &user_principal);
                }
            }
            if let Some(user) = state.users.get_mut(&user_principal) {
                user.status = Some("rejected".to_string());
            }

            "Student is rejected".to_string()
        } else {
            "Student not found".to_string()
        }
    })
}

//function to delete student record
#[update]
fn delete_student_record(student_principal: String) -> String {
    // check_institute();

    STATE.with(|state| {
        let mut state = state.borrow_mut();
        if let Some(student) = state.users.remove(&student_principal) {
            if let Some(institute_name) = student.institute_name {
                if let Some(students) = state.institute_students.get_mut(&institute_name) {
                    students.retain(|x| x != &student_principal);
                }
            }
            "removed user".to_string()
        } else {
            "student not found".to_string()
        }
    })
}

#[query]
pub fn get_unverified_students(institute_principal: Option<String>) -> Vec<String> {
    STATE.with(|state| {
        let state = state.borrow();
        let institute_principal = institute_principal.unwrap_or(caller().to_string());

        // Initialize an empty vector to hold the IDs of unverified students
        let mut unverified_students: Vec<String> = Vec::new();

        if let Some(institute) = state.institute.get(&institute_principal) {
            if let Some(institute_name) = &institute.institute_name {
                // Assuming `institute_students` may contain both verified and unverified students
                // and you have a separate mechanism to distinguish them, like an `unverified_students` list
                if let Some(students) = state.institute_students.get(institute_name) {
                    // Iterate over the students and select only those that are unverified
                    // This requires you to have a way to check if a student is verified or not
                    // For example, checking against a list of unverified student IDs
                    for student_id in students {
                        if state.unapproved_students.contains(student_id) {
                            unverified_students.push(student_id.clone());
                        }
                    }
                }
            }
        }

        unverified_students
    })
}

#[query]
fn get_student_details(student_principal: String) -> Option<UserData> {
    STATE.with(|state| {
        let state = state.borrow();
        state.users.get(&student_principal).cloned()
    })
}
