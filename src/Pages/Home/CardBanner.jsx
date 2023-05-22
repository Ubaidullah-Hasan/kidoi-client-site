import React from 'react';
import banner1 from "../../assets/cardbanner/1.webp"
import banner2 from "../../assets/cardbanner/2.webp"
import banner3 from "../../assets/cardbanner/3.webp"
import { Link } from 'react-router-dom';

const CardBanner = () => {
    return (
        <div className=' md:w-[90%] mx-auto my-7 md:my-14'>
            <div className='flex md:flex-row flex-col gap-x-5 gap-y-1 justify-between'>
                <div className='bg-red-200 hover:bg-slate-200 p-6 flex justify-between md:h-[260px]' data-aos="fade-up">
                    <div className='grow'>
                        <h4 className='font-extrabold text-2xl md:text-4xl'>Baby Dress</h4>
                        <p className='font-extrabold text-lg md:text-3xl mt-2 md:mt-4'>$56</p>
                        <p className='mt-[50px]'><Link to="/alltoys" className='font-extrabold text-md md:text-lg hover:text-red-500 uppercase'>Shop Now</Link></p>
                    </div>
                    <div className='w-[50%] flex items-center'>
                        <img src={banner1} className='w-full'/>
                    </div>
                </div>
                <div className='bg-red-200 hover:bg-slate-200 p-6 flex justify-between md:h-[260px]' data-aos="flip-up" data-aos-easing="linear"
                    data-aos-duration="1000">
                    <div className='grow'>
                        <h4 className='font-extrabold text-2xl md:text-4xl'>Baby Toys</h4>
                        <p className='font-extrabold text-lg md:text-3xl mt-2 md:mt-4'>$120</p>
                        <p className='mt-[50px]'><Link to="/alltoys" className='font-extrabold text-md md:text-lg hover:text-red-500 uppercase'>Shop Now</Link></p>
                    </div>
                    <div className='w-[50%] flex items-center'>
                        <img src={banner2} className='w-full'/>
                    </div>
                </div>
                <div className='bg-red-200 hover:bg-slate-200 p-6 flex justify-between md:h-[260px]' data-aos="fade-down-left">
                    <div className='grow'>
                        <h4 className='font-extrabold text-2xl md:text-4xl'>Teddy Bear</h4>
                        <p className='font-extrabold text-lg md:text-3xl mt-2 md:mt-4'>$56</p>
                        <p className='mt-[50px]'><Link to="/alltoys" className='font-extrabold text-md md:text-lg hover:text-red-500 uppercase'>Shop Now</Link></p>
                    </div>
                    <div className='w-[50%] flex items-center'>
                        <img src={banner3} className='w-full'/>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default CardBanner;