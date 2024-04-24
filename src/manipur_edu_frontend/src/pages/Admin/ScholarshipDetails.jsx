// import React from "react";

// const ScholarshipDetails = ({ onBack }) => {
//   return <div>ScholarshipDetails</div>;
// };

// export default ScholarshipDetails;
import React from "react";
import { useSelector } from "react-redux";
// import img from "../../assets/student.png";
import { useAuth } from "../../utils/useAuthClient";
const ScholarshipDetails = ({ onBack, onView, onEdit}) => {
  const entry = useSelector((state) => state.scholarshipDetailsReducer);
    console.log('entries in details',entry);
    // console.log(entry);

  return (
    <div>
      <div className=" px-[63px] py-[25px] flex justify-between ">
        <div className="font-[600] font-[Segoe UI] text-4xl text-[#2D6BE4]">
          Scholarship Details
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
            <img className="w-[67px] h-[55px] pl-[12px]" src="student.png" alt="" />
          </div>
        </div>
      </div>

      <div className=" pr-[50px] w-[100%]  flex ">
        <div className="bg-[#8CA6FF] h-[470px] w-[50%] flex flex-col items-center pt-[100px] pb-[60px] ">
          <div className="flex relative">
            <p className="text-[Franklin Gothic Demi Cond] text-[80px] font-[400]">
              ₹50,000
            </p>
            <svg
              className="absolute left-[250px] bottom-[67px]"
              width="70"
              height="70"
              viewBox="0 0 70 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_833_1052)">
                <path
                  d="M0.0228844 14.1452C0.107899 13.8702 0.272343 13.6266 0.495514 13.445C0.718685 13.2633 0.990608 13.1518 1.27705 13.1243L15.1312 11.666L20.5854 0.815992C20.7204 0.592595 20.9109 0.40784 21.1382 0.279601C21.3656 0.151363 21.6223 0.0839844 21.8833 0.0839844C22.1443 0.0839844 22.401 0.151363 22.6284 0.279601C22.8557 0.40784 23.0462 0.592595 23.1812 0.815992L28.6646 11.666L42.4604 13.1243C42.741 13.1543 43.0068 13.2651 43.2257 13.4432C43.4446 13.6212 43.6071 13.859 43.6935 14.1276C43.78 14.3962 43.7867 14.6841 43.7127 14.9565C43.6388 15.2288 43.4875 15.4738 43.2771 15.6618L32.3104 25.2577L36.4229 38.9368C36.5047 39.2139 36.5024 39.509 36.4163 39.7847C36.3302 40.0604 36.1641 40.3044 35.9391 40.4856C35.7142 40.6668 35.4405 40.7771 35.1527 40.8026C34.865 40.828 34.5761 40.7674 34.3229 40.6285L21.8979 33.716L9.47288 40.6285C9.2614 40.7565 9.02005 40.8269 8.77288 40.8327C8.39425 40.8485 8.02484 40.7132 7.74589 40.4567C7.46694 40.2002 7.3013 39.8434 7.28538 39.4647V39.3743C7.28409 39.0946 7.36525 38.8207 7.51871 38.5868L11.4854 25.2577L0.518715 15.6618C0.297649 15.4845 0.133026 15.2467 0.0449677 14.9773C-0.043087 14.708 -0.0507622 14.4188 0.0228844 14.1452Z"
                  fill="white"
                />
                <path
                  d="M39.2231 38.1206L35.9273 27.1248C35.847 26.8567 35.8455 26.5711 35.9231 26.3021C36.0007 26.0332 36.154 25.7923 36.3648 25.6081L40.8565 21.5831C41.0681 21.3958 41.3297 21.274 41.6093 21.2325C41.8889 21.1911 42.1746 21.2319 42.4315 21.3498C70.3731 34.1831 70.0231 55.9998 70.0231 56.904C70.0369 57.1501 69.9879 57.3957 69.881 57.6179C69.774 57.84 69.6124 58.0314 69.4114 58.1741C69.2104 58.3169 68.9765 58.4063 68.7315 58.4341C68.4865 58.4619 68.2385 58.4272 68.0106 58.3331L55.4398 53.1706C55.2356 56.9623 54.1565 64.8373 49.1981 69.5915C49.003 69.7954 48.7528 69.9384 48.478 70.003C48.2031 70.0675 47.9155 70.0509 47.6499 69.9552C47.3843 69.8595 47.1522 69.6887 46.9818 69.4636C46.8114 69.2386 46.7099 68.9689 46.6898 68.6873C46.6898 68.6873 45.2023 54.104 37.9398 44.3331C37.7139 44.069 37.5897 43.7328 37.5897 43.3852C37.5897 43.0376 37.7139 42.7014 37.9398 42.4373C38.5281 41.904 38.9589 41.2196 39.1852 40.4584C39.4114 39.6973 39.4246 38.8887 39.2231 38.1206Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_833_1052">
                  <rect
                    width="70"
                    height="70"
                    fill="white"
                    transform="matrix(-1 0 0 1 70 0)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>

          <p className="font-[Fraunces] text-[45px] font-[400] italic">
            No Essay
          </p>
          <p className="font-[Fraunces] text-[45px] font-[400] italic">
            Scholarship
          </p>
        </div>
        <svg
          className="relative right-[13px]"
          width="46"
          height="496"
          viewBox="0 0 46 496"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_833_1055)">
            <g clip-path="url(#clip1_833_1055)">
              <path
                d="M12.76 0.5C12.939 0.612894 13.1036 0.747246 13.25 0.900024C12.06 30.3 0.5 30.09 0.5 59.5C0.5 88.91 13.25 88.92 13.25 118.34C13.25 147.76 0.5 147.77 0.5 177.19C0.5 206.61 13.25 206.61 13.25 236.02C13.25 265.43 0.5 265.44 0.5 294.86C0.5 324.28 13.25 324.27 13.25 353.69C13.25 383.11 0.5 383.11 0.5 412.5C0.5 441.89 13.25 441.91 13.25 471.33C13.25 500.75 0.5 500.78 0.5 530.2C0.5 559.62 13.25 559.61 13.25 589.03C13.25 618.45 0.5 618.45 0.5 647.86C0.5 677.27 13.25 677.28 13.25 706.69C13.25 736.1 0.5 736.11 0.5 765.5C0.5 794.89 13.25 794.92 13.25 824.33C13.25 853.74 0.5 853.77 0.5 883.18C0.5 912.59 13.25 912.6 13.25 942.01C13.25 971.42 0.5 971.43 0.5 1000.84C0.5 1030.25 13.25 1030.26 13.25 1059.68C13.25 1089.1 0.5 1089.09 0.5 1118.5C0.5 1147.91 13.25 1147.91 13.25 1177.33C13.25 1206.75 0.5 1206.76 0.5 1236.17C0.5 1265.58 13.25 1265.59 13.25 1295C13.25 1324.41 0.5 1324.42 0.5 1353.83C0.5 1383.24 13.25 1383.25 13.25 1412.67C13.25 1442.09 0.5 1442.08 0.5 1471.5C0.5 1500.92 13.25 1500.91 13.25 1530.33C13.25 1559.75 0.5 1559.74 0.5 1589.16C0.5 1618.58 13.25 1618.57 13.25 1647.99C13.25 1677.41 0.5 1677.4 0.5 1706.82C0.5 1736.24 13.25 1736.24 13.25 1765.65C13.25 1795.06 0.5 1795.07 0.5 1824.5C0.5 1853.93 13.25 1853.9 13.25 1883.31C13.25 1912.72 0.5 1912.73 0.5 1942.14C0.5 1971.39 13.11 1971.57 13.24 2000.5H45.5V0.5H12.76Z"
                fill="white"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_833_1055">
              <rect width="46" height="496" fill="red" />
            </clipPath>
            <clipPath id="clip1_833_1055">
              <rect width="46" height="2001" fill="red" />
            </clipPath>
          </defs>
        </svg>

        <div className="w-[50%] p-[40px] pl-[80px] flex flex-col">
          <p className="text-[#1B1B1B] font-[Fraunces] font-[530] text-[36px] leading-[36px] pb-[30px]">
            ₹50,000 
            {entry?.[1].name ?? 'N/A'}
            {/* {entry?.[1].name ?? 'N/A'} */}
          </p>
          <p className="pb-[15px] font-[Segoe UI] text-[15px] font-[700]">
            DEADLINE: February 29, 2024
          </p>
          <p className="pb-[20px] text-[Segoe UI] text-[16px] font-[400]">
            Help cover the cost of college without writing a single essay!
          </p>
          <p className="pb-[28px] text-[Segoe UI] text-[16px] font-[400]">
            Manipur Edu is giving one student ₹50,000 to help pay for
            tuition,housing, books and other college expenses.
          </p>
          <p className="pb-[40px] text-[Segoe UI] text-[16px] font-[400]">
            Apply below for your chance to win so you can focus on your
            education, not your finances. Good luck!
          </p>
          <div className="flex gap-[22px] items-center">
            <div>
              <button
                onClick={onEdit}
                className="bg-[#00227A] text-[white] text-[Segoe UI] text-[16px] font-[600] py-[12px] rounded-[100px]  px-[25px]"
              >
                Edit Details
              </button>
            </div>
            <div className="pr-[36px]">
              <button
                onClick={onView}
                className="text-[#00227A] text-[16px] font-[Segoe UI] font-[600] rounded-[100px] py-[12px] px-[20px] border border-[#00227A]"
              >
                View Applicants
              </button>
            </div>

            <svg
              className="pt-[14px]"
              width="61"
              height="92"
              viewBox="0 0 61 78"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_833_1031)">
                <path
                  d="M52.5302 50.5145C54.5743 48.2346 54.4171 44.6968 52.1372 42.6528L43.9609 35.2627L54.9674 34.7124C58.0335 34.5551 60.392 31.9608 60.2348 28.8947C60.0775 25.8286 57.4832 23.4701 54.4171 23.6273L43.4106 24.1776L50.8007 16.0014C52.8447 13.7215 52.6875 10.1837 50.4076 8.13967C48.1277 6.09562 44.5899 6.25285 42.5458 8.53275L35.1558 16.709L34.6055 5.70253C34.3696 2.63645 31.6966 0.277926 28.6305 0.435161C25.5645 0.592396 23.2059 3.18678 23.3632 6.25286L23.9135 17.2593L15.7373 9.86924C13.4574 7.82521 9.91959 7.98244 7.87551 10.2623C5.83145 12.5422 5.98869 16.08 8.26862 18.1241L16.5235 25.5928L5.51698 26.1431C2.4509 26.3003 0.092379 28.8947 0.249614 31.9608C0.406849 35.0269 3.00123 37.3854 6.06731 37.2281L17.0738 36.6778L9.68373 44.854C7.63966 47.134 7.79689 50.6717 10.0768 52.7158C12.3567 54.7599 15.8945 54.6026 17.9386 52.3227L25.4072 44.1465L25.9575 55.1529C26.1148 58.219 28.7092 60.5775 31.7752 60.4203C34.8413 60.2631 37.1998 57.6687 37.0426 54.6026L36.4923 43.5962L44.6685 50.9862C46.9484 52.9516 50.4862 52.7944 52.5302 50.5145Z"
                  fill="#FF90E7"
                />
              </g>
              <defs>
                <clipPath id="clip0_833_1031">
                  <rect
                    width="60"
                    height="77"
                    fill="white"
                    transform="translate(0.25 0.4375)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      <div className="relative py-[74px] px-[201px] flex flex-col gap-[28px]">
        <div className="flex flex-col gap-[8px]">
          <p className="text-[Fraunces] text-[32px] font-[600]">
            Who Can Apply
          </p>
          <p>
            All high school and college students, as well as anyone looking to
            attend college or graduate school in the next year. Please note: Not
            everyone is eligible for this scholarship. Manipur Edu sponsored
            scholarships and sweepstakes are for people with Indian citizenship
            or a valid Indian passport only. <br />
            Read the <span className="text-[#007AC8]">
              scholarship rules
            </span>{" "}
            for eligibility requirements.{" "}
          </p>
        </div>
        <div className="flex flex-col gap-[8px]">
          <p className="text-[Fraunces] text-[32px] font-[600]">How It Works</p>
          <p>
            The ₹50,000 “No Essay” Scholarship is an easy scholarship with no
            essay required! Only one entry allowed per person. The winner will
            be determined by random drawing and then contacted directly and
            announced in Manipur Edu's e-newsletter and on the{" "}
            <span className="text-[#007AC8]">Scholarship Winners</span> page.
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-[Source Sans Pro] text-[16px] font-[700]">
            About Manipur Edu Scholarships
          </p>
          <p>
            We believe cost shouldn’t keep anyone from pursuing a higher
            education, so we connect students with{" "}
            <span className="text-[#007AC8]">thousands of scholarships</span> —
            many of which don’t require an essay — to help them afford college.
            In 2023 alone, we offered over ₹2,85,000 in Niche scholarships. Read
            more about Manipur Edu’s scholarships
            <span className="text-[#007AC8]"> here</span> or visit our{" "}
            <span className="text-[#007AC8]">FAQs</span> .
          </p>
        </div>
        <div className="flex justify-center mt-[40px] text-[#00227A]">
          {" "}
          <button
            onClick={onBack}
            className="border border-[#00227A] rounded-[10px] py-[14px] px-[25px]"
          >
            Browse Other Scholarships
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipDetails;
