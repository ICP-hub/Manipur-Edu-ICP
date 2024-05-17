import React, { useState } from "react";
import { useAuth } from "../../utils/useAuthClient";
import { handleFileEncrypt } from "../../utils/helper";
import { useSelector } from "react-redux";

const { v4: uuidv4 } = require('uuid'); // Import UUIDv4
const crc32 = require('crc-32');

const EditResult = ({ open, onClose, publicKey, principalId }) => {
  const { actor } = useAuth();
  const [file, setFile] = useState(null);

  if (!open) return null;

  console.log("PUblic key is " , publicKey)

  function uuidToNat32(uuid) {
    return crc32.str(uuid) >>> 0; // Use unsigned right shift to ensure a positive number
  }


  const handleFileChange = async (event) => {
    if (event.target.files) {
      setFile(event.target.files);
    }
    console.log("in HANDLE FILE CHANGE ")


  }
  const handleSave = async (event) => {
    event.preventDefault();

    console.log('file format', file);

    console.log("file is ", file)
    console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&")
    console.log("public key is ", publicKey)
    console.log("type of pub key ", typeof (publicKey))
    // const encryptedFile = await handleResultEncrypt(file, publicKey);

    const { iv, encryptedFile, aesKey } = await handleFileEncrypt(file, publicKey);

   
    if (encryptedFile) {

      console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&")

      console.log("iv is ", iv)
      console.log("encryptedFile is ", encryptedFile)
      console.log("aesKey is ", aesKey)
  
  
  
      // >>>>>>>>>>>- CODE STARTS  TO UPLOAD DATA IN CHUNKS <<<<<<<<<
  
      const imgUuid = uuidv4();
      let imgId = uuidToNat32(imgUuid);
  
      let chunks = [];
      const chunkSize = 1 * 1024 * 1024;
      let nextChunk = uuidv4();
      let nat32nextChunk = uuidToNat32(nextChunk);
  
      let chunkId = uuidv4();
      let nat32ChunkId = uuidToNat32(chunkId);
  
  
      for (let i = 0; i < encryptedFile.byteLength; i += chunkSize) {
        let chunk = encryptedFile.slice(i, i + chunkSize);
        chunk = Array.from(new Uint8Array(chunk));
  
        let chunkVec = {
          chunk_value: chunk,
          next_chunkid: nat32nextChunk,
        };
  
        await actor.upload_image(imgId, nat32ChunkId, chunkVec);
        chunks.push({ chunk_id: nat32ChunkId.toString(), image_id: imgId.toString() }); // Ensure proper string conversion
  
        if (i + chunkSize < encryptedFile.byteLength) {
          chunkId = nextChunk; // current nextChunk becomes new chunkId
          nat32ChunkId = nat32nextChunk; // update nat32ChunkId
          nextChunk = uuidv4(); // generate new nextChunk
          nat32nextChunk = uuidToNat32(nextChunk); // convert new nextChunk
        } else {
          nextChunk = null;
          nat32nextChunk = null;
        }
      }
      console.log("All chunks uploaded");
  
      // >>>>>>>>>>>- CODE ENDS TO UPLOAD DATA IN CHUNKS <<<<<<<<<
  
  
  
  
      // console.log(encryptedFile);
      console.log("imgId is ", imgId)
      console.log("imgId is type ", typeof (imgId))
  
      console.log("chunks.length is " , chunks.length)
      console.log("encryptedFile, " , encryptedFile)


      console.log("encryptedFile", encryptedFile)
      // storing img_id as rsult id 
      const resultData = {
        iv: iv,
        aes_key: aesKey,
        chunk_id: chunks[0].chunk_id,
        result_id: chunks[0].image_id,
        num_chunks: chunks.length,
        result: encryptedFile,
        issued_by: 'institute',
        issued_date: Date.now().toString(),
        semester: "1",
      }

      console.log("resultData is " , resultData)
      const uploadFile = await actor.create_user_result(principalId, resultData)
      console.log(" Data uploadFile is  ", uploadFile);
    }

    onClose();

  };
  return (
     <div className="shadow-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#EEF6FF] h-[32.5rem] mt-[50px] w-[70%] rounded-xl">
            <div className="shadow-lg flex flex-col items-center justify-center h-full">
                <input 
                    type="file" 
                    onChange={handleFileChange} 
          accept="image/*" 
          name="Upload File"
          className="mt-8 mb-4 p-2 border border-blue-500 rounded-lg"
        />
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-[#0041E9] text-white rounded-lg text-sm font-semibold"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 border border-[#00227A] text-[#00227A] rounded-lg text-sm font-semibold"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditResult;
