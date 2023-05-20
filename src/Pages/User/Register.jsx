import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
    const { createUser, profileUpdate } = useContext(AuthContext);
    const [error, setError] = useState('');

    // console.log(profileUpdate)
    const handleForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                updateUser(name, photo)
                form.reset();
                Swal.fire(
                    'Good job!',
                    'Successfully create account!!',
                    'success'
                )
                setError('')
            })
            .catch(err => {
                setError(err.message)
                console.log(err.message);
                Swal.fire(
                    'Registration Failed!',
                    `${error}`,
                    'error'
                )
            })

    }

    const updateUser = (name, photo) => {
        profileUpdate(name, photo)
            .then(() => console.log("Update Profile"))
            .catch(error => console.log(error.message))
    }


    const handleLogin = () => {

    }
    const handleGoogleLogin = () => {

    }
    return (
        <div>
            <div className="flex justify-center items-center my-12 md:my-0 md:h-[100vh]">
                <div className='border rounded-md w-[90%] md:w-[35%] py-12 px-6 md:px-10  md:shadow-md'>
                    <h2 className="text-2xl font-bold mb-4 text-center uppercase">Register</h2>
                    <form onSubmit={handleForm}>
                        <div className="mb-4">
                            <label className="block mb-1">User Name:</label>
                            <input name='name' className="border border-gray-300 p-2 w-full rounded" type="text" placeholder="Enter your name" />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1">Email:</label>
                            <input name='email' className="border border-gray-300 p-2 w-full rounded" type="email" placeholder="Enter your email" />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1">Password:</label>
                            <input name='password' className="border border-gray-300 p-2 w-full rounded" type="password" placeholder="Enter your password " />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1">Photo:</label>
                            <input name='photo' className="border border-gray-300 p-2 w-full rounded" type="text" placeholder="Photo URL" />
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