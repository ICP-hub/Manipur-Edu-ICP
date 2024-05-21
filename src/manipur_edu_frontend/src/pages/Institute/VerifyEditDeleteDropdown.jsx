import React, { useState } from "react";
import StudentDetailsEdit from "../Student/StudentDetailsEdit";
import { Link, useNavigate } from "react-router-dom";
import ViewProfileDetails from "../Student/ViewProfileDetails";
import RejectModal from "../../components/RejectModal";
const VerifyEditDeleteDropdown = ({ open, onClose, entries }) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const navigate = useNavigate();
  console.log("hii", entries);
  const handleViewDetails = () => {
    setIsViewOpen(true);
    navigate("/ViewStudentProfileDetails", { state: { entries } });
  };
  const handleEditClick = () => {
    setIsEditOpen(true);
    navigate("/EditDetails", { state: { entries } });
  };
  const handleDeleteClick = () => {
    setIsDeleteOpen(true);
    // navigate("/DeleteDetails", { state: { entries } });
  };
  if (!open) return null;
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="relative flex flex-col bg-[#D9EBFF] w-[150px] rounded-[10px]  left-[475%]  "
    >
      <div className="flex justify-center border-b border-[white]">
        <button
          className="text-[#687DB2] py-[10px]"
          onClick={handleViewDetails}
        >
          View Details
        </button>
      </div>
      <div className="flex justify-center border-b border-[white]">
        <button className="text-[#687DB2] py-[10px]" onClick={handleEditClick}>
          Edit
        </button>
      </div>
      <div className="flex justify-center border-b border-[white]">
        <button
          className="text-[#687DB2] py-[10px]"
          onClick={handleDeleteClick}
        >
          Delete
        </button>
      </div>
      {isEditOpen && <StudentDetailsEdit />}
      {isViewOpen && <ViewProfileDetails />}
      {isDeleteOpen && (
        <RejectModal
          open={isDeleteOpen}
          onClose={() => setIsDeleteOpen(false)}
          handleReject={() => setIsDeleteOpen(false)}
        ></RejectModal>
      )}
    </div>
  );
};

export default VerifyEditDeleteDropdown;
