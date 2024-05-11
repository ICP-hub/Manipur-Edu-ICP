use super::State;
use super::STATE;
use candid::types::principal;
use candid::CandidType;

use crate::certificate::*;
use crate::studentresult::*;
use ic_cdk::api::caller;
use ic_cdk::api::management_canister::main::raw_rand;
use ic_cdk_macros::*;
use regex::Regex;
use serde::{Deserialize, Serialize};
use sha2::{Digest, Sha256};
use std::cell::RefCell;

#[derive(Serialize, CandidType, Deserialize, Debug, Clone, Default)]
pub struct UserData {
    student_id: Option<String>,
    first_name: Option<String>,
    last_name: Option<String>,
    date_of_birth: Option<String>,
    personal_email: Option<String>,
    gender: Option<String>,
    address: Option<String>,
    city: Option<String>,
    state: Option<String>,
    zip_code: Option<u32>,
    pub institute_name: Option<String>,
    roll_no: Option<String>,
    student_institute_email: Option<String>,
    phone_no: Option<String>,
    cgpa: Option<f32>,
    graduation_year: Option<u16>,
    program_enrolled: Option<String>,
    public_key: Option<String>,
    aadhar_no: Option<String>,
    mother_name: Option<String>,
    father_name: Option<String>,
    certificates: Option<Vec<String>>,
    result: Option<Vec<String>>,
    pub status: Option<String>,
    pub kyc: Vec<u8>,
}

impl UserData {
    // Provide a public method to add certificates
    pub fn add_certificate(&mut self, certificate_id: String) -> Result<(), String> {
        let certificates = self.certificates.get_or_insert_with(Vec::new);
        certificates.push(certificate_id);
        Ok(())
    }
    // Provide a public method to add results

    pub fn add_result(&mut self, result_id: String) -> Result<(), String> {
        let result = self.result.get_or_insert_with(Vec::new);
        result.push(result_id);
        Ok(())
    }
    //validation functions for student
    pub fn validate(&self) -> Result<(), String> {
        if let Some(ref id) = self.student_id {
            if id.trim().is_empty() {
                return Err("Student ID cannot be empty".into());
            }
        }

        if let Some(ref program_enrolled) = self.program_enrolled {
            if program_enrolled.trim().is_empty() {
                return Err("Student Program Enrolled cannot be empty".into());
            }
        }

        if let Some(ref name) = self.first_name {
            if name.trim().is_empty() {
                return Err("student name cannot be empty".into());
            }
        }

        if let Some(ref name) = self.last_name {
            if name.trim().is_empty() {
                return Err("student name cannot be empty".into());
            }
        }

        if let Some(ref father_name) = self.father_name {
            if father_name.trim().is_empty() {
                return Err("Father name cannot be empty".into());
            }
        }

        if let Some(ref mother_name) = self.mother_name {
            if mother_name.trim().is_empty() {
                return Err("Mother name cannot be empty".into());
            }
        }

        if let Some(ref gender) = self.gender {
            if gender.trim().is_empty() {
                return Err("student gender cannot be empty".into());
            }
        }
        if let Some(ref state) = self.state {
            if state.trim().is_empty() {
                return Err("State cannot be empty".into());
            }
        }

        if let Some(cgpa) = self.cgpa {
            if cgpa < 0.0 || cgpa > 10.0 {
                return Err("CGPA must be between 0 and 10".into());
            }
        }

        if let Some(ref city) = self.city {
            if city.trim().is_empty() {
                return Err("City cannot be empty".into());
            }
        }

        // Validate email
        if let Some(ref email) = self.personal_email {
            let email_regex =
                Regex::new(r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$").unwrap();
            if !email_regex.is_match(email) {
                return Err("Invalid personal_email address".into());
            }
        }

        if let Some(ref email) = self.student_institute_email {
            let email_regex =
                Regex::new(r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$").unwrap();
            if !email_regex.is_match(email) && !email.is_empty() {
                return Err("Invalid  student_institute_email email address".into());
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

        if let Some(ref roll) = self.roll_no {
            if roll.trim().is_empty() {
                return Err("Roll number cannot be empty".into());
            }
        }

        if let Some(graduation) = self.graduation_year {
            if (graduation <= 999 || graduation > 9999) || graduation > u16::MAX {
                return Err("Graduation Year must be a valid year".into());
            }
        }

        // Validate phone_no
        if let Some(ref phone) = self.phone_no {
            let phone_regex = Regex::new(r"^[0-9]{10}$").unwrap();
            if !phone_regex.is_match(phone) {
                return Err("Invalid phone number".into());
            }
        }

        if let Some(ref aadhar) = self.aadhar_no {
            let aadhar_regex = Regex::new(r"^[0-9]{12}$").unwrap();
            if !aadhar_regex.is_match(aadhar) {
                return Err("Invalid aadhar number".into());
            }
        }

        if let Some(ref dob) = self.date_of_birth {
            let dob_regex = Regex::new(r"^\d{4}-\d{2}-\d{2}$").unwrap();
            if !dob_regex.is_match(dob) {
                return Err("Date of birth must be in YYYY-MM-DD format".into());
            }
        }

        Ok(())
    }
}

//checks whether the caller is student or not
fn check_student() {
    let user_principal = caller();

    STATE.with(|state| {
        let state = state.borrow();
        if !state.users.contains_key(&user_principal.to_string()) {
            ic_cdk::api::trap("This user is unauthorised to use this function");
        }
    })
}

//function for student to edit profile
#[update]
pub fn edit_student_profile(student_data: UserData) -> String {
    check_student();
    let principal_id = caller().to_string();

    STATE.with(|state: &RefCell<State>| {
        let mut state = state.borrow_mut();
        if state.unapproved_student_profile.contains_key(&principal_id) {
            // Return early with a String
            format!("you already have a pending request")
        } else {
            if state.users.contains_key(&principal_id) {
                state
                    .unapproved_student_profile
                    .insert(principal_id.clone(), student_data);
                // Return a String without early return
                format!(
                    "student profile request sent: {:?}",
                    state.unapproved_student_profile.get(&principal_id)
                )
            } else {
                // Correctly return a String from this branch
                "student doesn't exist".to_string()
            }
        }
    })
}

//function that checks whether student is approved by institute or not
#[query]

pub fn student_application_status(user_principal: String) -> Option<String> {
    STATE.with(|state| {
        let state = state.borrow();
        state
            .users
            .get(&user_principal)
            .and_then(|user| user.status.clone())
    })
}
#[update]
pub async fn register_user(mut user_data: UserData) -> String {
    let principal_id = caller().to_string();
    let uid = raw_rand().await.unwrap().0;
    let uid = format!("{:x}", Sha256::digest(&uid));

    let id = uid.clone().to_string();

    STATE.with(|state| {
        let mut state = state.borrow_mut();

        if state.users.contains_key(&principal_id) {
            if state.unapproved_students.contains(&principal_id) {
                format!("Wait for your profile to get approved")
            } else if state.rejected_students.contains(&principal_id) {
                format!("Your profile has been rejected")
            } else {
                format!("You have already sign up. Click on Login to login",)
            }
        } else {
            user_data.student_id = Some(id);
            let cgpa = user_data.cgpa.map(|cgpa| (cgpa * 100.0).round() / 100.0);
            match user_data.validate() {
                Ok(_) => {
                    println!("Validation passed!");
                    user_data.status = Some("pending".to_string());
                    user_data.cgpa = cgpa;
                    if let Some(institute_name) = &user_data.institute_name {
                        state
                            .institute_students
                            .entry(institute_name.clone())
                            .or_insert_with(Vec::new)
                            .push(principal_id.clone());
                    }
                    state.users.insert(principal_id.clone(), user_data);
                    state.unapproved_students.push(principal_id.clone());
                    format!("Student registered successfully",)
                }
                Err(e) => {
                    format!("Validation error: {}", e)
                }
            }
        }
    })
}
