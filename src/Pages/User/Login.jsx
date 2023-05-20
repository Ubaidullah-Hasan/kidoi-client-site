import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleGoogleLogin = () => {

    }
    const handleLogin = () => {

    }

    return (
        <div>
            <div className="flex justify-center items-center mt-12 md:mt-0 md:h-[100vh]">
                <div className='border rounded-md w-[90%] md:w-[35%] py-12 px-6 md:px-10  md:shadow-md'>
                    <h2 className="text-2xl font-bold mb-4 text-center uppercase">Login</h2>
                    <form className="">
                        <div className="mb-4">
                            <label className="block mb-1">Email:</label>
                            <input className="border border-gray-300 p-2 w-full rounded" type="email" placeholder="Enter your email" />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1">Password:</label>
                            <input className="border border-gray-300 p-2 w-full rounded" type="password" placeholder="Enter your password" />
                        </div>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded w-full" type="submit" onClick={handleLogin}>
                            Login
                        </button>
                    </form>
                    <div className="mt-4">
                        Don't have an account? <Link className="text-blue-500" to="/register">Register</Link>
                    </div>
                    <div className='text-center'>
                        <button className="bg-red-500 text-white py-2 px-4 mt-4 rounded " onClick={handleGoogleLogin}>
                            Login with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;