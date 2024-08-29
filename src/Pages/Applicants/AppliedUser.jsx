import React, { useEffect, useState } from 'react';
import Card from '../../Components/Card/Card';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const AppliedUser = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const apiUrl = 'https://task-server-tau-dusky.vercel.app/api';

    useEffect(() => {
        fetch(`${apiUrl}/users`)
            .then(response => response.json())
            .then(data => {
                setUsers(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <>
                <div className='py-20 mx-40'>
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress />
                    </Box>
                    <div className="flex w-52 flex-col gap-4 mx-auto py-8">
                        <div className="skeleton h-32 w-full"></div>
                        <div className="skeleton h-4 w-28"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-full"></div>
                    </div>
                </div>
            </>
        );
    }
    return (
        <div className='py-2'>
            <h2 className='text-center text-black text-3xl font-bold uppercase underline py-4'>Applied Users</h2>
            <div className='text-2xl text-black font-semibold uppercase px-20'>Total Applicants : <span className='text-primary font-bold text-4xl'>{users.length}</span></div>
            <div className='grid grid-cols-1 md:grid-cols-3 mx-auto px-6 pt-6 gap-6 pb-6'>
                {
                    users.map(item => <Card key={item._id} item={item}></Card>)
                }
            </div>
        </div>
    );
};

export default AppliedUser;
