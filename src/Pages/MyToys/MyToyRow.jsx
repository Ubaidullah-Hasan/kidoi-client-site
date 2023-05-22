import React from 'react';
import { Link } from 'react-router-dom';

const MyToyRow = ({ toy, handleDelete }) => {
    const { picture, name, subCategory, sellerName, price, _id } = toy;

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