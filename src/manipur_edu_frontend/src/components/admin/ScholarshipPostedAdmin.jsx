import React,{useState} from "react";

// import { useAuth } from "../../utils/useAuthClient";
// import { useQuery } from "react-query";
// import Loader from "../../loader/Loader";
import { useSelector } from "react-redux";
const ScholarshipPostedAdmin = ({ onView, onEdit, onPost }) => {
    // const entries = [
    //     {
    //         scholarship_name: "Scholarships for College Students",
    //         institute_name: "Manipur Edu",
    //         description:
    //             "Easy ₹ 50,000 monthly scholarship. No essay or account sign-ups, just a simple scholarship for those seeking help paying for college!",
    //         ed_level: "High school student",
    //         grad_type: "Under Graduate",
    //         gender: " Female-identifying",
    //         amount: "₹50,000",
    //         deadline: "May 31, 2024",
    //     },

    //     {
    //         scholarship_name: "Scholarships for College Students",
    //         institute_name: "Manipur Edu",
    //         description:
    //             "Easy ₹ 50,000 monthly scholarship. No essay or account sign-ups, just a simple scholarship for those seeking help paying for college!",
    //         ed_level: "High school student",
    //         grad_type: "Under Graduate",
    //         gender: " Female-identifying",
    //         amount: "₹50,000",
    //         deadline: "May 31, 2024",
    //     },
    // ];


    // const { actor, authClient } = useAuth();
    // const [entries,setEntries] = useState([]);
    // const getEntries = async () => {
    //     const allScholarships = await actor.get_all_scholarship();
    //     console.log("allScholarships", allScholarships);
    //     setEntries(allScholarships);
        
    // }
    // // getEntries();
    // const {
    //     data: result,
    //     isLoading: isLoadingEntries,
    //     error: errorEntries,
    //   } = useQuery("dataEntries", getEntries);
    //   if (!isLoadingEntries && !errorEntries) {
    //     console.log("entries", entries)
    //   }
    const entries = useSelector((state) => state.allScholarshipsReducer);
    return (
        <div>
            {/* {isLoadingEntries && <Loader></Loader>} */}
            <div className="flex flex-col gap-[35px] ">
            {entries && entries.map((entry, index) => ( // Add a check for entries before mapping
                    <Card key={index} entry={entry} index={index + 1} onView={onView} onEdit={onEdit} />
                ))}
                <div className="flex justify-between">
                    <div>
                        <button
                            onClick={onPost}
                            className="px-[34px] py-[15px] bg-[#0041E9] text-[white] rounded-[5px]"
                        >
                            Post new Scholarship
                        </button>
                    </div>
                    <p>Page 1 of 100</p>
                </div>
            </div>
        </div>
    );
};

export default ScholarshipPostedAdmin;
const Card = ({ index, entry, onView, onEdit }) => {
    return (
        <div className="relative flex  ">
            <div className="absolute left-[-30px] top-[27px] rounded-[34px] bg-[white] w-[53px] h-[53px] ">
                <div className="absolute top-[2.75px] rounded-[34px] bg-[#D9EBFF] w-[48px] h-[48px] flex justify-center items-center text-[#5D57FB] font-[600] text-[18px] ">
                    {index}
                </div>
            </div>
            <div className="bg-[#F6FBFF] rounded-[4px] flex p-[30px] w-full">
                <div className="flex flex-col w-[75%]">
                    <div className="flex">
                        <div>
                            <img className="w-[250px] h-[124px]" src="scholarship.jpg" alt="" />
                        </div>
                        <div className=" pl-[22px] ">
                            <p className="text-[Inter] text-[19px] font-[600] pb-[22px]">
                                {entry?.[1].name ?? 'N/A'}
                            </p>
                            <div className="flex items-center pb-[22px] gap-[10px]">
                                <p className="text-[Inter] text-[14px] font-[400] text-[#76788C] leading-[14px]">
                                    Offered By
                                </p>
                                <p className="text-[Inter] text-[14px] font-[400] leading-[14px]">
                                    {" "}
                                    {/* {entry.institute} */}
                                    {entry?.[1].institute ?? 'N/A'}
                                    {" "}
                                </p>
                                <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clip-path="url(#clip0_1055_669)">
                                        <path
                                            d="M11.7778 6.79329C11.578 6.30055 11.578 5.75455 11.7778 5.27514L11.8444 5.11533C12.2705 4.10323 11.7778 2.93133 10.7657 2.50518L10.6192 2.4386C10.1265 2.23884 9.74022 1.85264 9.54046 1.35991L9.48719 1.22674C9.04773 0.21464 7.88914 -0.264776 6.86372 0.148054L6.73055 0.201322C6.23782 0.401079 5.69182 0.401079 5.19909 0.201322L5.07923 0.148054C4.08045 -0.264776 2.90854 0.227957 2.4824 1.24006L2.42913 1.34659C2.22937 1.83933 1.84318 2.22552 1.35044 2.42528L1.23059 2.47855C0.231803 2.90469 -0.26093 4.0766 0.165217 5.0887L0.218486 5.20855C0.418242 5.70128 0.418242 6.24729 0.218486 6.7267L0.165217 6.87319C-0.26093 7.88529 0.218486 9.05719 1.24391 9.47002L1.37708 9.52329C1.86981 9.72305 2.25601 10.1092 2.45576 10.602L2.52235 10.7485C2.93518 11.7739 4.10708 12.2533 5.11918 11.8405L5.26567 11.7739C5.7584 11.5741 6.30441 11.5741 6.79714 11.7739L6.91699 11.8272C7.92909 12.2533 9.101 11.7606 9.52714 10.7485L9.58041 10.6419C9.78017 10.1492 10.1664 9.763 10.6591 9.56324L10.7657 9.52329C11.7911 9.09715 12.2705 7.93856 11.8444 6.91314L11.7778 6.79329Z"
                                            fill="#5D57FB"
                                        />
                                        <path
                                            d="M5.46012 8.58234L2.86328 6.39834L3.66231 5.45282L5.31363 6.85112L8.23008 3.38867L9.17559 4.1877L5.46012 8.58234Z"
                                            fill="white"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1055_669">
                                            <rect width="12" height="12" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <p className="text-[Inter] text-[14px] font-[400] text-[#76788C] leading-[1.5]">
                                {/* {entry.description} */}
                                {entry?.[1].description ?? 'N/A'}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col ">
                        <p className="text-[Inter] text-[14px] font-[500] text-[#76788C] leading-[14px] pt-[17px] pb-[17px]">
                            Eligibility Criteria:
                        </p>
                        <div className="flex flex-col ">
                            <div className="flex items-center mb-[22px]">
                                <svg
                                    width="18"
                                    height="19"
                                    viewBox="0 0 18 19"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M17 9.93945C17 5.52117 13.4183 1.93945 9 1.93945C4.58172 1.93945 1 5.52117 1 9.93945C1 14.3577 4.58172 17.9395 9 17.9395C13.4183 17.9395 17 14.3577 17 9.93945Z"
                                        fill="#5D57FB"
                                    />
                                    <path
                                        d="M13 6.93945L7.5 12.9395L5 10.2122"
                                        stroke="white"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>

                                <p className="pl-[5px] text-[Inter] text-[14px] font-[400] leading-[20px]">
                                    Education Level: 
                                    {/* {entry.eligibility} */}
                                    {entry?.[1].eligibility ?? 'N/A'}
                                    {" "}
                                </p>
                            </div>
                            <div className="flex">
                                <div className="flex items-center mb-[22px]">
                                    <svg
                                        width="18"
                                        height="19"
                                        viewBox="0 0 18 19"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M17 9.93945C17 5.52117 13.4183 1.93945 9 1.93945C4.58172 1.93945 1 5.52117 1 9.93945C1 14.3577 4.58172 17.9395 9 17.9395C13.4183 17.9395 17 14.3577 17 9.93945Z"
                                            fill="#5D57FB"
                                        />
                                        <path
                                            d="M13 6.93945L7.5 12.9395L5 10.2122"
                                            stroke="white"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>

                                    <p className="pl-[5px] text-[Inter] text-[14px] font-[400] leading-[20px]">
                                        {/* {entry.grad_type}{" "} */}
                                        Duration : {entry?.[1].duration ?? 'N/A'} {" "}
                                    </p>
                                </div>
                                <div className="flex items-center mb-[22px] pl-[60px]">
                                    <svg
                                        width="18"
                                        height="19"
                                        viewBox="0 0 18 19"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M17 9.93945C17 5.52117 13.4183 1.93945 9 1.93945C4.58172 1.93945 1 5.52117 1 9.93945C1 14.3577 4.58172 17.9395 9 17.9395C13.4183 17.9395 17 14.3577 17 9.93945Z"
                                            fill="#5D57FB"
                                        />
                                        <path
                                            d="M13 6.93945L7.5 12.9395L5 10.2122"
                                            stroke="white"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>

                                    <p className="pl-[5px] text-[Inter] text-[14px] font-[400] leading-[20px]">
                                        Gender: For all{" "}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-[18px] pl-[50px] pr-[20px] border-l border-[#76788C] ml-[20px] w-[25%] flex flex-col justify-between">
                    <div className="flex flex-col">
                        <div className="flex justify-between h-[22.5px] mb-[14px]">
                            <p className="text-[Inter] text-[14px] font-[400] text-[#76788C] leading-[14px] pt-[7px]">
                                Amount:
                            </p>
                            <p className="text-[Inter] text-[19px] font-[600] pb-[22px]">
                                {/* {entry.amount} */}
                                {entry?.[1].amount ?? 'N/A'}
                            </p>
                        </div>
                        <div className="flex justify-between h-[22.5px]">
                            <p className="text-[Inter] text-[14px] font-[400] text-[#76788C] leading-[14px] pt-[3px]">
                                Deadline:
                            </p>
                            <p className="text-[Inter] text-[14px] font-[400] pb-[22px]">
                                {/* {entry.deadline} */}
                                {entry?.[1].deadline ?? 'N/A'}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[14px]">
                        <div>
                            <button
                                onClick={onEdit}
                                className="bg-[#5D57FB] w-full h-[38px] text-[white] rounded-[4px]"
                            >
                                Edit Details
                            </button>
                        </div>
                        <div>
                            <button
                                onClick={onView}
                                className="bg-[#5D57FB] w-full h-[38px] text-[white] rounded-[4px]"
                            >
                                View Applicants
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
