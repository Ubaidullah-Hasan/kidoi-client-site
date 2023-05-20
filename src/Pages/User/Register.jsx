import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const handleLogin = () => {

    }
    const handleGoogleLogin = () => {

    }
    return (
        <div>
            <div className="flex justify-center items-center mt-12 md:mt-0 md:h-[100vh]">
                <div className='border rounded-md w-[90%] md:w-[35%] py-12 px-6 md:px-10  md:shadow-md'>
                    <h2 className="text-2xl font-bold mb-4 text-center uppercase">Register</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block mb-1">Email:</label>
                            <input name='email' className="border border-gray-300 p-2 w-full rounded" type="email" placeholder="Enter your email" />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1">Password:</label>
                            <input name='password' className="border border-gray-300 p-2 w-full rounded" type="password" placeholder="Enter your password " />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1">Confirm Password:</label>
                            <input name='confirm' className="border border-gray-300 p-2 w-full rounded" type="password" placeholder="Confirm Password" />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1">Photo:</label>
                            <input name='photo' className="border border-gray-300 p-2 w-full rounded" type="password" placeholder="Photo URL" />
                        </div>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded w-full" type="submit" onClick={handleLogin}>
                            Register
                        </button>
                    </form>
                    <div className="mt-4">
                        Have an account? <Link className="text-blue-500" to="/login">Log In</Link>
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

export default Register;