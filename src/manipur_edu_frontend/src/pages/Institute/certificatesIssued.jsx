import React, { useState } from "react";
import EditResult from "../../components/institute/edit_result_pop";
import UploadResult from "../../components/institute/upload_result_popup";
import Modal from "../../components/modal";

const CertificatesIssued = ({ entry }) => {
  const [editresultpopup, seteditresultpopup] = useState(false);
  const [uploadresultpopup, setuploadresultpopup] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const entries = [
    {
      name: "Certificate of Attendance",
      id: "GlobalSign",
      email: "Student-id",
      rollnum: "11-11-2023",
    },
    {
      name: "Certificate of Attendance",
      id: "GlobalSign",
      email: "Student-id",
      rollnum: "11-11-2023",
    },
    {
      name: "Certificate of Attendance",
      id: "GlobalSign",
      email: "Student-id",
      rollnum: "11-11-2023",
    },
    {
      name: "Certificate of Attendance",
      id: "GlobalSign",
      email: "Student-id",
      rollnum: "11-11-2023",
    },
    {
      name: "Certificate of Attendance",
      id: "GlobalSign",
      email: "Student-id",
      rollnum: "11-11-2023",
    },
    {
      name: "Certificate of Attendance",
      id: "GlobalSign",
      email: "Student-id",
      rollnum: "11-11-2023",
    },
    {
      name: "Certificate of Attendance",
      id: "GlobalSign",
      email: "Student-id",
      rollnum: "11-11-2023",
    },
    {
      name: "Certificate of Attendance",
      id: "GlobalSign",
      email: "Student-id",
      rollnum: "11-11-2023",
    },
    {
      name: "Certificate of Attendance",
      id: "GlobalSign",
      email: "Student-id",
      rollnum: "11-11-2023",
    },
    {
      name: "Certificate of Attendance",
      id: "GlobalSign",
      email: "Student-id",
      rollnum: "11-11-2023",
    },
    {
      name: "Certificate of Attendance",
      id: "GlobalSign",
      email: "Student-id",
      rollnum: "11-11-2023",
    },
    {
      name: "Certificate of Attendance",
      id: "GlobalSign",
      email: "Student-id",
      rollnum: "11-11-2023",
    },
  ];
  return (
    <> <Modal open={openModal} onClose={() => setOpenModal(false)} />
      <div className="w-[85%] self-center  pt-[27px]">
        <div className="grid grid-cols-[repeat(5,1fr)_50px]  py-[15px] mt-[27px] rounded-md bg-[#D9EBFF] font-[600] font-[Segoe UI] text-[15px] text-[#00227A] leading-[20px]">
          <div className="flex justify-center col-span-1">CERTIFICATE INFO</div>
          <div className="flex justify-center col-span-1">ISSUED BY</div>
          <div className="flex justify-center col-span-1">ISSUED TO</div>
          <div className="flex justify-center col-span-1">ISSUE DATE</div>
          <div className="flex justify-center col-span-1">CERTIFICATE</div>

          {/* Adjust width as needed */}
        </div>
        {entries.map((entry, index) => (
          <Card
            key={index}
            entry={entry}
            seteditresultpopup={seteditresultpopup}
            setOpenModal={setOpenModal}
          />
        ))}
         
        <div className="relative">
          <EditResult
            open={editresultpopup}
            onClose={() => seteditresultpopup(false)}
          />
          <UploadResult
            open={uploadresultpopup}
            onClose={() => setuploadresultpopup(false)}
          />
        </div>

        <div className="  flex justify-between pt-[50px] pb-[100px]">
          <button
            onClick={() => setuploadresultpopup(true)}
            className="text-[white] rounded-[10px] bg-[#0041E9] px-[34px] py-[16px]"
          >
            Issue New Certificate
          </button>
          <p>Page 1 of 100</p>
        </div>
      </div>
    </>
  );
};
export default CertificatesIssued;
const Card = ({ entry, seteditresultpopup, setOpenModal }) => {
  return (
    <div className="grid grid-cols-[repeat(5,1fr)_3.125rem] mt-4 h-[3rem] rounded-[0.3125rem] bg-[#EEF6FF] pt-[0.4375rem]">
      <div className="flex justify-center text-[#687DB2] font-[Segoe UI] font-[400] text-[0.9375rem] leading-[1.25rem] rounded-[0.3125rem]">
        <div className="flex rounded-[0.3125rem]">
          <p className="pt-[0.375rem] pl-[0.8125rem]">{entry.name}</p>
        </div>
      </div>
      <p className="flex justify-center bg-[#EEF6FF] text-[#687DB2] font-[Segoe UI] font-[400] text-[0.9375rem] leading-[1.25rem] pt-[0.375rem]">
        {entry.id}
      </p>
      <p className="flex justify-center bg-[#EEF6FF] text-[#687DB2] font-[Segoe UI] font-[400] text-[0.9375rem] leading-[1.25rem] pt-[0.375rem]">
        {entry.email}
      </p>
      <p className="flex justify-center bg-[#EEF6FF] text-[#687DB2] font-[Segoe UI] font-[400] text-[0.9375rem] leading-[1.25rem] pt-[0.375rem]">
        {entry.rollnum}
      </p>
      <button
        onClick={() => setOpenModal(true)}
        className="pt-[0.4375rem] font-[700] underline flex justify-center bg-[#EEF6FF] text-[#687DB2] font-[Segoe UI] font-[400] text-[0.9375rem] leading-[1.25rem]"
      >
        Click to View
      </button>
      <button onClick={() => seteditresultpopup(true)} className="mb-[0.5rem]">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.2758 15.683H3.72134C3.46392 15.683 3.24609 15.9008 3.24609 16.1582C3.24609 16.4156 3.46392 16.6335 3.72134 16.6335H16.2758C16.5332 16.6335 16.751 16.4156 16.751 16.1582C16.751 15.9008 16.5332 15.683 16.2758 15.683ZM3.2659 11.5246L3.24609 13.7622C3.24609 13.881 3.2857 14.0196 3.38471 14.0988C3.48372 14.178 3.60253 14.2374 3.72134 14.2374L5.95897 14.2176C6.07778 14.2176 6.19659 14.1582 6.2956 14.079L13.9788 6.39585C14.157 6.21763 14.157 5.9008 13.9788 5.72258L11.7609 3.50476C11.5827 3.32654 11.2659 3.32654 11.0877 3.50476L9.54312 5.04931L3.40451 11.1879C3.3055 11.2869 3.2659 11.4057 3.2659 11.5246ZM12.9689 6.05921L12.0976 6.9305L10.553 5.38595L11.4243 4.51466L12.9689 6.05921ZM4.21639 11.7226L9.87976 6.05921L11.4243 7.60377L5.76095 13.2671H4.21639V11.7226Z"
            fill="#687DB2"
          />
        </svg>
      </button>
    </div>
  );
};
