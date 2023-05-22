import React, { useContext } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const CategoryCard = ({toy}) => {
    const {user} = useContext(AuthContext);

    const { _id, name, picture, price, rating } = toy;

    const handleToast = () => {
        if (!user){
            Swal.fire(
                'Log In?',
                'You have to log in first to view details!',
                'question'
            )
        }
    }

    return (
        <div className="card bg-base-100 shadow-xl rounded-none">
            <figure><img data-aos="flip-left" data-aos-easing="ease-out-cubic" src={picture} alt="Toy Image"  /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">{rating}</div>
                </h2>
                <div className="card-actions mt-3">
                    <div className="badge badge-outline text-red-500">${price}</div>
                    <button onClick={handleToast} className="badge border-red-500 bg-red-500 text-white "><Link to={`/toydetails/${_id}`} >Details <FaArrowRight className='inline text-[12px] ms-2' /> </Link></button>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;