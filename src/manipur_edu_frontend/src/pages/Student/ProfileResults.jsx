import React, { useState } from "react";
import Loader from "../../loader/Loader";
import { useAuth } from "../../utils/useAuthClient";
import { useQuery } from "react-query";
import Modal from "../../components/Modal";
import Background from "../../components/BackgroudPage";
import { TbArrowBarToDown } from "react-icons/tb";
import NoDataComponent from "../Institute/NoData";
import { useNavigate, useLocation , Link } from "react-router-dom";


import { aes_Decrypt, handleFileDecrypt, decrypted_Img } from "../../utils/helper";
import { useSelector } from "react-redux";
const ProfileResult = () => {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const { actor, authClient } = useAuth();
  const principal_id = authClient.getIdentity().getPrincipal().toString();
  const [imageUrl, setImageUrl] = useState("");


  const location = useLocation();
  // const entry = location.state.studentDetailsReducer;
  let entry = useSelector(
    (state) => state.studentDetailsReducer
  );

  console.log("entry is " , entry)
  // if (!entry || entry.length === 0) {
  //   return (
  //     <NoDataComponent
  //       message={"No Result to View!"}
  //       imageSrc={"ResultNoStu.png"}
  //     ></NoDataComponent>
  //   );


    //STARTS :-  CODE TO  ACCUMULATE CHUNKS 
    const getImage = async (kyc) => {
      try {
        let i = 1;
        let data;
        const newChunks = [];

        console.log("kyc in getImg funct is ", kyc)
        console.log("kyc 0  in getImg funct is ", kyc[0])
        // const chunk_id = kyc[0]["chunk_id"];
        // console.log("chunk_id is " , chunk_id)

        const chunk_id_val = kyc[0]["chunk_id"];
        const no_Of_chunks = kyc[0]["num_chunks"];

        console.log("num_chunks is ", no_Of_chunks)
        console.log("&&&&&((((((((((((((((((((((((((((((((((((&")
        console.log("  chunk_id_val is ", chunk_id_val, typeof (chunk_id_val))
        console.log("chunk_id_val is ", chunk_id_val)
        for (let i = 0; i < Number(kyc[0]["num_chunks"]); i++) {
          console.log("Fetching chunks at i = ", i);
          console.log("kyc[0].result_id is  in for  ", kyc[0]["result_id"], typeof (kyc[0]["result_id"]))


          const imageId = parseInt(kyc[0]["result_id"], 10);
          // let chunkId = parseInt(kyc[0]["chunk_id"], 10);
          let chunkId = parseInt(kyc[0]["chunk_id"], 10)

          console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
          console.log("chunkId is in for", chunkId, typeof (chunkId))
          console.log("kyc[0].result_id is  in for  ", imageId, typeof (imageId))

          // const { chunk_id, chunk_data } = await actor.get_image(imageId , chunkId);
          const res = await actor.get_image(imageId, chunkId);
          console.log("res is ", res)
          console.log("res[0] is ", res[0])
          let chunk_data = res[0]["chunk_value"];
          let next_chunk_id = res[0]["next_chunkid"]

          console.log("chunk_data is ", chunk_data)
          console.log("next_chunk_id is ", next_chunk_id)
          console.log("chunk_data.length is ", chunk_data.length)
          if (chunk_data.length > 0) {

            newChunks.push(new Uint8Array(chunk_data));
            chunkId = next_chunk_id;  // Update chunkId to fetch the next chunk
          }
        }

        // Calculate the total length of all chunks combined
        let totalLength = newChunks.reduce((acc, val) => val ? acc + val.length : acc, 0);
        let combinedData = new Uint8Array(totalLength);

        let offset = 0;
        newChunks.forEach(chunk => {
          if (chunk) {  // Ensure chunk is not null
            combinedData.set(chunk, offset);
            offset += chunk.length;
          }
        });



        // Now you have a single Uint8Array containing all the data
        console.log("Combined data is:", combinedData);
        return combinedData;

      } catch (error) {
        console.error("Failed to fetch chunks:", error);
      }
    };
    //ENDS :-  CODE TO  ACCUMULATE CHUNKS 


    const handleView = async () => {

      console.log("princi id ", principal_id)
      const getResult = await actor.get_user_result(principal_id);
      console.log('getresult', getResult);
      const sizeOfRes = getResult.Ok.length;
      console.log("sizeOfRes is ", sizeOfRes)
      const firstItem = getResult.Ok[sizeOfRes - 1];
      console.log("firstItem", firstItem);
      // console.log("result", firstItem.result);
      const privateKey = await actor.get_private_key();
      console.log("privateKey is ", privateKey)

      const kyc = {};
      kyc["0"] = firstItem;

      const imgEncrypted = await getImage(kyc)
      // const decryptedFile = await handleFileDecrypt(firstItem, entry?.[0]?.public_key?.[0]);

      console.log("imgEncyrpted is ", imgEncrypted)

      const url = await decrypted_Img(kyc, imgEncrypted, privateKey); // error iv not defined 

      // setOpenModal(true);
      const reader = new FileReader();
      reader.onload = () => {
        const imageDataUrl = reader.result;
        setImageUrl(imageDataUrl);
        setOpenModal(true);
        // document.getElementById('imagePreview').src = imageDataUrl;
      };
      reader.readAsDataURL(url);
    }
    //  if (isLoadingEntry) {
    //     return <Loader />; // Render loader if data is still loading
    //   }
    return (
      <Background>
        <div className="relative pt-10">
          <Modal
            open={openModal}
            onClose={() => setOpenModal(false)}
            image={imageUrl}
          />
          <div className="flex min-h-screen justify-evenly  ">
            <div className="w-[30%] bg-white mt-[80px] mb-[40px] rounded-[10px] flex flex-col">
              <div className="flex flex-col items-center border-b border-[#D8E1F8] mx-[20px]">
                <img className="pt-[50px]" src="/student.svg" />
                <p className="text-[Noto Sans] text-[#00227A] text-[26px] font-[400] leading-[35px] pt-[10px] ">
                  {entry?.[0]?.first_name?.[0] +
                    " " +
                    entry?.[0]?.last_name?.[0] ?? "N/A"}
                </p>
                <p className="text-[Noto Sans] text-[#687EB5] text-[15px] font-[500] leading-[21px] mb-[30px]">
                  Student #: 1234567
                </p>
              </div>
              <div className="mx-[25px] border-b border-[#D8E1F8]">
                <p className="text-[Segoe UI] text-[#00227A] font-[700] text-[14px] leading-[19px] pt-[33px] ">
                  INSTITUTE NAME
                </p>
                <p className="text-[Segoe UI] text-[#4B64A4] font-[400] text-[14px] leading-[19px] pt-[4px]">
                  {entry?.[0]?.institute_name?.[0] ?? "N/A"}
                </p>
                <p className="text-[Segoe UI] text-[#4B64A4] font-[400] text-[14px] leading-[19px] italic pt-[3px]">
                  {entry?.[0]?.program_enrolled?.[0] ?? "N/A"}
                </p>
                <p className="text-[Segoe UI] text-[#00227A] font-[700] text-[14px] leading-[19px] pt-[19px]">
                  ROLL NUMBER
                </p>
                <p className="text-[Segoe UI] text-[#4B64A4] font-[400] text-[14px] leading-[19px] pt-[4px]">
                  {entry?.[0]?.roll_no?.[0] ?? "N/A"}
                </p>
                <p className="text-[Segoe UI] text-[#00227A] font-[700] text-[14px] leading-[19px] pt-[19px]">
                  CGPA
                </p>
                <p className="text-[Segoe UI] text-[#4B64A4] font-[400] text-[14px] leading-[19px] pt-[4px]">
                  {entry?.[0]?.cgpa?.[0] ?? "N/A"}
                </p>
                <p className="text-[Segoe UI] text-[#00227A] font-[700] text-[14px] leading-[19px] pt-[19px]">
                  GRADUATION YEAR
                </p>
                <p className="text-[Segoe UI] text-[#4B64A4] font-[400] text-[14px] leading-[19px] pt-[4px] pb-[21px]">
                  {entry?.[0]?.graduation_year?.[0] ?? "N/A"}
                </p>
              </div>

              <div className="mx-[25px] border-b border-[#D8E1F8]">
                <p className="text-[Segoe UI] text-[#00227A] font-[700] text-[14px] leading-[19px] pt-[33px]">
                  DATE OF BIRTH
                </p>
                <p className="text-[Segoe UI] text-[#4B64A4] font-[400] text-[14px] leading-[19px] pt-[4px]">
                  {entry?.[0]?.date_of_birth?.[0] ?? "N/A"}
                </p>
                <p className="text-[Segoe UI] text-[#00227A] font-[700] text-[14px] leading-[19px] pt-[19px]">
                  GENDER
                </p>
                <p className="text-[Segoe UI] text-[#4B64A4] font-[400] text-[14px] leading-[19px] pt-[4px]">
                  {entry?.[0]?.gender?.[0] ?? "N/A"}
                </p>
                <p className="text-[Segoe UI] text-[#00227A] font-[700] text-[14px] leading-[19px] pt-[19px]">
                  ADDRESS
                </p>
                <p className="text-[Segoe UI] text-[#4B64A4] font-[400] text-[14px] leading-[19px] pt-[4px]">
                  {entry?.[0]?.address?.[0] ?? "N/A"}{" "}
                </p>
                <p className="text-[Segoe UI] text-[#4B64A4] font-[400] text-[14px] leading-[19px] pt-[4px] pb-[21px]">
                  {entry?.[0]?.state?.[0] + " " + entry?.[0]?.zip_code?.[0] ??
                    "N/A"}
                </p>
              </div>
              <div className="mx-[25px] border-b border-[#D8E1F8]">
                <p className="text-[Segoe UI] text-[#00227A] font-[700] text-[14px] leading-[19px] pt-[33px]">
                  INSTITUTE EMAIL-ID
                </p>
                <p className="text-[Segoe UI] text-[#4B64A4] font-[400] text-[14px] leading-[19px] pt-[4px]">
                  {entry?.[0]?.student_institute_email?.[0] ?? "N/A"}
                </p>
                <p className="text-[Segoe UI] text-[#00227A] font-[700] text-[14px] leading-[19px] pt-[19px]">
                  PERSONAL EMIAL-ID
                </p>
                <p className="text-[Segoe UI] text-[#4B64A4] font-[400] text-[14px] leading-[19px] pt-[4px]">
                  {entry?.[0]?.personal_email?.[0] ?? "N/A"}
                </p>
                <p className="text-[Segoe UI] text-[#00227A] font-[700] text-[14px] leading-[19px] pt-[19px]">
                  PHONE NUMBER
                </p>
                <p className="text-[Segoe UI] text-[#4B64A4] font-[400] text-[14px] leading-[19px] pt-[4px] pb-[21px]">
                  {entry?.[0]?.phone_no?.[0] ?? "N/A"}
                </p>
                <Link to="/personal-detail-edit">
                  <button className="w-full bg-[#0041E9] text-white rounded-[10px] py-[8px] mb-[14px]">
                    Edit details
                  </button>
                </Link>
                <button
                  onClick={() =>
                    navigate("/view-profileDetail", { state: { entry } })
                  }
                  className="w-full text-[#00227A] py-[8px] border border-[#00227A] rounded-[10px] mb-[34px]"
                >
                  View details
                </button>
              </div>
            </div>
            <div className="w-[55%] bg-white mt-[80px] rounded-[10px] mb-[200px] flex flex-col">
              <div className="border-b border-[#D8E1F8] mx-[25px] flex mt-[20px]">
                <div className=" underline">
                  <button className="mr-[47px] text-[Noto Sans] pb-[9px] text-[#00227A] font-[500] text-[18px] leading-[25px]">
                    Results
                  </button>
                </div>
                <div className=" underline">
                  <button className="text-[Noto Sans] text-[#687DB2] pb-[9px] font-[400] text-[18px] leading-[25px]">
                    Scholarships
                  </button>
                </div>
              </div>
              <div className="flex">
                <div>
                  <select
                    className="w-[198px] h-[40px] rounded-[10px] border border-[#D9EBFF] px-[15px] m-[25px] text-[Segoe UI] text-[#687DB2] font-[350] text-[15px] leading-[20px]"
                    name="semester"
                    id="semester"
                  >
                    <option
                      className="text-[Segoe UI] text-[#687DB2] font-[350] text-[15px] leading-[20px]"
                      value="Semester1"
                    >
                      Semester 1
                    </option>
                    <option
                      className="text-[Segoe UI] text-[#687DB2] font-[350] text-[15px] leading-[20px]"
                      value="Semester2"
                    >
                      Semester 2
                    </option>
                    <option
                      className="text-[Segoe UI] text-[#687DB2] font-[350] text-[15px] leading-[20px]"
                      value="Semester3"
                    >
                      Semester 3
                    </option>
                    <option
                      className="text-[Segoe UI] text-[#687DB2] font-[350] text-[15px] leading-[20px]"
                      value="Semester4"
                    >
                      Semester 4
                    </option>
                    <option
                      className="text-[Segoe UI] text-[#687DB2] font-[350] text-[15px] leading-[20px]"
                      value="Semester5"
                    >
                      Semester 5
                    </option>
                    <option
                      className="text-[Segoe UI] text-[#687DB2] font-[350] text-[15px] leading-[20px]"
                      value="Semester6"
                    >
                      Semester 6
                    </option>
                  </select>
                </div>
                <div>
                  <select
                    className="w-[147px] h-[40px] rounded-[10px] border border-[#D9EBFF] px-[15px] mt-[25px] text-[Segoe UI] text-[#687DB2] font-[350] text-[15px] leading-[20px]"
                    name="year"
                    id="year"
                  >
                    <option
                      className="text-[Segoe UI] text-[#687DB2] font-[350] text-[15px] leading-[20px]"
                      value="2024"
                    >
                      2024
                    </option>
                    <option
                      className="text-[Segoe UI] text-[#687DB2] font-[350] text-[15px] leading-[20px]"
                      value="2023"
                    >
                      2023
                    </option>
                    <option
                      className="text-[Segoe UI] text-[#687DB2] font-[350] text-[15px] leading-[20px]"
                      value="2022"
                    >
                      2022
                    </option>
                    <option
                      className="text-[Segoe UI] text-[#687DB2] font-[350] text-[15px] leading-[20px]"
                      value="2021"
                    >
                      2021
                    </option>
                    <option
                      className="text-[Segoe UI] text-[#687DB2] font-[350] text-[15px] leading-[20px]"
                      value="2020"
                    >
                      2020
                    </option>
                    <option
                      className="text-[Segoe UI] text-[#687DB2] font-[350] text-[15px] leading-[20px]"
                      value="2019"
                    >
                      2019
                    </option>
                  </select>
                </div>
              </div>
              <div className="flex justify-evenly">
                <div className="bg-[#EEF6FF] w-[40%] flex flex-col rounded-[10px] pt-[24px] box-border relative">
                  <img
                    className="w-[30px] h-[30px] ml-[8px] mt-[-14px]"
                    src={"Test.png"}
                    alt="certificate"
                  />
                  <p className="text-[Segoe UI] text-[#00227A] font-[600] text-center text-[19px] leading-[27px] pt-[9px] box-border">
                    First Year Result
                  </p>
                  <p className="text-[Segoe UI] text-[#00227A] font-[400] text-center text-[15px] leading-[20px] pt-[10px] box-border">
                    Semester: 1
                  </p>
                  <p className="text-[Segoe UI] text-[#00227A] font-[400] text-center text-[15px] leading-[20px] pt-[8px] box-border">
                    Academic Year: 2020-2021
                  </p>
                  <p
                    style={{
                      borderBottom: "1.5px solid #C7E2FF",
                      marginBottom: "0px",
                      marginTop: "18px",
                      marginLeft: "30px",
                      marginRight: "30px",
                    }}
                    className="box-border"
                  ></p>
                  <div className="flex justify-between items-center m-[15px] pt-[3px] pb-[14px] box-border">
                    <button
                      onClick={handleView}
                      className="flex items-center bg-[#89C1FF] rounded-[5px] text-[#00227A] text-[Noto Sans] text-[13px] leading-[18px] font-[400] px-[14px] py-[3px] ml-[32px] box-border"
                    >
                      <TbArrowBarToDown className="mr-[2px]" />
                      Download
                    </button>

                    <button
                      onClick={handleView}
                      className="bg-[#89C1FF] rounded-[5px] text-[#00227A] text-[Noto Sans] text-[13px] leading-[18px] font-[400] px-[18px] py-[3px] mr-[32px] box-border"
                    >
                      View
                    </button>
                  </div>
                  <div
                    className="absolute inset-0 border-[#89C1FF] rounded-[10px] pointer-events-none"
                    style={{
                      borderWidth: "1px 1px 1px 1px",
                      borderStyle: "solid",
                      top: "0px",
                      left: "0px",
                      right: "6px",
                      bottom: "6px",
                    }}
                  ></div>
                </div>
                <div className="bg-[#EEF6FF] w-[40%] flex flex-col rounded-[10px] pt-[24px] box-border relative">
                  <img
                    className="w-[30px] h-[30px] ml-[8px] mt-[-14px]"
                    src={"Test.png"}
                    alt="certificate"
                  />
                  <p className="text-[Segoe UI] text-[#00227A] font-[600] text-center text-[19px] leading-[27px] pt-[9px] box-border">
                    First Year Result
                  </p>
                  <p className="text-[Segoe UI] text-[#00227A] font-[400] text-center text-[15px] leading-[20px] pt-[10px] box-border">
                    Semester: 1(Backlog)
                  </p>
                  <p className="text-[Segoe UI] text-[#00227A] font-[400] text-center text-[15px] leading-[20px] pt-[8px] box-border">
                    Academic Year: 2020-2021
                  </p>
                  <p
                    style={{
                      borderBottom: "1.5px solid #C7E2FF",
                      marginBottom: "0px",
                      marginTop: "18px",
                      marginLeft: "30px",
                      marginRight: "30px",
                    }}
                    className="box-border"
                  ></p>
                  <div className="flex justify-between items-center m-[15px] pt-[3px] pb-[14px] box-border">
                    <button
                      onClick={handleView}
                      className="flex items-center bg-[#89C1FF] rounded-[5px] text-[#00227A] text-[Noto Sans] text-[13px] leading-[18px] font-[400] px-[14px] py-[3px] ml-[32px] box-border"
                    >
                      <TbArrowBarToDown className="mr-[2px]" />
                      Download
                    </button>

                    <button
                      onClick={handleView}
                      className="bg-[#89C1FF] rounded-[5px] text-[#00227A] text-[Noto Sans] text-[13px] leading-[18px] font-[400] px-[18px] py-[3px] mr-[32px] box-border"
                    >
                      View
                    </button>
                  </div>
                  <div
                    className="absolute inset-0 border-[#89C1FF] rounded-[10px] pointer-events-none"
                    style={{
                      borderWidth: "1px 1px 1px 1px",
                      borderStyle: "solid",
                      top: "0px",
                      left: "0px",
                      right: "6px",
                      bottom: "6px",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Background>
    );
  };
export default ProfileResult;


// import React, { useState } from "react";
// import Loader from "../../loader/Loader";
// import { useAuth } from "../../utils/useAuthClient";
// import Modal from "../../components/Modal";
// import Background from "../../components/BackgroudPage";
// import { TbArrowBarToDown } from "react-icons/tb";
// import NoDataComponent from "../Institute/NoData";
// import { Link, useNavigate } from "react-router-dom";
// import { decrypted_Img } from "../../utils/helper";
// import { useSelector } from "react-redux";

// const ProfileResult = () => {
//   const [openModal, setOpenModal] = useState(false);
//   const [imageUrl, setImageUrl] = useState("");
//   const navigate = useNavigate();
//   const { actor, authClient } = useAuth();
//   const principal_id = authClient.getIdentity().getPrincipal().toString();

//   let entry = useSelector((state) => state.studentDetailsReducer);
//   if (!entry || entry.length === 0) {
//     return (
//       <NoDataComponent
//         message={"No Result to View!"}
//         imageSrc={"ResultNoStu.png"}
//       />
//     );
//   }

//   // Function to accumulate chunks
//   const getImage = async (kyc) => {
//     try {
//       const newChunks = [];
//       let chunkId = parseInt(kyc[0]["chunk_id"], 10);
//       const imageId = parseInt(kyc[0]["result_id"], 10);

//       for (let i = 0; i < Number(kyc[0]["num_chunks"]); i++) {
//         const res = await actor.get_image(imageId, chunkId);
//         let chunk_data = res[0]["chunk_value"];
//         let next_chunk_id = res[0]["next_chunkid"];

//         if (chunk_data.length > 0) {
//           newChunks.push(new Uint8Array(chunk_data));
//           chunkId = next_chunk_id; // Update chunkId to fetch the next chunk
//         }
//       }

//       // Combine all chunks into a single Uint8Array
//       let totalLength = newChunks.reduce((acc, val) => val ? acc + val.length : acc, 0);
//       let combinedData = new Uint8Array(totalLength);

//       let offset = 0;
//       newChunks.forEach(chunk => {
//         if (chunk) {
//           combinedData.set(chunk, offset);
//           offset += chunk.length;
//         }
//       });

//       return combinedData;
//     } catch (error) {
//       console.error("Failed to fetch chunks:", error);
//     }
//   };

//   const handleView = async () => {
//     try {
//       const getResult = await actor.get_user_result(principal_id);
//       const firstItem = getResult.Ok[getResult.Ok.length - 1];
//       const privateKey = await actor.get_private_key();
//       const imgEncrypted = await getImage([firstItem]);

//       const url = await decrypted_Img([firstItem], imgEncrypted, privateKey);

//       const reader = new FileReader();
//       reader.onload = () => {
//         setImageUrl(reader.result);
//         setOpenModal(true);
//       };
//       reader.readAsDataURL(url);
//     } catch (error) {
//       console.error("Failed to handle view:", error);
//     }
//   };

//   return (
//     <Background>
//       <div className="relative pt-10">
//         <Modal
//           open={openModal}
//           onClose={() => setOpenModal(false)}
//           image={imageUrl}
//         />
//         <div className="flex min-h-screen justify-evenly">
//           <div className="w-[30%] bg-white mt-[80px] mb-[40px] rounded-[10px] flex flex-col">
//             <div className="flex flex-col items-center border-b border-[#D8E1F8] mx-[20px]">
//               <img className="pt-[50px]" src="/student.svg" alt="student" />
//               <p className="text-[Noto Sans] text-[#00227A] text-[26px] font-[400] leading-[35px] pt-[10px]">
//                 {entry?.[0]?.first_name?.[0] + " " + entry?.[0]?.last_name?.[0] ?? "N/A"}
//               </p>
//               <p className="text-[Noto Sans] text-[#687EB5] text-[15px] font-[500] leading-[21px] mb-[30px]">
//                 Student #: 1234567
//               </p>
//             </div>
//             <div className="mx-[25px] border-b border-[#D8E1F8]">
//               <p className="text-[Segoe UI] text-[#00227A] font-[700] text-[14px] leading-[19px] pt-[33px]">
//                 INSTITUTE NAME
//               </p>
//               <p className="text-[Segoe UI] text-[#4B64A4] font-[400] text-[14px] leading-[19px] pt-[4px]">
//                 {entry?.[0]?.institute_name?.[0] ?? "N/A"}
//               </p>
//               <p className="text-[Segoe UI] text-[#4B64A4] font-[400] text-[14px] leading-[19px] italic pt-[3px]">
//                 {entry?.[0]?.program_enrolled?.[0] ?? "N/A"}
//               </p>
//               <p className="text-[Segoe UI] text-[#00227A] font-[700] text-[14px] leading-[19px] pt-[19px]">
//                 ROLL NUMBER
//               </p>
//               <p className="text-[Segoe UI] text-[#4B64A4] font-[400] text-[14px] leading-[19px] pt-[4px]">
//                 {entry?.[0]?.roll_no?.[0] ?? "N/A"}
//               </p>
//               <p className="text-[Segoe UI] text-[#00227A] font-[700] text-[14px] leading-[19px] pt-[19px]">
//                 CGPA
//               </p>
//               <p className="text-[Segoe UI] text-[#4B64A4] font-[400] text-[14px] leading-[19px] pt-[4px]">
//                 {entry?.[0]?.cgpa?.[0] ?? "N/A"}
//               </p>
//               <p className="text-[Segoe UI] text-[#00227A] font-[700] text-[14px] leading-[19px] pt-[19px]">
//                 GRADUATION YEAR
//               </p>
//               <p className="text-[Segoe UI] text-[#4B64A4] font-[400] text-[14px] leading-[19px] pt-[4px] pb-[21px]">
//                 {entry?.[0]?.graduation_year?.[0] ?? "N/A"}
//               </p>
//             </div>
//             <div className="mx-[25px] border-b border-[#D8E1F8]">
//               <p className="text-[Segoe UI] text-[#00227A] font-[700] text-[14px] leading-[19px] pt-[33px]">
//                 DATE OF BIRTH
//               </p>
//               <p className="text-[Segoe UI] text-[#4B64A4] font-[400] text-[14px] leading-[19px] pt-[4px]">
//                 {entry?.[0]?.date_of_birth?.[0] ?? "N/A"}
//               </p>
//               <p className="text-[Segoe UI] text-[#00227A] font-[700] text-[14px] leading-[19px] pt-[19px]">
//                 GENDER
//               </p>
//               <p className="text-[Segoe UI] text-[#4B64A4] font-[400] text-[14px] leading-[19px] pt-[4px]">
//                 {entry?.[0]?.gender?.[0] ?? "N/A"}
//               </p>
//               <p className="text-[Segoe UI] text-[#00227A] font-[700] text-[14px] leading-[19px] pt-[19px]">
//                 ADDRESS
//               </p>
//               <p className="text-[Segoe UI] text-[#4B64A4] font-[400] text-[14px] leading-[19px] pt-[4px]">
//                 {entry?.[0]?.address?.[0] ?? "N/A"}
//               </p>
//               <p className="text-[Segoe UI] text-[#4B64A4] font-[400] text-[14px] leading-[19px] pt-[4px] pb-[21px]">
//                 {entry?.[0]?.state?.[0] + " " + entry?.[0]?.zip_code?.[0] ?? "N/A"}
//               </p>
//             </div>
//             <div className="mx-[25px] border-b border-[#D8E1F8]">
//               <p className="text-[Segoe UI] text-[#00227A] font-[700] text-[14px] leading-[19px] pt-[33px]">
//                 INSTITUTE EMAIL-ID
//               </p>
//               <p className="text-[Segoe UI] text-[#4B64A4] font-[400] text-[14px] leading-[19px] pt-[4px]">
//                 {entry?.[0]?.email_id?.[0] ?? "N/A"}
//               </p>
//               <p className="text-[Segoe UI] text-[#00227A] font-[700] text-[14px] leading-[19px] pt-[19px]">
//                 STUDENT MOBILE NUMBER
//               </p>
//               <p className="text-[Segoe UI] text-[#4B64A4] font-[400] text-[14px] leading-[19px] pt-[4px] pb-[21px]">
//                 {entry?.[0]?.mobile_no?.[0] ?? "N/A"}
//               </p>
//             </div>
//           </div>

//           <div className="flex flex-col w-[60%] bg-white mt-[80px] mb-[40px] rounded-[10px]">
//             <div className="border-b border-[#D8E1F8] mx-[32px] pb-[14px]">
//               <p className="pt-[54px] text-[Noto Sans] text-[#4B64A4] text-[20px] font-[400] leading-[27px]">
//                 Your Result Has Been Found!
//               </p>
//               <p className="text-[Noto Sans] text-[#4B64A4] text-[15px] font-[400] leading-[20px] pt-[5px]">
//                 Click on download button to view and download result
//               </p>
//               <div className="flex justify-end">
//                 <div className="bg-[#00227A] text-white text-[Noto Sans] flex justify-between items-center mt-[10px] w-[189px] h-[40px] px-[25px] py-[7px] rounded-[7px] cursor-pointer"
//                      onClick={handleView}>
//                   Download Result
//                   <TbArrowBarToDown className="w-[24px] h-[24px] ml-[5px]" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Background>
//   );
// };

// export default ProfileResult;
