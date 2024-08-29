import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const Signup = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const apiUrl = 'https://task-server-tau-dusky.vercel.app/api';

    const onSubmit = async (data) => {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
        });
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('phone', data.phone);
        formData.append('salary', data.salary);
        formData.append('department', data.department);
        formData.append('resume', data.resume[0]);
        try {
            const response = await fetch(`${apiUrl}/signup`, {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                console.log('User registered successfully!');
                reset();
            }
            else {
                console.error('Failed to register user');
            }
        }
        catch (error) {
            console.error('Error during form submission:', error);
        }
    };

    return (
        <div className='mx-auto px-4 lg:px-0 py-2'>
            <div className="hero bg-gray-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center text-black mb-3">
                        <h1 className="text-3xl lg:text-4xl font-bold uppercase">
                            <img className='rounded mb-2' width={500} src="https://i.ibb.co/kMKjRx7/Remove-bg-ai-1724760500768.png" alt="Signup" />
                            <span className='text-blue-700'>Signup</span> now!
                        </h1>
                        <p className="py-6">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, corrupti!
                        </p>
                    </div>
                    <div className="card bg-white w-full shadow-2xl lg:w-1/2">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className='flex flex-col lg:flex-row lg:space-x-8 space-y-4 lg:space-y-0'>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-black">Full Name*</span>
                                    </label>
                                    <input {...register("name", { required: "Full Name is required", maxLength: 80 })} type="text" placeholder="name" className="input input-bordered bg-gray-100 w-full" />
                                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                                </div>
                                <div className='form-control w-full'>
                                    <label className="label">
                                        <span className="label-text text-black">Pick your department*</span>
                                    </label>
                                    <select {...register("department", { required: "Department is required" })} className="select select-bordered bg-gray-100 text-black w-full">
                                        <option value="" disabled>Pick one</option>
                                        <option value="Web Development">Web Development</option>
                                        <option value="App Development">App Development</option>
                                        <option value="Machine Learning">Machine Learning</option>
                                        <option value="Artificial Intelligence">Artificial Intelligence</option>
                                    </select>
                                    {errors.department && <p className="text-red-500 text-sm mt-1">{errors.department.message}</p>}
                                </div>
                            </div>
                            <div className='flex flex-col lg:flex-row lg:space-x-8 space-y-4 lg:space-y-0'>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-black">Phone Number*</span>
                                    </label>
                                    <input {...register("phone", { required: "Phone Number is required" })} type="tel" placeholder="phone number" className="input input-bordered bg-gray-100 w-full" />
                                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                                </div>
                                <div className='form-control w-full'>
                                    <label className="label">
                                        <span className="label-text text-black">Expected Salary($)</span>
                                    </label>
                                    <input {...register("salary")} type="number" placeholder="$" className="input input-bordered bg-gray-100 w-full text-black" />
                                </div>
                            </div>
                            <div className="form-control">
                                <label htmlFor="resume-upload" className="label">
                                    <span className="label-text text-black">Resume*</span>
                                </label>
                                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-300 p-6">
                                    <div className="text-center">
                                        <label className="form-control w-full max-w-xs">
                                            <div className="label">
                                                <span className="label-text text-black">Pick a file</span>
                                            </div>
                                            <input {...register("resume", { required: "Resume is required" })} type="file" className="file-input file-input-bordered w-full max-w-xs bg-gray-100 text-black" />
                                        </label>
                                    </div>
                                    {errors.resume && <span className="text-red-500">{errors.resume.message}</span>}
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Email*</span>
                                </label>
                                <input {...register("email", { required: "Email is required" })} type="email" placeholder="email" className="input input-bordered bg-gray-100 w-full" />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Password*</span>
                                </label>
                                <input {...register("password", { required: "Password is required" })} type="password" placeholder="password" className="input input-bordered bg-gray-100 w-full" />
                                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-outline hover:bg-black hover:text-white text-xl text-black w-full">Signup</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
