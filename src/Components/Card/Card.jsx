import React from 'react';
import { IoMdDownload } from "react-icons/io";

const Card = ({ item }) => {
    const { name, email, _id, phone, salary, department } = item;
    const apiUrl = 'https://task-server-tau-dusky.vercel.app/api';

    const handleDownload = () => {
        window.open(`${apiUrl}/download/${_id}`, '_blank');
    };

    return (
        <div>
            <div className="card bg-gray-200 hover:bg-gray-300 shadow-xl text-black">
                <div className="card-body">
                    <h2 className="card-title font-bold uppercase text-2xl">{name}</h2>
                    <p className='font-semibold text-blue-800 mb-6'>{department}</p>
                    <p className='font-semibold'>Expected Salary: <span className='text-red-500 text-3xl font-bold'>${salary}</span>/month</p>
                    <p className='font-semibold text-gray-600'>{phone}</p>
                    <p className='font-semibold text-gray-600'>{email}</p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-blue-600 w-fit text-white" onClick={handleDownload}>
                            <div className='flex justify-center items-center gap-1'>
                                <div><IoMdDownload /></div>
                                <div>Download Resume</div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
