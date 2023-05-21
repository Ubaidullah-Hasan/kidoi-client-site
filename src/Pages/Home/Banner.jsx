import React from 'react';
import bus from "../../assets/banner/bus.webp"
import children from "../../assets/banner/child.webp"
import rain from "../../assets/banner/rain.webp"

const Banner = () => {

    return (
        <div className='bg-[#C1DFE9] cus-img py-10 md:py-0'>
            <div className='md:w-[90%] mx-auto flex gap-10 flex-col md:flex-row md:h-[600px] justify-between items-center'>
                <div className='w-[80%] md:w-[45%] text-center md:text-start'>
                    <h1 className='text-3xl md:text-6xl font-extrabold'>Best Kids Store & Online Shop</h1>
                    <p className='text-lg md:text-2xl font-bold mt-3 md:mt-8'>Give The Gift Of Your Children Everyday</p>
                    <button className='mt-7 md:mt-14  btn bg-red-500 hover:bg-red-600 border-none'>Shop This Now</button>
                </div>
                <div className='grow relative hidden md:block'>
                    <img src={children} alt="Image" className='w-[90%]'/>
                    <img src={rain} alt="shape" className='absolute bottom-[-25px] w-[70%]'/>
                </div>
            </div>
        </div>
    );
};

export default Banner;