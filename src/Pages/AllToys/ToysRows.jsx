import React from 'react';
import { Link } from 'react-router-dom';

const ToysRows = ({toy}) => {
    const { picture, name, subCategory, sellerName, price, quantity } = toy;
    return (
        <>
            {/* row 1 */}
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
                <td>
                    {quantity}
                </td>
                <th>
                    <button className="btn bg-red-600 hover:bg-red-500 border-0 btn-xs rounded-full"><Link to="/toydetails">details</Link></button>
                </th>
            </tr>
        </>
    );
};

export default ToysRows;