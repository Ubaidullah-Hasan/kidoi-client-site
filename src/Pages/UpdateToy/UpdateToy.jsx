import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateToy = () => {

    const toy = useLoaderData()
    console.log(toy)
    const { details, price, quantity, _id } = toy


    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.textarea.value;

        const update = { price, quantity, description };

        fetch(`https://kidoi-server.vercel.app/toys/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    Swal.fire(
                        'Good job!',
                        'You update the product!',
                        'success'
                    )
                }

            })


    }

    return (
        <div className='w-[90%] mx-auto'>
            <form onSubmit={handleUpdate} className=" bg-base-200 px-[97px] py-[60px] rounded-md space-y-6 my-[90px]">
                <h1 className='mb-12 font-bold text-5xl text-slate-800 text-center '>Update Product!</h1>

                {/* row 3 */}
                <div className='flex justify-between gap-6'>
                    <div className="form-control w-full">
                        <input type="text" name='price' defaultValue={`${price}`} placeholder="Price" className="input focus:outline-none" />
                    </div>

                    <div className="form-control w-full">
                        <input type="text" name='quantity' defaultValue={quantity} placeholder="Quantity" className="input focus:outline-none" />
                    </div>
                </div>
                {/* row 5 */}
                <div className="form-control">
                    <textarea name='textarea' defaultValue={details} className="textarea resize-none h-[180px] focus:outline-none" placeholder="Product Description"></textarea>
                </div>

                <div className="form-control mt-6">
                    <button className="btn bg-green-600 hover:bg-green-700 border-none" >Update Product</button>
                </div>
            </form >
        </div >
    );
};

export default UpdateToy;