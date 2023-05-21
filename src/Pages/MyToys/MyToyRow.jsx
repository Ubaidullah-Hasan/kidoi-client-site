import React, { useEffect, useState } from 'react';
import Row from './Row';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyToyRow = ({ toy }) => {
    const { email } = toy;

    const [myToys, setMyToys] = useState([]);

    useEffect(() => {
        fetch(`https://kidoi-server.vercel.app/toysUser?email=${email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [])
    console.log(myToys)

    const handleDelete = (id) => {
        console.log(id)
        fetch(`https://kidoi-server.vercel.app/toys/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    Swal.fire(
                        'Good job!',
                        'You delete the product!',
                        'success'
                    )
                }
            })
    }

    return (
        <div>
            {
                myToys.map(ty => <>
                    <tr >
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={ty?.picture} alt="Toy Image" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">{ty?.name}</div>
                                    <span className="badge badge-ghost badge-sm">{ty?.subCategory}</span>
                                </div>
                            </div>
                        </td>
                        <td>
                            <span className="uppercase text-sm badge badge-ghost py-3 px-4">{ty?.sellerName}</span>
                        </td>
                        <td className='text-red-500'>{ty?.price}$</td>
                        <th>
                            <button onClick={() => handleDelete(ty._id)} ><Link className="btn bg-red-500 hover:bg-red-600 border-0 btn-xs rounded-full" >Delete</Link></button>
                        </th>
                        <th>
                            <button ><Link className="btn bg-green-500 hover:bg-green-600 border-0 btn-xs rounded-full" to={`/update/${ty?._id}`}>Update</Link></button>
                        </th>
                    </tr>
                </>)
            }
        </div>
    );
};

export default MyToyRow;