import React, { useState } from "react";
import EditResult from "../../components/institute/editResultPop";
import UploadResult from "../../components/institute/upload_result_popup";
import Modal from "../../components/modal";
import { useQuery } from "react-query";
import { useAuth } from "../../utils/useAuthClient";
import UploadStudentCertificate from "../../components/institute/upload_certificate_popup";

//todo:- remove this and fix it. Make ui same as result type show students and add button to upload certificates
const CertificatesIssued = ({ institutePrincipalId }) => {
  const [popupState, setPopupState] = useState(false);
  const [publicKey, setPublicKey] = useState('');
  const [principalId, setPrincipalId] = useState('');
  const { actor } = useAuth();




  const getEntries = async () => {
    const studentIdsResponse = await actor.get_institute_students(); // This returns an array containing a single element that is an array of student IDs
    if (studentIdsResponse.length > 0 && studentIdsResponse[0].length > 0) {
      const studentIds = studentIdsResponse[0]; // Access the first element to get the actual student IDs array
      console.log(studentIds);

      // Fetch details for each student
      const detailsPromises = studentIds.map(studentId => actor.get_student_details(studentId));
      const detailsResults = await Promise.all(detailsPromises);

      console.log(detailsResults);

      // Combine student IDs and their details into an array of objects
      const combinedResult = detailsResults.map((details, index) => ({
        studentId: studentIds[index], // Now correctly matches each detail with its student ID
        details: details
      }));

      return combinedResult // Update the state with the combined data
    }
  }

  const {
    data: entries,
    isLoading: isLoadingEntries,
    error: errorEntries,
  } = useQuery("dataEntries", getEntries);
  if (!isLoadingEntries && !errorEntries) {
    console.log("entries", entries)

  }
  return (
    <div className="w-[85%] self-center  pt-[27px]">
      <div className="grid grid-cols-[repeat(5,1fr)_50px]  py-[15px] mt-[27px] rounded-md bg-[#D9EBFF] font-[600] font-[Segoe UI] text-[15px] text-[#00227A] leading-[20px]">
        <div className="flex justify-center col-span-1">NAME</div>
        <div className="flex justify-center col-span-1">STUDENT ID</div>
        <div className="flex justify-center col-span-1">EMAIL</div>
        <div className="flex justify-center col-span-1">ROLL NUMBER</div>
        <div className="flex justify-center col-span-1">RESULT</div>


      </div>
      {entries?.map(({ studentId, details }, index) => (
        <Card
          key={index}
          entry={details}
          studentPrincipalId={studentId}
          setPublicKey={setPublicKey}
          setPrincipalId={setPrincipalId}
          setPopupState={setPopupState}
        />
      ))}
      <div className="relative">

        <UploadStudentCertificate
          open={popupState}
          onClose={() => setPopupState(false)}
          publicKey={publicKey}
          principalId={principalId}
        />
      </div>

      <div className="  flex justify-between pt-[50px] pb-[100px]">

        <p>Page 1 of 100</p>
      </div>
    </div>
  );
};

export default CertificatesIssued;


const Card = ({ studentPrincipalId, entry, setPopupState, setPublicKey, setPrincipalId }) => {

  const studentName = entry?.[0].first_name?.[0] + " " + entry?.[0].last_name?.[0] ?? 'N/A';
  const studentId = entry?.[0].student_id?.[0].substr(0, 6) ?? 'N/A';
  const rollNo = entry?.[0].roll_no?.[0] ?? 'N/A';
  const verificationStatus = entry?.[0].status?.[0] ?? 'N/A';
  const email = entry?.[0].personal_email?.[0] ?? 'N/A';
  return (
    <div className="grid grid-cols-[repeat(5,1fr)_3.125rem] mt-4 h-[3rem] rounded-[0.3125rem] bg-[#EEF6FF] pt-[0.4375rem]">
      <div className="flex justify-center text-[#687DB2] font-[Segoe UI] font-[400] text-[0.9375rem] leading-[1.25rem] rounded-[0.3125rem]">
        <div className="flex rounded-[0.3125rem]">
          <img
            className="w-[2.0625rem] h-[2.0625rem]"
            src='/student.svg'
            alt=""
          />
          <p className="pt-[0.375rem] pl-[0.8125rem]">{studentName}</p>
        </div>
      </div>
      <p className="flex justify-center bg-[#EEF6FF] text-[#687DB2] font-[Segoe UI] font-[400] text-[0.9375rem] leading-[1.25rem] pt-[0.375rem]">
        {studentId}
      </p>
      <p className="flex justify-center bg-[#EEF6FF] text-[#687DB2] font-[Segoe UI] font-[400] text-[0.9375rem] leading-[1.25rem] pt-[0.375rem]">
        {email}
      </p>
      <p className="flex justify-center bg-[#EEF6FF] text-[#687DB2] font-[Segoe UI] font-[400] text-[0.9375rem] leading-[1.25rem] pt-[0.375rem]">
        {rollNo}
      </p>
      <button
        onClick={() => {
          setPopupState(true);
          setPrincipalId(studentPrincipalId);
          setPublicKey(entry?.[0].public_key?.[0]);
        }}

        className="pt-[0.4375rem] font-[700] underline flex justify-center bg-[#EEF6FF] text-[#687DB2] font-[Segoe UI] font-[400] text-[0.9375rem] leading-[1.25rem]"
      >
        Click to Upload Certificate
      </button>
      <button className="mb-[0.5rem]">
        <svg
          width="1.25rem"
          height="1.25rem"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.58203 6.25V16.6667C4.58203 16.9982 4.71373 17.3161 4.94815 17.5505C5.18257 17.785 5.50051 17.9167 5.83203 17.9167H14.9987C15.3302 17.9167 15.6482 17.785 15.8826 17.5505C16.117 17.3161 16.2487 16.9982 16.2487 16.6667V6.25H4.58203Z"
            stroke="#687DB2"
          />
          <path
            d="M7.08203 8.67533V15.492M10.4154 8.67533V15.492M13.7487 8.67533V15.492M7.4987 3.61116V2.70366C7.4987 2.13116 8.0212 1.66699 8.66536 1.66699H12.1654C12.8095 1.66699 13.332 2.13116 13.332 2.70366V3.61199"
            stroke="#687DB2"
            strokeLinecap="round"
          />
          <path
            d="M16.666 3.75H4.16602C3.47566 3.75 2.91602 4.30964 2.91602 5C2.91602 5.69036 3.47566 6.25 4.16602 6.25H16.666C17.3564 6.25 17.916 5.69036 17.916 5C17.916 4.30964 17.3564 3.75 16.666 3.75Z"
            stroke="#687DB2"
          />
        </svg>
      </button>
    </div>
  );
};



