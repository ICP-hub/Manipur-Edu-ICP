import React, { useState } from "react";
import Loader from "../../loader/Loader";
import { useAuth } from "../../utils/useAuthClient";
import { useQuery } from "react-query";
import Modal from "../../components/Modal";
import Background from "../../components/BackgroudPage";
import { TbArrowBarToDown } from "react-icons/tb";
import NoDataComponent from "../Institute/NoData";
import {
  Link,
  useNavigate,
} from "../../../../../node_modules/react-router-dom/dist/index";
import { handleFileDecrypt } from "../../utils/helper";
import { useSelector } from "react-redux";
const ProfileResult = () => {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const { actor, authClient } = useAuth();
  const principal_id = authClient.getIdentity().getPrincipal().toString();
  const [imageUrl, setImageUrl] = useState("");

  let entry = useSelector((state) => state.studentDetailsReducer);
  if (!entry || entry.length === 0) {
    return (
      <NoDataComponent
        message={"No Result to View!"}
        imageSrc={"ResultNoStu.png"}
      ></NoDataComponent>
    );
  }
  const handleView = async () => {
    const getResult = await actor.get_user_result(principal_id);
    console.log("getresult", getResult);
    const firstItem = getResult.Ok[0];
    console.log("firstItem", firstItem);
    console.log("result", firstItem.result);
    const decryptedFile = await handleFileDecrypt(
      firstItem.result,
      entry?.[0]?.public_key?.[0]
    );
    console.log(decryptedFile);
    const url = URL.createObjectURL(decryptedFile);
    setImageUrl(url);

    setOpenModal(true);
  };
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
              {/* <div className="bg-[#EEF6FF] w-[40%] flex flex-col rounded-[10px] pt-[24px] box-border relative">
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
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </Background>
  );
};
export default ProfileResult;
