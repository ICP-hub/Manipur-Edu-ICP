import { useForm } from 'react-hook-form';
import { useAuth } from '../../../utils/useAuthClient';
import React from 'react';
import Button from '../../../components/Button';

const StudentProfile = () => {
    const { actor } = useAuth();
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    let studentData;
    const onSubmit = async (data) => {
        console.log(data);
        const register_student = await actor.edit_student_profile(data);
        console.log(register_student);


    };

    return (

        <form className="flex justify-center items-center  flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-3xl font-bold">Student sign up</h2>
            <label className="text-gray-700 text-sm font-bold flex-1">
                Approve student
                <select {...register('approve', { required: true })}>
                    <option value="">Verify</option>
                    <option value="true">approve</option>
                    <option value="false">decline</option>

                </select>
                {errors.approve && (
                    <span className="text-red-500">{errors.approve.message}</span>
                )}
            </label>
            <button type="submit">Submit</button>
        </form>

    );



}

export default StudentProfile;