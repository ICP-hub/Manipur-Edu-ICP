
import React, { useState } from "react";
import { useAuth } from "../../utils/useAuthClient";
import { handleFileEncrypt } from "../../utils/helper";

const EditResult = ({ open, onClose, publicKey, principalId }) => {
  const [file, setFile] = useState(null);
  const { actor } = useAuth();

  if (!open) return null;

  const handleFileChange = (event) => {

    if (event.target.files) {
      setFile(event.target.files);

    }
  }

  const handleSave = async (event) => {
    event.preventDefault();



    console.log('file format', file);

    const encryptedFile = await handleFileEncrypt(file, publicKey);
    console.log(encryptedFile);

    if (encryptedFile) {
      console.log("encryptedFile", encryptedFile)

      const resultData = {
        result_id: crypto.randomUUID(),
        result: encryptedFile,
        issued_by: 'institute',
        issued_date: Date.now().toString(),
        semester: "1",

      }
      const uploadFile = await actor.create_user_result(principalId, resultData)
      console.log(uploadFile);

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