import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../../utils/useAuthClient";

function StudentSignUpForm() {
  const { actor } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = async (data) => {
    const student_id = crypto.randomUUID();
    console.log(data);
    const newData = {
      student_id,
      is_verified: false,
      account_number: [""],
      account_holder_name: [""],
      ifsc_code: [""],
      branch_address: [""],
      branch_code: [""],
      cif_number: [""],
      ...data,
    };

    const register_student = await actor.register_user(newData);
    console.log(register_student);
  };

  return (
    <form
      className="flex justify-center items-center  flex-col gap-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-3xl font-bold">Student sign up</h2>

      <div className="flex flex-col md:flex-row gap-5">
        <label className="text-gray-700 text-sm font-bold flex-1">
          First Name
          <input
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("first_name", { required: true })}
          ></input>
          {errors.first_name && (
            <span className="text-red-500">{errors.first_name.message}</span>
          )}
        </label>
        <label className="text-gray-700 text-sm font-bold flex-1">
          Last Name
          <input
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("last_name", { required: true })}
          ></input>
          {errors.last_name && (
            <span className="text-red-500">{errors.last_name.message}</span>
          )}
        </label>
      </div>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Date of birth
        <input
          className="border rounded w-full py-1 px-2 font-normal"
          type="date"
          {...register("date_of_birth", { required: true })}
        />
        {errors.date_of_birth && (
          <span className="text-red-500">{errors.date_of_birth.message}</span>
        )}
      </label>

      <label className="text-gray-700 text-sm font-bold flex-1">
        Choose Gender
        <select {...register("gender", { required: true })}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {errors.gender && (
          <span className="text-red-500">{errors.gender.message}</span>
        )}
      </label>

      <label className="text-gray-700 text-sm font-bold flex-1">
        Address 1
        <input
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("primary_address", { required: true })}
        />
        {errors.primary_address && (
          <span className="text-red-500">{errors.primary_address.message}</span>
        )}
      </label>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Address 2
        <input
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("secondary_address")}
        />
        {errors.secondary_address && (
          <span className="text-red-500">
            {errors.secondary_address.message}
          </span>
        )}
      </label>
      <label className="text-gray-700 text-sm font-bold flex-1">
        City
        <input
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("city", { required: true })}
        />
        {errors.city && (
          <span className="text-red-500">{errors.city.message}</span>
        )}
      </label>
      <label className="text-gray-700 text-sm font-bold flex-1">
        State
        <input
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("state", { required: true })}
        />
        {errors.state && (
          <span className="text-red-500">{errors.state.message}</span>
        )}
      </label>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Pin Code
        <input
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("zip_code", { required: true })}
        />
        {errors.zip_code && (
          <span className="text-red-500">{errors.zip_code.message}</span>
        )}
      </label>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Select Institute
        <select
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("institute_name", { required: true })}
        >
          <option value="">Select Institute</option>
          {/* Map over your institutes here */}
          <option value="lpu">Lpu</option>
          <option value="amity">Amity</option>
        </select>
        {errors.institute_name && (
          <span className="text-red-500">{errors.institute_name.message}</span>
        )}
      </label>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Roll No.
        <input
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("roll_no", { required: true })}
        />
        {errors.roll_no && (
          <span className="text-red-500">{errors.roll_no.message}</span>
        )}
      </label>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Institute Email
        <input
          className="border rounded w-full py-1 px-2 font-normal"
          type="email"
          {...register("student_institute_email", { required: true })}
        />
        {errors.student_institute_email && (
          <span className="text-red-500">
            {errors.student_institute_email.message}
          </span>
        )}
      </label>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Personal Email
        <input
          className="border rounded w-full py-1 px-2 font-normal"
          type="email"
          {...register("personal_email", { required: true })}
        />
        {errors.personal_email && (
          <span className="text-red-500">{errors.personal_email.message}</span>
        )}
      </label>

      <label className="text-gray-700 text-sm font-bold flex-1">
        Phone No.
        <input
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("phone_no", { required: true })}
        />
        {errors.phone_no && (
          <span className="text-red-500">{errors.phone_no.message}</span>
        )}
      </label>
      {/* <label className="text-gray-700 text-sm font-bold flex-1">
        CGPA
        <input
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("cgpa", { required: true })}
        />
        {errors.cgpa && (
          <span className="text-red-500">{errors.cgpa.message}</span>
        )}
      </label> */}
      <label className="text-gray-700 text-sm font-bold flex-1">
        CGPA
        <input
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("cgpa", {
            required: "CGPA is required",
            pattern: {
              value: /^\d+(\.\d{1})?$/,
              message: "Invalid CGPA. Please enter up to one decimal place.",
            },
          })}
        />
        {errors.cgpa && (
          <span className="text-red-500">{errors.cgpa.message}</span>
        )}
      </label>

      <label className="text-gray-700 text-sm font-bold flex-1">
        Graduation Year
        <input
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("graduation_year", { required: true })}
        />
        {errors.graduation_year && (
          <span className="text-red-500">{errors.graduation_year.message}</span>
        )}
      </label>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Select Program
        <select
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("program_enrolled", { required: true })}
        >
          <option value="">Select Program</option>
          <option value="btech">btech</option>
          <option value="bsc">bsc</option>
        </select>
        {errors.program_enrolled && (
          <span className="text-red-500">
            {errors.program_enrolled.message}
          </span>
        )}
      </label>

      <label className="text-gray-700 text-sm font-bold flex-1">
        Enter Password
        <input
          className="border rounded w-full py-1 px-2 font-normal"
          type="password"
          {...register("password", {
            required: true,
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
      </label>

      <label className="text-gray-700 text-sm font-bold flex-1">
        Confirm password
        <input
          className="border rounded w-full py-1 px-2 font-normal"
          type="password"
          {...register("confirmPassword", {
            validate: (val) => {
              if (!val) {
                return "This field is required";
              } else if (watch("password") !== val) {
                return "Your passwords do no match";
              }
            },
          })}
        />
        {errors.confirmPassword && (
          <span className="text-red-500">{errors.confirmPassword.message}</span>
        )}
      </label>

      <input
        className="border rounded w-full py-1 px-2 font-normal"
        type="submit"
        value="Sign up"
      />

      <p>
        Want to sign up as Institute
        <Link className="underline" to="/register-institute">
          Register here
        </Link>
      </p>
    </form>
  );
}

export default StudentSignUpForm;
