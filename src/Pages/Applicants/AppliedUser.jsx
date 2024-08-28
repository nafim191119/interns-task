import React, { useEffect, useState } from 'react';
import Card from '../../Components/Card/Card';

const AppliedUser = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    return (
        <div className='py-2'>
            <h2 className='text-center text-black text-3xl font-bold uppercase underline py-4'>Applied Users</h2>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mx-auto px-4 gap-6 pb-6'>
                {
                    users.map(item => <Card key={item._id} item={item}></Card>)
                }
            </div>
        </div>
    );
};

export default AppliedUser;
