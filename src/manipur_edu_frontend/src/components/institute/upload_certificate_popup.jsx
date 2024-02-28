import React, { useState } from "react";
import { useAuth } from "../../utils/useAuthClient";
import { handleFileEncrypt } from "../../utils/helper";

const UploadStudentCertificate = ({ open, onClose, publicKey, principalId }) => {
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

            const certificateData = {
                certificate_id: crypto.randomUUID(),
                certificate_link: encryptedFile,
                issued_by: 'institute',
                issue_date: Date.now().toString(),
                certificate_info: "100% attendance",


            }
            const uploadFile = await actor.create_user_certificate(principalId, certificateData)
            console.log(uploadFile);

        }


        onClose();
    };

    return (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#EEF6FF] h-[32.5rem] mt-[50px] w-[70%] rounded-xl">
            {/* Rest of the component */}
            <div className="flex justify-center pt-[2.5rem]">

                <input type="file" onChange={handleFileChange} accept="image/*" />
            </div>
            <div className="flex justify-center pt-[2.5rem]">
                <button
                    onClick={handleSave}
                    className="w-[7.3125rem] bg-[#0041E9] rounded-[0.625rem] h-[3.125rem] mr-[1.5rem] text-[white] font-[Segoe UI] font-[400] text-[0.9375rem] leading-[1.25rem]"
                >
                    Save
                </button>
                <button
                    onClick={onClose}
                    className="w-[7.3125rem] rounded-[0.625rem] h-[3.125rem] border border-[#00227A] text-[#00227A] font-[Segoe UI] font-[400] text-[0.9375rem] leading-[1.25rem]"
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default UploadStudentCertificate;