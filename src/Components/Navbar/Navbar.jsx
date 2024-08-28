import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-white shadow-md border-b border-gray-200 shadow-blue-600/80 h-20">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                    </div>
                    <Link to={'/'} className="btn btn-ghost text-4xl uppercase text-black font-bold md:ml-6">Task</Link>
                </div>
                <div className="navbar-end space-x-4 mr-6">
                    <Link to={'/signup'} class="bg-gradient-to-r from-blue-600 font-semibold via-blue-600 to-blue-700 text-white py-2 px-6 rounded-full shadow-lg hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-lg shadow-gray-400/30 hover:shadow-xl hover:shadow-blue-400/50">
                        Signup
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;