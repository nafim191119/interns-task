import React from 'react';

const jobListings = [
    { id: 1, title: 'Software Engineer', company: 'Tech Solutions', location: 'San Francisco, CA' },
    { id: 2, title: 'Product Manager', company: 'Innovate Inc.', location: 'New York, NY' },
    { id: 3, title: 'UX Designer', company: 'Creative Studio', location: 'Austin, TX' },
    { id: 4, title: 'Data Scientist', company: 'Data Insights', location: 'Boston, MA' },
    { id: 5, title: 'Frontend Developer', company: 'Web Wizards', location: 'Los Angeles, CA' },
    { id: 6, title: 'Backend Engineer', company: 'Code Craft', location: 'Seattle, WA' },
    { id: 7, title: 'Marketing Specialist', company: 'Market Maven', location: 'Chicago, IL' },
    { id: 8, title: 'Sales Executive', company: 'Sales Surge', location: 'San Diego, CA' },
    { id: 9, title: 'Graphic Designer', company: 'Design Pros', location: 'Denver, CO' },
    { id: 10, title: 'Project Coordinator', company: 'Project Plus', location: 'Atlanta, GA' }
];

const JobListing = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 my-2">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Job Listings</h1>
            <div className="w-full max-w-4xl bg-white shadow-md rounded-lg overflow-hidden">
                <ul>
                    {jobListings.map((job) => (
                        <li key={job.id} className="border-b border-gray-200 p-4">
                            <h2 className="text-xl font-semibold text-gray-700">{job.title}</h2>
                            <p className="text-gray-600">{job.company}</p>
                            <p className="text-gray-500">{job.location}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default JobListing;
