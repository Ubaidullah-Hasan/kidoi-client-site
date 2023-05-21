import React from 'react';

const Subscribe = () => {
    return (
        <div className='bg-[#C1DFE9] py-[40px] md:py-[60px]'>
            <div className='text-center mb-6 md:mb-10'>
                <h2 className='text-2xl md:text-4xl font-bold mb-4'>Subscribe Newsletter</h2>
                <p className='w-[60%] mx-auto'>Get access to my latest awesome product by joining the weekly newsletter</p>
            </div>
            <div className='text-center'>
                <input type="email" placeholder="Type here" className="input input-bordered md:w-[90%] max-w-xs rounded-full" />
                <button className='btn rounded-full ms-2 md:ms-4 bg-red-500 hover:bg-red-600 border-red-500'>Subscribe</button>
            </div>
        </div>
    );
};

export default Subscribe;