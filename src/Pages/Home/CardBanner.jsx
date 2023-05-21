import React from 'react';
import banner1 from "../../assets/cardbanner/1.webp"
import banner2 from "../../assets/cardbanner/2.webp"
import banner3 from "../../assets/cardbanner/3.webp"

const CardBanner = () => {
    return (
        <div className=' md:w-[90%] mx-auto my-7 md:my-14'>
            <div className='flex md:flex-row flex-col gap-5'>
                <div className='bg-red-200 p-6 flex justify-between'>
                    <div>
                        <h4 className='font-extrabold text-2x md:text-4xl'>Baby Dress</h4>
                        <p className='font-extrabold text-lg md:text-3xl'>$56</p>
                        <p className='font-extrabold text-lg md:text-xl mt-[50px]'>Shop Now</p>
                    </div>
                    <img src={banner1} />
                </div>
                <div className='bg-red-200 p-6 flex justify-between'>
                    <div>
                        <h4 className='font-extrabold text-2x md:text-4xl'>Baby Toys</h4>
                        <p className='font-extrabold text-lg md:text-3xl'>$56</p>
                        <p className='font-extrabold text-lg md:text-xl mt-[50px]'>Shop Now</p>
                    </div>
                    <img src={banner2} />
                </div>
                <div className='bg-red-200 p-6 flex justify-between'>
                    <div>
                        <h4 className='font-extrabold text-2x md:text-4xl'>Teddy Bear</h4>
                        <p className='font-extrabold text-lg md:text-3xl'>$56</p>
                        <p className='font-extrabold text-lg md:text-xl mt-[50px]'>Shop Now</p>
                    </div>
                    <img src={banner3} />
                </div>
            </div>
            
        </div>
    );
};

export default CardBanner;