import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from '../../../utils/useAuthClient';
function InstituteSignUpForm() {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const { actor } = useAuth();

    const onSubmit = async (data) => {
        const institute_id = crypto.randomUUID();
        console.log(data);
        const newData = {
            institute_id,
            is_verified: false,
            institute_size: '10',
            ...data
        }
        const register_institute = await actor.register_institute(newData);


        console.log(register_institute);


    };

    return (
        <form className="flex justify-center items-center  flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-3xl font-bold">Institute sign up</h2>


            <label className="text-gray-700 text-sm font-bold flex-1">
                Institute Name
                <input
                    className="border rounded w-full py-1 px-2 font-normal"
                    {...register("institute_name", { required: true })}
                ></input>
                {errors.institute_name && (
                    <span className="text-red-500">{errors.institute_name.message}</span>
                )}
            </label>

            <label className="text-gray-700 text-sm font-bold flex-1">
                Address 1
                <input
                    className="border rounded w-full py-1 px-2 font-normal"
                    {...register('primary_address', { required: true })} />
                {errors.primary_address && (
                    <span className="text-red-500">{errors.primary_address.message}</span>
                )}
            </label>
            <label className="text-gray-700 text-sm font-bold flex-1">
                Address 2
                <input
                    className="border rounded w-full py-1 px-2 font-normal"
                    {...register('secondary_address')} />
                {errors.secondary_address && (
                    <span className="text-red-500">{errors.secondary_address.message}</span>
                )}
            </label>
            <label className="text-gray-700 text-sm font-bold flex-1">
                City
                <input className="border rounded w-full py-1 px-2 font-normal"
                    {...register('city', { required: true })} />
                {errors.city && (
                    <span className="text-red-500">{errors.city.message}</span>
                )}
            </label>
            <label className="text-gray-700 text-sm font-bold flex-1">
                State
                <input className="border rounded w-full py-1 px-2 font-normal"
                    {...register('state', { required: true })} />
                {errors.state && (
                    <span className="text-red-500">{errors.state.message}</span>
                )}
            </label>
            <label className="text-gray-700 text-sm font-bold flex-1">
                Pin Code
                <input className="border rounded w-full py-1 px-2 font-normal" {...register('zip_code', { required: true })} />
                {errors.zip_code && (
                    <span className="text-red-500">{errors.zip_code.message}</span>
                )}
            </label>


            <label className="text-gray-700 text-sm font-bold flex-1">
                Institute Email

                <input className="border rounded w-full py-1 px-2 font-normal"
                    type="email" {...register('email', { required: true })} />
                {errors.email && (
                    <span className="text-red-500">{errors.email.message}</span>
                )}
            </label>

            <label className="text-gray-700 text-sm font-bold flex-1">
                Phone No.
                <input
                    className="border rounded w-full py-1 px-2 font-normal"
                    {...register('phone_no', { required: true })} />
                {errors.phone_no && (
                    <span className="text-red-500">{errors.phone_no.message}</span>
                )}
            </label>

            <label className="text-gray-700 text-sm font-bold flex-1">
                Enter Password



                <input
                    className="border rounded w-full py-1 px-2 font-normal"
                    type="password" {...register('password', {
                        required: true,
                        minLength: {
                            value: 8,
                            message: "Password must be at least 8 characters",
                        },
                    })} />
                {errors.password && (
                    <span className="text-red-500">{errors.password.message}</span>
                )}
            </label>

            <label className="text-gray-700 text-sm font-bold flex-1">
                Confirm password



                <input className="border rounded w-full py-1 px-2 font-normal"
                    type="password" {...register('confirmPassword', {
                        validate: (val) => {
                            if (!val) {
                                return "This field is required";
                            } else if (watch("password") !== val) {
                                return "Your passwords do no match";
                            }
                        },
                    })} />
                {errors.confirmPassword && (
                    <span className="text-red-500">{errors.confirmPassword.message}</span>
                )}
            </label>


            <input className="border rounded w-full py-1 px-2 font-normal"
                type="submit" value="Sign up" />

            <p>Want to sign up as Student
                <Link className="underline" to='/register-student' > Register here</Link>
            </p>
        </form>
    );
}

export default InstituteSignUpForm;
