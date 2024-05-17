import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../utils/useAuthClient";
import { useQuery } from "react-query";
import { getInstituteDetails } from "../../../Redux/Action/index";
import AdminDashboard from "../Admin/AdminDashboard";
import NoDataComponent from "./NoData";
const InstituteEditRequest = ({ onView, SetTab }) => {
  const { actor } = useAuth();
  const allInstitutes = useSelector((state) => state.allInstitutesReducer);
  console.log('All institutes are : ',allInstitutes);

  const [entries, setEntries] = useState([]);
  
     const fetchData = async () => {
          try {
            
            const principalIds = await actor.get_all_institute_edit_req();
            const detailsResults = await Promise.all(principalIds);
            console.log('detailsResults',detailsResults);
         
            const filteredEntries = allInstitutes.filter(entry => detailsResults.includes(entry[0]));
            setEntries(filteredEntries);
          } catch (error) {
            console.error("Error fetching principal IDs:", error);
          }
      };
      const {
        data: result,
        isLoading: isLoadingEntries,
        error: errorEntries,
      } = useQuery("dataEntries", fetchData);
      

  console.log("entries " , entries )

   if (!entries || entries.length === 0) {
    return (
      <NoDataComponent
        message={"No Edit Requests yet!"}
        imageSrc="NoData.png"
      ></NoDataComponent>
    );
  }
  return (
    <div>
      {isLoadingEntries && <Loader></Loader>}
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
       
      </div>
      <div style={{ position: "absolute", bottom: "20px", right: "30px" }}>
        Page 1 of 100
      </div>
    </div>
  );
};
export default InstituteEditRequest;

const Card = ({ entry, onView, SetTab }) => {
  const dispatch = useDispatch();
  const handleClick = ({entry}) => {
    console.log('entry:',entry);
       
        dispatch(getInstituteDetails(entry));
        onView();
   
  };
  const instituteName = entry?.[1].institute_name?.[0] ?? "N/A";
  const instituteId = entry?.[1].institute_id?.[0].substr(0, 6) ?? "N/A";
  const instituteEmail = entry?.[1].email?.[0] ?? "N/A";
  const verificationStatus = "pending";
  return (
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
      >
        {verificationStatus}
      </p>
      <div className="flex items-center">
        <button
          onClick={() => handleClick({ entry })}
          className="pt-[7px] pr-[15px] font-[700] underline flex justify-center text-[#687DB2] font-[Segoe UI] font-[400] text-[15px] leading-[20px]"
        >
          Click to View/Verify
        </button>
      </div>
    </div>
  );
};
