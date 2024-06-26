import React from "react";
import { useAuth } from "../../utils/useAuthClient";
import { Link, useNavigate } from "react-router-dom"; // Simplified import for clarity
import { handleFileDecrypt, importAesKeyFromBase64 } from "../../utils/helper";
import Modal from "../../components/Modal";
import { useDispatch, useSelector } from "react-redux";
import NoDataComponent from "./NoData";
const StudentVerificationRequest = () => {
  const { actor, authClient } = useAuth();
  const principal_id = authClient.getIdentity().getPrincipal().toString();
  const [publicKey, setPublicKey] = React.useState("");

  React.useEffect(() => {
    const getPublicKey = async () => {
      const result = await actor.get_institute_details([principal_id]);

      console.log("result", result);
      console.log("public key", result[0].public_key[0]);
      setPublicKey(result[0].public_key[0]);
    };

    getPublicKey();
  }, []);

  let entries = useSelector((state) => state.allStudentsReducer);
  console.log("entries is : ", entries);
  if (!entries || entries.length === 0) {
    return (
      <NoDataComponent
        message="No Student Verification Requests yet!"
        imageSrc="NoData.png"
      />
    );
  }

  return (
    <div className="w-full self-center">
      <div className="grid grid-cols-5 py-[15px] mt-[27px] rounded-md bg-[#D9EBFF] font-[600] text-[15px] text-[#00227A] leading-[20px]">
        <div className="flex justify-center">NAME</div>
        <div className="flex justify-center">STUDENT ID</div>
        <div className="flex justify-center">ROLL NUMBER</div>
        <div className="flex justify-center">STATUS</div>
        <div className="flex justify-center">STUDENT DETAILS</div>
      </div>
      {entries &&
        entries.map(({ studentId, details }, index) => (
          <Card
            key={index}
            entry={details}
            studentPrincipalId={studentId}
            publicKey={publicKey}
          /> // Directly pass each entry
        ))}
      <div className="flex flex-row-reverse pt-[50px] pb-[100px]">
        Page 1 of 100
      </div>
    </div>
  );
};

const Card = ({ studentPrincipalId, entry, publicKey }) => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = React.useState(false);
  console.log("entry here", entry);
  console.log("student principal id", studentPrincipalId);
  const handleClick = () => {
    navigate("/verify", { state: { studentPrincipalId, entry } });
  };
  const [image, setImage] = React.useState("");

  const handleKyc = async () => {
    console.log(entry?.[0].public_key?.[0]);

    if (entry && entry[0]) {
      console.log("kyc", entry[0].kyc);
      console.log("public key", entry[0].public_key[0]);
      console.log("public:", publicKey);
      const decryptedImage = await handleFileDecrypt(entry[0].kyc, publicKey);
      console.log(decryptedImage);
      console.log("decryptedImage", decryptedImage);
      const url = URL.createObjectURL(decryptedImage);
      setImage(url);
      setOpenModal(true);
    }
  };

  console.log("checking", entry);

  const studentName =
    entry?.[0].first_name?.[0] + " " + entry?.[0].last_name?.[0] ?? "N/A";
  const studentId = entry?.[0].student_id?.[0].substr(0, 6) ?? "N/A";
  const rollNo = entry?.[0].roll_no?.[0] ?? "N/A";
  const verificationStatus = entry?.[0].status?.[0] ?? "N/A"; // Example for accessing student_id

  return (
    <div>
      <Modal
        open={openModal}
        image={image}
        onClose={() => setOpenModal(false)}
      />
      <div className="w-full self-center">
        <div className="grid grid-cols-5 mt-4 h-[50px] rounded-[5px] bg-[#EEF6FF] pt-[7px]">
          <div className="flex justify-center text-[#687DB2] font-[Segoe UI] font-[400] text-[15px] leading-[20px] rounded-[5px]">
            <div className="flex rounded-[5px]">
              <img className="w-[33px] h-[33px]" src="/student.svg" alt="" />
              <p className="pt-[6px] pl-[13px]">{studentName}</p>{" "}
            </div>
          </div>
          <p className="flex justify-center bg-[#EEF6FF] text-[#687DB2] font-[Segoe UI] font-[400] text-[15px] leading-[20px] pt-[6px]">
            {studentId} {/* Displaying the student ID */}
          </p>
          <p className="flex justify-center bg-[#EEF6FF] text-[#687DB2] font-[Segoe UI] font-[400] text-[15px] leading-[20px] pt-[6px]">
            {rollNo} {/* Displaying the student ID */}
          </p>
          <p
            className={`flex justify-center bg-[#EEF6FF] font-[Segoe UI] font-[400] text-[15px] leading-[20px] pt-[6px] ${
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
          <button
            className="bg-blue-500 text-white font-segoe-ui text-11 rounded-lg ml-6"
            onClick={handleClick}
            style={{
              backgroundColor: "#355389",
              height: "40px",
              width: "110px",
            }}
          >
            {"View/Verify"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentVerificationRequest;
