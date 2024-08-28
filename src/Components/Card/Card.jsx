import React from 'react';

const Card = ({ item }) => {
    const { name, email, _id } = item;

    const handleDownload = () => {
        window.open(`http://localhost:5000/api/download/${_id}`, '_blank');
    };

    return (
        <div>
            <div className="card bg-white shadow-xl text-black">
                <div className="card-body">
                    <h2 className="card-title font-bold">{name}</h2>
                    <p className='font-semibold'>{email}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary w-32" onClick={handleDownload}>Download Resume</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
