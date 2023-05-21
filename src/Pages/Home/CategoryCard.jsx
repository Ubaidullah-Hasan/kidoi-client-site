import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CategoryCard = ({toy}) => {

    const { _id, name, picture, price, rating } = toy;

    return (
        <div className="card bg-base-100 shadow-xl rounded-none">
            <figure><img src={picture} alt="Toy Image" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">{rating}</div>
                </h2>
                <div className="card-actions mt-3">
                    <div className="badge badge-outline text-red-500">${price}</div>
                    <button className="badge border-red-500 bg-red-500 text-white "><Link to={`/toydetails/${_id}`} >Details <FaArrowRight className='inline text-[12px] ms-2' /> </Link></button>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;