import React, { useEffect } from "react";

const Modal = ({ open, onClose, image, message}) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Clean up function
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [open]);

  const handleDownload = () => {
    const anchor = document.createElement('a');
    anchor.href = image;
    anchor.download = 'image.jpg'; // Specify the filename for the downloaded image
    document.body.appendChild(anchor);

    // Trigger a click event on the anchor element
    anchor.click();

    // Clean up
    document.body.removeChild(anchor);
  };

  if (!open) return null;
  return (
    // <div className="bg-[#EEF6FF] absolute w-full z-50 -top-2 left-0 h-full">
    //   <div className="flex flex-col justify-center items-center pt-[50px] ">
    //     <div className="max-w-[50%] ">
    //       <img className="aspect-square h-full" src={image} />
    //     </div>
    //     <div className="flex justify-center w-[50%] pt-[40px]">
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg overflow-hidden max-w-3xl p-4">
        <img src={image} alt="Document" className="block w-full h-auto" />
        {message && <p className="text-red-500">{message}</p>}
        <div className="flex justify-center pt-4 pb-2">
          <button className="w-[190px] bg-[#0041E9] flex  rounded-[10px] py-[10px] pl-[25px] mr-[20px]" onClick={handleDownload}>
            <svg
              width="31"
              height="30"
              viewBox="0 0 31 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5 5C15.1685 5 14.8505 5.1317 14.6161 5.36612C14.3817 5.60054 14.25 5.91848 14.25 6.25V18.1613L8.9775 12.8825C8.85641 12.7613 8.71261 12.6651 8.55432 12.5994C8.39603 12.5338 8.22636 12.5 8.055 12.5C7.88364 12.5 7.71397 12.5338 7.55568 12.5994C7.39739 12.6651 7.25359 12.7613 7.1325 12.8825C6.88778 13.1276 6.75033 13.4599 6.75033 13.8062C6.75033 14.1526 6.88778 14.4849 7.1325 14.73L14.5125 22.1175C14.7837 22.3888 15.145 22.5163 15.5 22.4988C15.855 22.5163 16.2163 22.3888 16.4875 22.1175L23.8675 14.73C24.1122 14.4849 24.2497 14.1526 24.2497 13.8062C24.2497 13.4599 24.1122 13.1276 23.8675 12.8825C23.7464 12.7613 23.6026 12.6651 23.4443 12.5994C23.286 12.5338 23.1164 12.5 22.945 12.5C22.7736 12.5 22.604 12.5338 22.4457 12.5994C22.2874 12.6651 22.1436 12.7613 22.0225 12.8825L16.75 18.1613V6.25C16.75 5.91848 16.6183 5.60054 16.3839 5.36612C16.1495 5.1317 15.8315 5 15.5 5ZM6.75 26.25C6.75 25.9185 6.8817 25.6005 7.11612 25.3661C7.35054 25.1317 7.66848 25 8 25H23C23.3315 25 23.6495 25.1317 23.8839 25.3661C24.1183 25.6005 24.25 25.9185 24.25 26.25C24.25 26.5815 24.1183 26.8995 23.8839 27.1339C23.6495 27.3683 23.3315 27.5 23 27.5H8C7.66848 27.5 7.35054 27.3683 7.11612 27.1339C6.8817 26.8995 6.75 26.5815 6.75 26.25Z"
                fill="white"
              />
            </svg>
            <p className="text-[white] pl-[10px] pt-[4px] ">Download</p>
          </button>
          <button
            onClick={onClose}
            className="w-[130px] rounded-[10px] py-[10px] px-[25px] border border-[#00227A] text-[#00227A]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
