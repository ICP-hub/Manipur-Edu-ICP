
use crate::*;
use ic_cdk::{query, update};
use crate::types::{CreateCanisterArgument,CanisterInstallMode,CanisterIdRecord,CreateCanisterArgumentExtended,InstallCodeArgument,InstallCodeArgumentExtended};
use crate::api::call::{call, call_with_payment128, CallResult};
use crate::api::canister_version;
// use ic_cdk::api;
use candid::Principal;
use ic_cdk::println;
// use candid::Nat;
// use crate::get_canister_id;

//meet notes with Abhishek sir :-
// no need to put logic to handle get func for different canister in backend
//instead of creating seperate hashmap for mapping canisterid, store canister id in the data itself
//end


//how to get data from particular canister
// student -> its detail in canister1 -> found its id
//id -> get_user_result -> but its result in canister2
//e.g get_user_result -> student id 

//if we store canister id in data itself 
//how we access data for canister id 

// How to define the interfaces for the canisters we're calling so we can use them in your code.
//Use cross-canister calls to retrieve data from the appropriate canister.
// should i create a state of mapping canisterid with userid, resultid, docid
 

 // the create_canister creating new canister , query is the current backend_canister id will get changed or not after that?
 // if its changes then how to access the state in here



//todo : make it private from candid ui 
//add cycle check condition
//wasm limit for installcode - harshit sir
#[update]
pub async fn check_canister(arg: CanisterIdRecord) -> Result<Principal, String>
{
    let response: (CanisterStatusResponse,) = call(
        Principal::management_canister(),
        "canister_status",
        (arg,)
    ).await.map_err(|e| format!("Failed to get canister status: {:?}", e))?;
    
    let status_response = response.0;
    let memory_used = status_response.memory_size;
    let cycle_left = status_response.cycles ;
    // status_response.reserved_cycles_limit
    let max_storage_limit: u128 = 350 * 1_073_741_824;  //350GB
    
    if memory_used > max_storage_limit {
        println!("Storage threshold exceeded! Usage: {} bytes", memory_used);
        let arg = CreateCanisterArgument {
            settings: None,
        };
        let (canister_id,) = match create_canister(arg).await {
            Ok(id) => id,
            Err((_, err_string)) => return Err(err_string),
        };
        let addcycles = deposit_cycles(canister_id, 100000000).await;
    
        let canister_id_principal = canister_id.canister_id;
    
        println!("Canister ID: {}", canister_id_principal.to_string());

        let arg1 = InstallCodeArgument {
            mode: CanisterInstallMode::Install, 
            canister_id: canister_id_principal, 
            wasm_module: vec![],
            arg: vec![], 
        };
        let installcode = install_code(arg1).await;
        println!("Canister ID: {:?}", canister_id);
        Ok(canister_id_principal)
    } else {
        
        Ok(arg.canister_id)

    }

}

async fn create_canister(
    arg: CreateCanisterArgument,
    // cycles: u128,
) -> CallResult<(CanisterIdRecord,)> {
    let extended_arg = CreateCanisterArgumentExtended {
        settings: arg.settings,
        sender_canister_version: Some(canister_version()),
    };
    let cycles: u128 = 100_000_000_000;
    call_with_payment128(
        Principal::management_canister(),
        "create_canister",
        (extended_arg,),
        cycles,
    )
    .await
}

async fn deposit_cycles(arg: CanisterIdRecord, cycles: u128) -> CallResult<()> {
    call_with_payment128(
        Principal::management_canister(),
        "deposit_cycles",
        (arg,),
        cycles,
    )
    .await
}

//wasm_module_sample - other way to fetch it - harshit sir
async fn install_code(arg: InstallCodeArgument) -> CallResult<()> {
    let wasm_base64: &str = "3831fb07143cd43c3c51f770342d2b7d0a594311529f5503587bf1544ccd44be";
    let wasm_module_sample: Vec<u8> = base64::decode(wasm_base64).expect("Decoding failed");

    // let wasm_module_sample: Vec<u8> = include_bytes!("/home/anshika13/Manipur-Edu/new/Manipur-Edu-ICP/.dfx/local/canisters/manipur_edu_backend/manipur_edu_backend.wasm").to_vec();
    
    
    let cycles: u128 = 10_000_000_000; 
    
    let extended_arg = InstallCodeArgumentExtended {
        mode: arg.mode,
        canister_id: arg.canister_id,
        wasm_module: wasm_module_sample,
        arg: arg.arg,
        sender_canister_version: Some(canister_version()),
    };
    
   
    call_with_payment128(
        Principal::management_canister(),
        "install_code",
        (extended_arg,),
        cycles,
    ).await
}

















