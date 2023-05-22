import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyToyRow = ({ toy, handleDelete }) => {
    const { picture, name, subCategory, sellerName, price, _id } = toy;

    // const handleDelete = (id) => {
    //     Swal.fire({
    //         title: 'Are you sure?',
    //         text: "You won't delete this!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, delete it!'
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             fetch(`https://kidoi-server.vercel.app/toys/${id}`, {
    //                 method: "DELETE",
    //             })
    //                 .then(res => res.json())
    //                 .then(data => {
    //                     if (data.deletedCount) {
    //                         console.log(data)
    //                         Swal.fire(
    //                             'Good job!',
    //                             'You delete the product!',
    //                             'success'
    //                         )
    //                     }

    //                 })
    //         }
    //     })
    // }

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={picture} alt="Toy Image" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <span className="badge badge-ghost badge-sm">{subCategory}</span>
                    </div>
                </div>
            </td>
            <td>
                <span className="uppercase text-sm badge badge-ghost py-3 px-4">{sellerName}</span>
            </td>
            <td className='text-red-500'>{price}$</td>
            <th>
                <button onClick={() => handleDelete(_id)} ><Link className="btn bg-red-500 hover:bg-red-600 border-0 btn-xs rounded-full" >Delete</Link></button>
            </th>
            <th>
                <button ><Link className="btn bg-green-500 hover:bg-green-600 border-0 btn-xs rounded-full" to={`/update/${_id}`}>Update</Link></button>
            </th>
        </tr>
    );
};

export default MyToyRow;