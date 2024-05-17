import React, { useState } from 'react';
import { compressedImage } from '../../components/CompressedImage';
import imageCompression from '../../../../../node_modules/browser-image-compression/dist/browser-image-compression';
import { useAuth } from '../../utils/useAuthClient';

const UploadCertificate = () => {


    const { actor, authClient } = useAuth();
    const principal_id = authClient.getIdentity().getPrincipal().toString();



    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const compressedFile = await compressedImage(file);
            console.log(compressedFile);
            const blob = await new Response(compressedFile).blob(); // Convert File to Blob
            const byteArray = await blob.arrayBuffer(); // Convert Blob to ArrayBuffer
            const certificateLink = Array.from(new Uint8Array(byteArray)); // Convert ArrayBuffer to Uint8Array

            const upload_certificate = await actor.upload_certificate("2vxsx-fae", {

                //             iv : String , 
                // aes_key : String , 
                // chunk_id : String , 
                // num_chunks: usize, 
                // certificate_id: String,
                // certificate_info: String,
                certificate_info: 'hello bacchon',
                // certificate_link: certificateLink,
                issued_by: 'Rohan',
                issue_date: Date.now().toString(),

            });
            console.log(upload_certificate);
        }
    };

    return (
        <div>
            <input type="file" accept="image/*" onChange={handleFileChange} />

        </div>
    );
};

export default UploadCertificate;