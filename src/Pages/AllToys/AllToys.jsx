import React, { useEffect, useState } from 'react';
import ToysRows from './ToysRows';

const AllToys = () => {
    const [load, setLoad] = useState(true);
    const [toys, setToys] = useState([]);
    const [limit, setLimit] = useState(20);
    const [search, setSearch] = useState("");
    useEffect(() => {
        fetch(`https://kidoi-server.vercel.app/toys?limit=${limit}&search=${search}`)
            .then(res => res.json())
            .then(data => {
                setToys(data);
                setLoad(false)
            })
    }, [limit, search]);


    // total product count 
    const [totaltoy, setTotaltoy] = useState(0);
    useEffect(() => {
        fetch("https://kidoi-server.vercel.app/totalToys")
            .then(res => res.json())
            .then(data => {
                setTotaltoy((data.totalToy))
            })
    }, []);

    const [hidden, setHidden] = useState(true);
    const loadProduct = () => {
        setLimit(limit + 20);
        if (limit >= totaltoy) {
            setHidden(false);
        }
    }

    if (load) {
        return <div className='flex justify-center h-[50vh] items-center'>
            <progress className="progress w-56 progress-accent"></progress>
        </div>
    }

    // search field
    const handleSearchSubmit = (event) => {
        event.preventDefault();
        const searchValue = event.target.search.value;
        setSearch(searchValue);
    };
    console.log(search)

    return (
        <div className="my-5 table w-[90%] mx-auto">
            <div className='bg-slate-800 py-4 mb-5 rounded-full '>
                <form onSubmit={handleSearchSubmit} className='text-center'>
                    <input className='rounded-full px-5 py-2' type="text" name='search' placeholder="Search by Toy Name" />
                    <button className='rounded-full bg-red-500 hover:bg-red-700 py-2 text-white px-5 ms-4' type="submit">Search</button>
                </form>
            </div>
            <table className='w-full'>
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
            {
                hidden && <div className='text-center mt-6'>
                    <button onClick={loadProduct} className='btn bg-red-500 hover:bg-red-600 border-0 px-8'>Load More</button>
                </div>
            }

        </div>
    );
};

export default AllToys;