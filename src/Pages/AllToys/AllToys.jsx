import React, { useEffect, useState } from 'react';
import ToysRows from './ToysRows';

const AllToys = () => {
    const [toys, setToys] = useState([])
    useEffect(() => {
        fetch(" /public/toys.json")
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    console.log(toys);

    return (
        <div className="my-5">
            <table className="table w-[90%] mx-auto">
                {/* head */}
                <thead>
                    <tr>
                        <th>Toy Name</th>
                        <th>Seller</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        toys.map(toy => <ToysRows
                            key={toy._id}
                            toy={toy}
                        ></ToysRows>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllToys;