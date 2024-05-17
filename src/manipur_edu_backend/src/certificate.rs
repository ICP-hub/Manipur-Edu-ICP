use crate::student;

use super::State;
use super::STATE;
use candid::types::principal;
use candid::CandidType;

use crate::student::*;
use ic_cdk::api::caller;
use ic_cdk::api::management_canister::main::raw_rand;
use ic_cdk_macros::*;
use regex::Regex;
use serde::{Deserialize, Serialize};
use sha2::{Digest, Sha256};
use std::cell::RefCell;
#[derive(Serialize, CandidType, Deserialize, Debug, Clone)]
pub struct CertificateData {
	iv : String , 
	aes_key : String , 
	chunk_id : String , 
	num_chunks: usize, 
    certificate_id: String,
    certificate_info: String,
    // certificate_link: Vec<u8>,
    issued_by: String,
    issue_date: String,
}


#[update]
pub fn upload_certificate(
    student_principal: String,
    certificate_data: CertificateData,
) -> Result<(), String> {
    STATE.with(|state| {
        let mut state = state.borrow_mut();

        match state.users.get_mut(&student_principal) {
            Some(user_data) => match user_data.add_certificate(certificate_data.certificate_id) {
                Ok(()) => Ok(()),
                Err(err) => Err(err),
            },
            None => Err("User not found".to_string()),
        }
    })
}


//function for institutes to upload certificates
#[update]
pub fn create_user_certificate(
    student_principal: String,
    user_certificate: CertificateData,
) -> Result<String, String> {
    STATE.with(|state| {
        // Borrow state mutably once and perform operations within this scope
        let mut state = state.borrow_mut();

        // Check if the user exists first
        if let Some(user_data) = state.users.get_mut(&student_principal) {
            // User exists, proceed to add result to user data and student_result map
            match user_data.add_certificate(user_certificate.certificate_id.clone()) {
                Ok(_) => {
                    state
                        .student_certificate
                        .entry(student_principal.clone())
                        .or_insert_with(Vec::new)
                        .push(user_certificate); 
                    Ok("Student certificate inserted".to_string())
                }
                Err(err) => Err(err),
            }
        } else {
            // If the user does not exist
            Err("Student not found".to_string())
        }
    })
}



//function to get student certificates
#[query]
pub fn get_user_certificates(user_principal: String) -> Result<Vec<CertificateData>, String> {
    STATE.with(|state| {
        let state = state.borrow(); // Borrow state immutably

        if !state.users.contains_key(&user_principal) {
            // User does not exist
            return Err("Student doesn't exist".to_string());
        }

        match state.student_certificate.get(&user_principal) {
            Some(certificates) => Ok(certificates.clone()), // Assuming CertificateData can be cloned
            None => Err("No certificates found for student".to_string()),
        }
    })
}


