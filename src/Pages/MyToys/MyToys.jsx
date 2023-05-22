import React, { useContext, useEffect, useState } from 'react';
import MyToyRow from './MyToyRow';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import useTitle from '../../CustomHooks/useTitle';

const MyToys = () => {
    useTitle("My toys")
    const { user } = useContext(AuthContext)

    const [myToys, setMyToys] = useState([]);

    useEffect(() => {
        fetch(`https://kidoi-server.vercel.app/toysUser?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [user.email])

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't delete this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://kidoi-server.vercel.app/toys/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            const remaining = myToys.filter(toy => toy._id !== id)
                            setMyToys(remaining)
                            Swal.fire(
                                'Good job!',
                                'You delete the product!',
                                'success'
                            )
                        }

                    })
            }
        })
    }


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
                        myToys.map(toy => <MyToyRow
                            key={toy._id}
                            toy={toy}
                            handleDelete={handleDelete}
                        ></MyToyRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyToys;