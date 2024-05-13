import React from "react";
import { useAuth } from "../../utils/useAuthClient";
import { Link, useNavigate } from "react-router-dom"; // Simplified import for clarity
import { handleFileDecrypt, importAesKeyFromBase64, decrypted_Img, aes_Decrypt } from "../../utils/helper";
import Modal from "../../components/Modal";
import { useDispatch, useSelector } from "react-redux";
const StudentVerificationRequest = () => {
  const { actor, authClient } = useAuth();
  const principal_id = authClient.getIdentity().getPrincipal().toString();
  const [publicKey, setPublicKey] = React.useState('');
  let data = useSelector(
    (state) => state.instituteDetailsReducer
  );

  console.log("entries from redux", data)

  React.useEffect(() => {
    const getPublicKey = async () => {
      const result = await actor.get_institute_details([principal_id]);

      console.log("result", result);
      console.log('public key', result[0].public_key[0])
      setPublicKey(result[0].public_key[0]);
    }

    getPublicKey();

  }, []);

  let entries = useSelector(
    (state) => state.allStudentsReducer
  );
  console.log("entries is : ", entries);



  const getImage = async ( kyc) => {
    try {
      let i = 1;
      let data;
      const newChunks = [];

      const chunk_id_val = kyc[0].chunk_id;
      const no_Of_chunks = kyc[0].num_chunks;

      console.log("num_chunks is ", no_Of_chunks)


      console.log("chunk_id_val is ", chunk_id_val)
      for (let i = 0; i < Number(kyc[0].num_chunks); i++) {
        console.log("Fetching chunks at i = ", i);
        console.log("kyc[0].image_id is  in for  ", kyc[0].image_id)

        const imageId = parseInt(kyc[0].image_id, 10);
        let chunkId = parseInt(chunk_id_val, 10);
        console.log("chunkId is in for", chunkId)
        console.log("kyc[0].image_id is  in for  ", imageId)

        // const { chunk_id, chunk_data } = await actor.get_image(imageId , chunkId);
        const res = await actor.get_image(imageId, chunkId);
        console.log("res is ", res)
        console.log("res[0] is ", res[0])
        const chunk_data = res[0]["chunk_value"];
        const next_chunk_id = res[0]["next_chunkid"]

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

      const privateKey = await actor.get_private_key();
      // console.log(entry?.[0].public_key?.[0])
      console.log("privateKey is : ", privateKey)
      // getImage(entry[0].kyc);

      if (entry && entry[0]) {
        console.log("kyc", entry[0].kyc);
        console.log("public key", entry[0].public_key[0]);
        console.log('public:', publicKey);
        // const decryptedAes = await aes_Decrypt(entry[0].kyc, privateKey);
        // console.log(" decryptedAes : ", decryptedAes);
        const imgEncrypted = await getImage( entry[0].kyc); // failed to fetch chunks 
        console.log("imgEncrypted in return is ", imgEncrypted)
        const url = await decrypted_Img(entry[0].kyc, imgEncrypted, privateKey); // error iv not defined 
        const reader = new FileReader();
        reader.onload = () => {
          const imageDataUrl = reader.result;
          setImage(imageDataUrl);
          setOpenModal(true);
          // document.getElementById('imagePreview').src = imageDataUrl;
      };
      reader.readAsDataURL(url);
       
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

        <Modal open={openModal} image={image} onClose={() => setOpenModal(false)} />
        <div className="grid grid-cols-5 mt-4 h-[48px] rounded-[5px] bg-[#EEF6FF] pt-[7px]">
          <div className="flex justify-center text-[#687DB2] font-[Segoe UI] font-[400] text-[15px] leading-[20px] rounded-[5px]">
            <div className="flex rounded-[5px]">
              <img className="w-[33px] h-[33px]" src="/student.svg" alt="" />
              <p className="pt-[6px] pl-[13px]">{studentName}</p>{" "}
              {/* Displaying the first name */}
            </div>
          </div>
          <p className="flex justify-center bg-[#EEF6FF] text-[#687DB2] font-[Segoe UI] font-[400] text-[15px] leading-[20px] pt-[6px]">
            {studentId} {/* Displaying the student ID */}
          </p>
          <p className="flex justify-center bg-[#EEF6FF] text-[#687DB2] font-[Segoe UI] font-[400] text-[15px] leading-[20px] pt-[6px]">
            {rollNo} {/* Displaying the student ID */}
          </p>
          <p
            className={`flex justify-center bg-[#EEF6FF] font-[Segoe UI] font-[400] text-[15px] leading-[20px] pt-[6px] ${verificationStatus === "approved"
              ? "text-[#13BC24]"
              : verificationStatus === "pending"
                ? "text-[#C3A846]"
                : verificationStatus === "rejected"
                  ? "text-[#B26868]"
                  : "text-[#687DB2]"
              }`}
          >
            {verificationStatus} {/* Displaying the student ID */}
          </p>
          {/* Continue with other fields as needed, similar to firstName and studentId */}
          <div className="flex items-center justify-between px-4">
            <button className="font-[700] underline flex justify-center bg-[#EEF6FF] text-[#687DB2] font-[Segoe UI] font-[400] text-[15px] leading-[20px]"
              onClick={handleClick}>
              {'Check'}
            </button>

            <button className="font-[700] underline flex justify-center bg-[#EEF6FF] text-[#687DB2] font-[Segoe UI] font-[400] text-[15px] leading-[20px]"
              onClick={handleKyc}>
              {'view kyc'}
            </button>
          </div>
        </div>
      </div>
    );
  };

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




export default StudentVerificationRequest;
