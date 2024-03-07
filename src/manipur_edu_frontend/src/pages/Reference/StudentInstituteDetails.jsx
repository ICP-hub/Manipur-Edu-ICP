import React from "react";
import Button from "./Buttons";

const SignupStudentsInstitute = () => {
  //   const { actor, login, principal, authClient, identity } = useAuth();
  //   const navigate = useNavigate();
  //   const { userType } = React.useContext(UserContext);

  //   const handleLogin = async () => {
  //     let auth = await login();
  //     console.log("authClient", auth);
  //     const principal_id = authClient.getIdentity().getPrincipal().toString();

  //     if (userType == "student") {
  //       const is_student_present = await actor.check_student(principal_id);
  //       console.log(is_student_present);

  //       if (!is_student_present) {
  //         return navigate("/register-student");
  //       }

  //       const is_student_approved = await actor.is_student_approved(principal_id);
  //       console.log(is_student_approved);
  //       if (is_student_present && is_student_approved) {
  //         navigate("/");
  //       } else {
  //         navigate("/student-profile");
  //       }
  //     } else if (userType == "institute") {
  //       const is_institute_present = await actor.check_institute(principal_id);
  //       console.log(is_institute_present);

  //       if (!is_institute_present) {
  //         return navigate("/register-institute");
  //       }

  //       const is_institute_approved = await actor.is_institute_approved(
  //         principal_id
  //       );
  //       console.log(is_institute_approved);
  //       if (is_institute_present && is_institute_approved) {
  //         navigate("/");
  //       } else {
  //         navigate("/");
  //       }
  //     } else {
  //       navigate("/admin");
  //     }
  //   };

  return (
    <div className="flex justify-between ">
      <div
        className="w-[40%] min-h-screen flex flex-col"
        style={{ backgroundColor: "rgba(172, 191, 253, 1)" }}
      >
        <div
          className=" text-[28px] font-[700] pt-[40px] pl-[120px]"
          style={{
            fontFamily: "Philosopher",
            lineHeight: "31px",
            letterSpacing: "0em",
            color: "rgba(0, 65, 233, 1)",
          }}
        >
          Manipur Edu
        </div>
        <div>
          <div className="h-[482px]">
            <img className="w-full object-contain" src="SignupPageGirl.png" alt="Image 1" />
          </div>
        </div>
      </div>
      <div className="min-h-screen flex flex-col w-[820px]">
        <div className="flex justify-end h-[62px]">
          <div className="h-[120px] w-[120px] pl-[60px]">
            <img src="Ellipse8.png" alt="Image 2" />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            style={{
              color: "rgba(0, 34, 122, 1)",
              fontFamily: "Noto Sans",
              fontSize: "35px",
              fontWeight: "500",
              lineHeight: "48px",
              letterSpacing: "0em",
            }}
          >
            Sign up: Institute Details
          </div>
          <div className="w-[476px] mt-[25px] ">
            <form>
              <div className="flex flex-col">
                <div>
                  <label style={{ color: "rgba(0, 34, 122, 1)" }} for="fname">
                    Institute Name
                  </label>
                  <br />
                  <input
                    className="w-[476px] h-[45px] rounded-[10px] "
                    type="text"
                    id="iname"
                    name="iname"
                    style={{
                      border: "1px solid rgba(172, 191, 253, 1)",
                    }}
                  />
                </div>
                <div className="mt-[15px]">
                  <label style={{ color: "rgba(0, 34, 122, 1)" }} for="fname">
                    Roll Number
                  </label>
                  <br />
                  <input
                    className="w-[476px] h-[45px] rounded-[10px] "
                    type="text"
                    id="rnum"
                    name="rnum"
                    style={{
                      border: "1px solid rgba(172, 191, 253, 1)",
                    }}
                  />
                </div>
                <div className="flex justify-between mt-[15px]">
                  <div className="w-full">
                    <label style={{ color: "rgba(0, 34, 122, 1)" }} for="fname">
                      Current Cgpa
                    </label>
                    <br />
                    <input
                      className="w-[228px] h-[45px] rounded-[10px] "
                      type="text"
                      id="cgpa"
                      name="cgpa"
                      style={{
                        border: "1px solid rgba(172, 191, 253, 1)",
                      }}
                    />
                  </div>
                  <div className="w-full">
                    <label style={{ color: "rgba(0, 34, 122, 1)" }} for="lname">
                      Graduation Year
                    </label>
                    <br />
                    <input
                      className="w-full h-[45px] rounded-[10px] "
                      type="text"
                      id="gradyear"
                      name="gradyear"
                      style={{
                        border: "1px solid rgba(172, 191, 253, 1)",
                      }}
                    />
                  </div>
                </div>
                <div className="mt-[15px]">
                  <label style={{ color: "rgba(0, 34, 122, 1)" }} for="fname">
                    Program Enrolled into
                  </label>
                  <br />
                  <input
                    className="w-[476px] h-[45px] rounded-[10px] "
                    type="text"
                    id="program"
                    name="program"
                    style={{
                      border: "1px solid rgba(172, 191, 253, 1)",
                    }}
                  />
                </div>
                <div className="mt-[15px]">
                  <label style={{ color: "rgba(0, 34, 122, 1)" }} for="fname">
                    Institute Email-id
                  </label>
                  <br />
                  <input
                    className="w-[476px] h-[45px] rounded-[10px] "
                    type="text"
                    id="iemail"
                    name="iemail"
                    style={{
                      border: "1px solid rgba(172, 191, 253, 1)",
                    }}
                  />
                </div>
              </div>
              <div className="mt-[30px]">
                {/* Previous */}
                <button
                  className="w-[45px] h-[45px] text-white text-[20px]"
                  style={{
                    backgroundColor: "rgba(100, 110, 214, 1)",
                    borderRadius: "10px",
                  }} /*onClick={handleLogin}*/
                >
                  PreviousH
                </button>
                <button
                  className="w-[45px] h-[45px] text-white text-[20px]"
                  style={{
                    backgroundColor: "rgba(100, 110, 214, 1)",
                    borderRadius: "10px",
                  }} /*onClick={handleLogin}*/
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupStudentsInstitute;
