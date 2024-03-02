import React from "react";


function EditScholarshipDetails({ onBack }) {
    return (
        <div className="px-[63px] py-[25px] flex flex-col gap-[25px]">
            <div className="flex justify-between ">
                <div className="font-[600] font-[Segoe UI] text-4xl text-[#2D6BE4]">
                    Edit Scholarship Details
                </div>
                <div className="flex gap-[44px]">
                    <div className="flex gap-[23px]">
                        <button>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 27 27"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M13.2379 23.3503C18.8229 23.3503 23.3505 18.8227 23.3505 13.2376C23.3505 7.65258 18.8229 3.125 13.2379 3.125C7.65282 3.125 3.12524 7.65258 3.12524 13.2376C3.12524 18.8227 7.65282 23.3503 13.2379 23.3503Z"
                                    stroke="#00227A"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M20.2703 20.7949L24.2348 24.7493"
                                    stroke="#00227A"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </button>
                        <button>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 27 27"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M20.25 9C20.25 7.20979 19.5388 5.4929 18.273 4.22703C17.0071 2.96116 15.2902 2.25 13.5 2.25C11.7098 2.25 9.9929 2.96116 8.72703 4.22703C7.46116 5.4929 6.75 7.20979 6.75 9C6.75 16.875 3.375 19.125 3.375 19.125H23.625C23.625 19.125 20.25 16.875 20.25 9Z"
                                    stroke="#00227A"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M15.4462 23.625C15.2484 23.966 14.9645 24.249 14.623 24.4457C14.2814 24.6425 13.8941 24.746 13.5 24.746C13.1058 24.746 12.7185 24.6425 12.377 24.4457C12.0354 24.249 11.7515 23.966 11.5537 23.625"
                                    stroke="#00227A"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="flex justify-center">
                        <div className="pr-[12px]">
                            <p className="font-[600] font-[Segoe UI] text-[18px] text-[#00227A] leading-[27px] flex flex-row-reverse">
                                Name
                            </p>
                            <p className="font-[400] font-[Segoe UI] text-[18px] text-[#8CA3C3] leading-[27px]">
                                123456789
                            </p>
                        </div>
                        <img className="w-[67px] h-[55px] pl-[12px]" src="student.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-[17px]">
                <div className="flex gap-[30px]">
                    <div className="w-[50%]">
                        <label
                            className="text-[17px] text-[Noto Sans] font-[400] text-[#00227A] ml-[20px] "
                            htmlFor=""
                        >
                            Title
                        </label>{" "}
                        <br />
                        <input
                            className="w-full h-[56px] border border-[#CCD9FA] rounded-[10px] focus:outline-none px-[10px] mt-[5px]"
                            type="text"
                        ></input>
                    </div>
                    <div className="w-[50%]">
                        <label
                            className="text-[17px] text-[Noto Sans] font-[400] text-[#00227A] ml-[20px] "
                            htmlFor=""
                        >
                            SubTitle
                        </label>{" "}
                        <br />
                        <input
                            className="w-full h-[56px] border border-[#CCD9FA] rounded-[10px] focus:outline-none px-[10px] mt-[5px]"
                            type="text"
                        ></input>
                    </div>
                </div>
                <div className="flex gap-[30px]">
                    <div className="w-[50%]">
                        <label
                            className="text-[17px] text-[Noto Sans] font-[400] text-[#00227A] ml-[20px] "
                            htmlFor=""
                        >
                            Date
                        </label>{" "}
                        <br />
                        <input
                            className="w-full h-[56px] border border-[#CCD9FA] rounded-[10px] focus:outline-none px-[10px] mt-[5px]"
                            type="date"
                        ></input>
                    </div>
                    <div className="w-[50%]">
                        <label
                            className="text-[17px] text-[Noto Sans] font-[400] text-[#00227A] ml-[20px] "
                            htmlFor=""
                        >
                            Eligibility
                        </label>{" "}
                        <br />
                        <input
                            className="w-full h-[56px] border border-[#CCD9FA] rounded-[10px] focus:outline-none px-[10px] mt-[5px]"
                            type="text"
                        ></input>
                    </div>
                </div>
                <div className="flex gap-[30px]">
                    <div className="w-[50%]">
                        <label
                            className="text-[17px] text-[Noto Sans] font-[400] text-[#00227A] ml-[20px] "
                            htmlFor=""
                        >
                            Duration
                        </label>{" "}
                        <br />
                        <input
                            className="w-full h-[56px] border border-[#CCD9FA] rounded-[10px] focus:outline-none px-[10px] mt-[5px]"
                            type="text"
                        ></input>
                    </div>
                    <div className="w-[50%]">
                        <label
                            className="text-[17px] text-[Noto Sans] font-[400] text-[#00227A] ml-[20px] "
                            htmlFor=""
                        >
                            Scholarship Worth
                        </label>{" "}
                        <br />
                        <input
                            className="w-full h-[56px] border border-[#CCD9FA] rounded-[10px] focus:outline-none px-[10px] mt-[5px]"
                            type="text"
                        ></input>
                    </div>
                </div>
                <div className="flex gap-[30px]">
                    <div className="w-[50%]">
                        <label
                            className="text-[17px] text-[Noto Sans] font-[400] text-[#00227A] ml-[20px] "
                            htmlFor=""
                        >
                            Email id
                        </label>{" "}
                        <br />
                        <input
                            className="w-full h-[56px] border border-[#CCD9FA] rounded-[10px] focus:outline-none px-[10px] mt-[5px]"
                            type="text"
                        ></input>
                    </div>
                    <div className="w-[50%]">
                        <label
                            className="text-[17px] text-[Noto Sans] font-[400] text-[#00227A] ml-[20px] "
                            htmlFor=""
                        >
                            Phone no.
                        </label>{" "}
                        <br />
                        <input
                            className="w-full h-[56px] border border-[#CCD9FA] rounded-[10px] focus:outline-none px-[10px] mt-[5px]"
                            type="text"
                        ></input>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-[17px]">
                <div>
                    <label
                        className="text-[17px] text-[Noto Sans] font-[400] text-[#00227A] ml-[20px] "
                        htmlFor=""
                    >
                        Scholarship Details
                    </label>{" "}
                    <br />
                    <textarea
                        className="w-full  border border-[#CCD9FA] rounded-[10px] focus:outline-none px-[10px] mt-[5px] pt-[10px] h-[363px]"
                        type="text"
                    ></textarea>
                </div>
                <p className="text-[17px] text-[Noto Sans] font-[400] text-[#00227A] ml-[20px]">
                    Upload Header
                </p>
                <div>
                    <button className="border border-[#CCD9FA] rounded-[10px] px-[21px] py-[12px] text-[15px] text-[Segoe UI] font-[400] text-[#00227A]">
                        Upload Photo
                    </button>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <p className="text-[14px] text-[Source Sans Pro] font-[400] ">
                    By proceeding you acknowledge and agree to our{" "}
                    <span className="text-[#346DC2] font-[700]">Privacy Policy</span> and{" "}
                </p>{" "}
                <p className="pb-[32px] text-[14px] text-[Source Sans Pro] font-[400]">
                    {" "}
                    <span className="text-[#346DC2] font-[700]">Terms of Use</span> and
                    <span className="text-[#346DC2] font-[700]">
                        Scholarship Rules.
                    </span>{" "}
                </p>
                <div className="flex gap-[22px]">
                    <button
                        onClick={onBack}
                        className="text-[#00227A] font-[500] border border-[#00227A] rounded-[10px] px-[35px] py-[14px]"
                    >
                        Cancel
                    </button>
                    <button className="text-[white] font-[500] bg-[#0041E9] rounded-[10px] px-[40px] py-[14px]">
                        Post
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EditScholarshipDetails;
