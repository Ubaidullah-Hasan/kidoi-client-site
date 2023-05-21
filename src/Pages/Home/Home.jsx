import React from 'react';
import Banner from './Banner';
import { useLoaderData } from 'react-router-dom';
import Gallery from './Gallery';
import ShopByCategory from './ShopByCategory';

const Home = () => {
    const toys = useLoaderData();


    return (
        <div>
            <Banner></Banner>

            {/* **************** Gallery section ***************** */}
            <div className=' bg-slate-200 py-10 md:py-14'>
                <div className='mb-7 md:mb-10'>
                    <h1 className='font-bold text-xl md:text-4xl text-slate-800 text-center '>Latest Product Gallery</h1>
                    <hr className='border-2	border-red-500 w-[100px] mx-auto rounded-full mt-2 md:mt-4' />
                </div>
                <div className="grid grid-cols-4 md:grid-cols-4 w-[90%] mx-auto gap-3 md:gap-6">
                    {
                        toys.slice(0, 8).map(toy => <Gallery
                            key={toy._id}
                            toy={toy}
                        ></Gallery>)
                    }
                </div>
            </div>
            {/* **************** Gallery section end ***************** */}

            <ShopByCategory></ShopByCategory>

        </div>
    );
};

export default Home;