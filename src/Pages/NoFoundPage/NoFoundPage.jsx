import React from 'react';
import noFound from "../../assets/noFoundPage.jpg"
import { useNavigate } from 'react-router-dom';

const NoFoundPage = () => {
    const navigate = useNavigate()
    const handleBack = () => {
        navigate("/", { replace: true });
    }
    return (
        <div className='w-[80%] md:w-1/2 mx-auto h-full text-center md:mt-8 mt-[30%]'>
            <img src={noFound} alt="Image" />
            <button className='btn-primary btn' onClick={handleBack}>Back To Home</button>
        </div>
    );
};

export default NoFoundPage;