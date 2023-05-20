import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2'


const Login = () => {
    const { login, googleSignin } = useContext(AuthContext);
    const [error, setError] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        login(email, password)
        .then(result => {
            console.log(result.user)
            form.reset();
            
        })
        .catch(error => {
            console.log(error)
        })
    }
    

    const handleGoogleLogin = () => {
        googleSignin()
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error.message)
        })
    }
    

    return (
        <div>
            <div className="flex justify-center items-center mt-12 md:mt-0 md:h-[100vh]">
                <div className='border rounded-md w-[90%] md:w-[35%] py-12 px-6 md:px-10  md:shadow-md'>
                    <h2 className="text-2xl font-bold mb-4 text-center uppercase">Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label className="block mb-1">Email:</label>
                            <input type="email" name='email' className="border border-gray-300 p-2 w-full rounded" placeholder="Enter your email" />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1">Password:</label>
                            <input type="password" name='password' className="border border-gray-300 p-2 w-full rounded" placeholder="Enter your password" />
                        </div>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded w-full" type="submit">
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