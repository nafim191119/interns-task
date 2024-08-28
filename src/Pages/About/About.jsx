import React from 'react';

const About = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 my-2 px-8 py-20">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
            <p className="text-lg text-gray-600 text-center ">
                Welcome to our job search platform, where we connect talented job seekers
                with top employers. Our mission is to make the job search process easy and efficient.
                We aim to empower individuals by helping them find the right opportunities
                and grow their careers.
            </p>
            <p className="text-lg text-gray-600 text-center mt-4">
                Our platform offers a wide range of features designed to simplify your job search,
                from personalized job recommendations to resume uploads. Whether you are
                a seasoned professional or just starting out, we are here to support you
                every step of the way.
            </p>
        </div>
    );
};

export default About;
