import React from 'react';
import MyToyRow from './MyToyRow';
import { useLoaderData } from 'react-router-dom';

const MyToys = () => {
    const toys = useLoaderData()
    // console.log(toys)

    return (
        <div className="my-5 table w-[90%] mx-auto">
            <table className='w-full'>
                {/* head */}
                <thead>
                    <tr>
                        <th>Toy Name</th>
                        <th>Seller</th>
                        <th>Price</th>
                        <th>Delete</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        toys.map(toy => <MyToyRow
                            key={toy._id}
                            toy={toy}
                        ></MyToyRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyToys;