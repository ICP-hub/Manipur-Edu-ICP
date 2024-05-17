import React from "react";
import NoDataComponent from "./NoData";
const StudentRegisteredByInstitute = () => {
  const entries = [
    {
      first_name: "Student",
      last_name: "1",
      student_id: "STU-12345",
      personal_email: "email@email.com",
      phone_no: "1234567890",
      roll_no: "RN-123",
    },
    {
      first_name: "Student",
      last_name: "2",
      student_id: "STU-67890",
      personal_email: "email2@email.com",
      phone_no: "1234567891",
      roll_no: "RN-456",
    },
    {
      first_name: "Student",
      last_name: "3",
      student_id: "STU-13579",
      personal_email: "email3@email.com",
      phone_no: "1234567892",
      roll_no: "RN-789",
    },
    {
      first_name: "Student",
      last_name: "4",
      student_id: "STU-24680",
      personal_email: "email4@email.com",
      phone_no: "1234567893",
      roll_no: "RN-012",
    },
  ];
  if (!entries || entries.length === 0) {
    return (
      <NoDataComponent
        message="No Students registered yet!"
        imageSrc="NoData.png"
      />
    );
  }
  return (
    <div className="w-full self-center">
      <div className="grid grid-cols-5 py-4 mt-7 rounded-md bg-blue-100 font-semibold text-blue-800 text-lg leading-6">
        <div className="flex justify-center">NAME</div>
        <div className="flex justify-center">STUDENT ID</div>
        <div className="flex justify-center">EMAIL</div>
        <div className="flex justify-center">PHONE NUMBER</div>
        <div className="flex justify-center">ROLL NUMBER</div>
      </div>
      {entries.map((entry, index) => (
        <Card key={index} entry={entry} />
      ))}

      <div className="flex justify-between pt-12 pb-24">
        <button className="text-white rounded-lg bg-blue-500 px-8 py-4">
          Register New Student
        </button>
        <p>Page 1 of 1</p>
      </div>
    </div>
  );
};

const Card = ({ entry }) => {
  return (
    <div className="grid grid-cols-5 gap-4 mt-4 h-12 rounded-lg bg-blue-200 p-2">
      <div className="flex items-center justify-center">
        {entry.first_name} {entry.last_name}
      </div>
      <div className="flex items-center justify-center">
        {entry.student_id.substr(0, 6)}
      </div>
      <div className="flex items-center justify-center">
        {entry.personal_email}
      </div>
      <div className="flex items-center justify-center">{entry.phone_no}</div>
      <div className="flex items-center justify-center">{entry.roll_no}</div>
    </div>
  );
};

export default StudentRegisteredByInstitute;
