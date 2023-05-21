import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'


const ToyDetails = () => {
    const toy = useLoaderData()
    console.log(toy);
    const { picture, name, details, email, price, quantity, rating, sellerName, subCategory, _id } = toy;

    // rating style
    const CustomStar = (
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    )
    const myStyles = {
        itemShapes: CustomStar,
        itemStrokeWidth: 0,
        activeFillColor: '#F6A034',
        activeStrokeColor: '#99F6E4',
        inactiveFillColor: '#69665F',
        inactiveStrokeColor: 'LightSeaGreen'
    }

    return (
        <div className='w-[90%] mx-auto my-8'>
            <div className="flex border">
                <div className="basis-[45%] p-6">
                    <img src={picture} alt='Toy Picture' className='w-full h-full' />
                </div>
                <div className="basis-[55%] bg-red-50 p-7 ps-14">
                    <h3 className='font-bold text-[28px]'>{name}</h3>
                    <h1 className='font-extrabold text-[32px] text-red-500'>${price}</h1>

                    <div className='my-8 flex gap-9'>
                        <Rating
                            style={{ maxWidth: 100 }}
                            value={Math.round(rating)}
                            itemStyles={myStyles}
                            readOnly
                        />
                        <p className='font-bold'>Quantity: <span className='text-red-500'> {quantity}</span></p>
                    </div>

                    <div className='bg-white py-4 flex md:px-5 divide-x-2 divide-slate-600'>
                        <span className='grow hover:text-red-500 font-medium'>{sellerName}</span>
                        <span className='grow text-center hover:text-red-500 font-medium' >{email}</span>
                    </div>
                    <p className='my-10'>{details} Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quibusdam debitis aut tempore at, nisi ratione asperiores quis perspiciatis nihil nam? Sequi vitae, dolor cum ut mollitia commodi libero fuga.</p>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;