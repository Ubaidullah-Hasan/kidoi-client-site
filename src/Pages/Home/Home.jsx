import React from 'react';
import Banner from './Banner';
import { useLoaderData } from 'react-router-dom';
import Gallery from './Gallery';

const Home = () => {
    const toys = useLoaderData();


    return (
        <div>
            <Banner></Banner>
            <div className=' bg-slate-100 py-14'>
                <div className='md:mb-10'>
                    <h1 className='font-bold text-4xl text-slate-800 text-center '>Latest Product Gallery</h1>
                    <hr className='border-2	border-red-500 w-[100px] mx-auto rounded-full mt-4' />
                </div>
                <div className="grid grid-cols-8 w-[90%] mx-auto gap-2">
                    {
                        toys.slice(0,16).map(toy => <Gallery
                            key={toy._id}
                            toy={toy}
                        ></Gallery>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;