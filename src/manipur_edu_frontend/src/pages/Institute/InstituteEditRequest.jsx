// import React from "react";

// const InstituteEditRequest = ({ onView }) => {
//   const entries = [
//     {
//       name: "Institute 1",
//       id: "INS-12345",
//       email: "email@email.com",
//       status: "Approved",
//       details: "Click to View/Verify",
//     },
//     {
//       name: "Institute 2",
//       id: "INS-12345",
//       email: "email@email.com",
//       status: "Approved",
//       details: "Click to View/Verify",
//     },

//     {
//       name: "Institute 4",
//       id: "INS-12345",
//       email: "email@email.com",
//       status: "Pending",
//       details: "Click to View/Verify",
//     },
//     {
//       name: "Institute 1",
//       id: "INS-12345",
//       email: "email@email.com",
//       status: "Rejected",
//       details: "Click to View/Verify",
//     },
//   ];
//   return (
//     <div>
//       <div className="border rounded-[10px] border-[#D9EBFF]">
//         <div className="  grid grid-cols-5 py-[20px]   font-[600]  font-[Segoe UI] text-[15px] text-[#00227A] leading-[20px]">
//           <div className="flex justify-center">INSTITUTE NAME</div>
//           <div className="flex justify-center">INSTITUTE ID</div>
//           <div className="flex justify-center">EMAIL</div>
//           <div className="flex justify-center">STATUS</div>
//           <div className="flex justify-center ">INSTITUTE DETAILS</div>
//         </div>

//         {entries.map((entry, index) => (
//           <Card key={index} entry={entry} onView={onView} />
//         ))}
//       </div>
//       <div className="flex flex-row-reverse pt-[10px] ">Page 1 of 100</div>
//     </div>
//   );
// };
// export default InstituteEditRequest;

// const Card = ({ entry, onView }) => {
//   return (
//     <div className=" grid grid-cols-5 py-[20px] border-t border-[#D9EBFF]">
//       <div className=" flex justify-center  text-[#687DB2] font-[Segoe UI] font-[400] text-[15px] leading-[20px] rounded-[5px]">
//         <div className="flex rounded-[5px]">
//           <img className="w-[33px] h-[33px] " src='/student.svg' alt="" />
//           <p className="pt-[6px] pl-[13px]">{entry.name}</p>
//         </div>
//       </div>
//       <p className="flex justify-center  text-[#687DB2] font-[Segoe UI] font-[400] text-[15px] leading-[20px] pt-[6px]">
//         {entry.id}
//       </p>
//       <p className="flex justify-center  text-[#687DB2] font-[Segoe UI] font-[400] text-[15px] leading-[20px] pt-[6px]">
//         {entry.email}
//       </p>
//       <p
//         className={`flex justify-center font-[Segoe UI] font-[400] text-[15px] leading-[20px] pt-[6px]`}
//         style={{
//           color:
//             entry.status === "Approved"
//               ? "#13BC24"
//               : entry.status === "Pending"
//               ? "#C3A846"
//               : "#B26868",
//         }}
//       >
//         {entry.status}
//       </p>

//       <button
//         onClick={onView}
//         className="pt-[7px] font-[700] underline flex justify-center  text-[#687DB2] font-[Segoe UI] font-[400] text-[15px] leading-[20px] "
//       >
//         {entry.details}
//       </button>
//     </div>
//   );
// };

import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "../../../../../node_modules/react-router-dom/dist/index";
import AdminDashboard from "../Admin/AdminDashboard";

const InstituteEditRequest = ({ onView, SetTab }) => {
  let entries = useSelector((state) => state.allInstitutesReducer);


  console.log("entries size" , entries.length )
  return (
    <div>
      <div className="border rounded-[10px] border-[#D9EBFF]">
        <div className="  grid grid-cols-5 py-[20px]   font-[600]  font-[Segoe UI] text-[15px] text-[#00227A] leading-[20px]">
          <div className="flex justify-center">INSTITUTE NAME</div>
          <div className="flex justify-center">INSTITUTE ID</div>
          <div className="flex justify-center">EMAIL</div>
          <div className="flex justify-center">STATUS</div>
          <div className="flex justify-center ">INSTITUTE DETAILS</div>
        </div>
        {Array.isArray(entries) &&
          entries.map((entry, index) => (
            <Card SetTab={SetTab} key={index} entry={entry} onView={onView} />
          ))}
        {/* {entries.map((entry, index) => (
          <Card key={index} entry={entry} onView={onView} />
        ))} */}
      </div>
      <div style={{ position: "absolute", bottom: "20px", right: "30px" }}>
        Page 1 of 100
      </div>
    </div>
  );
};
export default InstituteEditRequest;

const Card = ({ entry, onView, SetTab }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    // navigate("/instituteEditRequest", { state: { entry } });
    SetTab("instituteEditRequest");
  };
  const instituteName = entry?.[1].institute_name?.[0] ?? "N/A";
  const instituteId = entry?.[1].institute_id?.[0].substr(0, 6) ?? "N/A";
  const instituteEmail = entry?.[1].email?.[0] ?? "N/A";
  const verificationStatus = entry?.[1].status?.[0] ?? "N/A";
  return (
    // <div className=" grid grid-cols-5 py-[20px] border-t border-[#D9EBFF]">
    //   <div className=" flex justify-center  text-[#687DB2] font-[Segoe UI] font-[400] text-[15px] leading-[20px] rounded-[5px]">
    //     <div className="flex rounded-[5px]">
    //       <img className="w-[33px] h-[33px] " src="/student.svg" alt="" />
    //       <p className="pt-[6px] pl-[13px]">{instituteName}</p>
    //     </div>
    //   </div>
    //   <p className="flex justify-center  text-[#687DB2] font-[Segoe UI] font-[400] text-[15px] leading-[20px] pt-[6px]">
    //     {instituteId}
    //   </p>
    //   <p className="flex justify-center  text-[#687DB2] font-[Segoe UI] font-[400] text-[15px] leading-[20px] pt-[6px]">
    //     {instituteEmail}
    //   </p>
    //   <p
    //     className={`flex justify-center font-[Segoe UI] font-[400] text-[15px] leading-[20px] pt-[6px] ${
    //       verificationStatus === "approved"
    //         ? "text-[#13BC24]"
    //         : verificationStatus === "pending"
    //         ? "text-[#C3A846]"
    //         : verificationStatus === "rejected"
    //         ? "text-[#B26868]"
    //         : "text-[#687DB2]"
    //     }`}
    //   >
    //     {verificationStatus}
    //   </p>

    //   <button
    //     onClick={handleClick}
    //     className="pt-[7px] font-[700] underline flex justify-center  text-[#687DB2] font-[Segoe UI] font-[400] text-[15px] leading-[20px] "
    //   >
    //     {" "}
    //     Click to View/Verify
    //   </button>
    // </div>
    <div className="grid grid-cols-5 py-[20px] border-t border-[#D9EBFF]">
      <div className="flex items-center justify-center text-[#687DB2] font-[Segoe UI] font-[400] text-[15px] leading-[20px] rounded-[5px]">
        <div className="flex items-center rounded-[5px] ml-[35px]">
          <div className="w-[37px] h-[37px] flex-shrink-0">
            <img className="w-full h-full" src="/student.svg" alt="" />
          </div>
          <div className="w-[150px] flex-shrink-0">
            <p className="pt-[6px] pl-[13px] overflow-hidden">
              {instituteName}
            </p>
          </div>
        </div>
      </div>
      <p className="flex justify-center items-center text-[#687DB2] font-[Segoe UI] font-[400] text-[15px] leading-[20px] pt-[6px]">
        {instituteId}
      </p>
      <p className="flex justify-center items-center text-[#687DB2] font-[Segoe UI] font-[400] text-[15px] leading-[20px] pt-[6px]">
        {instituteEmail}
      </p>
      <p
        className={`flex justify-center font-[Segoe UI] font-[400] text-[15px] leading-[20px] pt-[6px] ${
          verificationStatus === "approved"
            ? "text-[#13BC24]"
            : verificationStatus === "pending"
            ? "text-[#C3A846]"
            : verificationStatus === "rejected"
            ? "text-[#B26868]"
            : "text-[#687DB2]"
        }`}
        // className={`flex justify-center font-[Segoe UI] font-[400] text-[15px] leading-[20px] pt-[6px] ${
        //   verificationStatus === "approved"
        //     ? "text-[#13BC24]"
        //     : verificationStatus === "pending"
        //     ? "text-[#C3A846]"
        //     : verificationStatus === "rejected"
        //     ? "text-[#B26868]"
        //     : "text-[#687DB2]"
        // }`}
      >
        {/* {verificationStatus} */}
        {verificationStatus}
      </p>
      <div className="flex items-center">
        <button
          onClick={handleClick}
          className="pt-[7px] pr-[15px] font-[700] underline flex justify-center text-[#687DB2] font-[Segoe UI] font-[400] text-[15px] leading-[20px]"
        >
          Click to View/Verify
        </button>
      </div>
    </div>
  );
};
