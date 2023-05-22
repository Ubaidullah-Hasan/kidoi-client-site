import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../../CustomHooks/useTitle';

const AddToy = () => {
    useTitle("Add toy")
    const {user} = useContext(AuthContext);

    const handleAddProduct = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.pName.value;
        const sellerName = form.sName.value;
        const subCategory = form.category.value;
        const email = form.email.value;
        const price = parseInt(form.price.value);
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const picture = form.picture.value;
        const details = form.textarea.value;

        const addToy = { name, sellerName, subCategory, email, price, rating, quantity, picture, details }

        fetch("https://kidoi-server.vercel.app/toys", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(addToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire(
                        'Good job!',
                        'You added a product!',
                        'success'
                    )
                }
            })

    }

    return (
        <div className='w-[90%] mx-auto'>
            <form onSubmit={handleAddProduct} className=" bg-base-200 px-[97px] py-[60px] rounded-md space-y-6 my-[90px]">
                <h1 className='mb-12 font-bold text-5xl text-slate-800 text-center '>Add Product!</h1>
                {/* row 1 */}
                <div className='flex justify-between gap-6'>
                    <div className="form-control w-full">
                        <input type="text" placeholder="Product Name" name="pName" className="input focus:outline-none" />
                    </div>
                    <div className="form-control w-full">
                        <input type="text" placeholder="Shop Name" name='sName' className="input focus:outline-none" />
                    </div>
                </div>
                {/* row 2 */}
                <div className='flex justify-between gap-6'>
                    <div className="form-control w-full">
                        <input type="email" name='email' defaultValue={user.email} readOnly placeholder="Your Email" className="input focus:outline-none" />
                    </div>
                    <div className="form-control w-full">
                        <input type="text" name='category' placeholder="Category" className="input focus:outline-none" />
                    </div>
                </div>
                {/* row 3 */}
                <div className='flex justify-between gap-6'>
                    <div className="form-control w-full">
                        <input type="text" name='price' placeholder="Price" className="input focus:outline-none" />
                    </div>
                    <div className="form-control w-full">
                        <input type="text" name='rating' placeholder="Rating" className="input focus:outline-none" />
                    </div>
                </div>
                {/* row 4 */}
                <div className='flex justify-between gap-6'>
                    <div className="form-control w-full">
                        <input type="text" name='quantity' placeholder="Quantity" className="input focus:outline-none" />
                    </div>
                    <div className="form-control w-full">
                        <input type="text" name='picture' placeholder="Picture URL" className="input focus:outline-none" />
                    </div>
                </div>
                {/* row 5 */}
                <div className="form-control">
                    <textarea name='textarea' className="textarea resize-none h-[180px] focus:outline-none" placeholder="Product Description"></textarea>
                </div>

                <div className="form-control mt-6">
                    <button className="btn bg-red-500 hover:bg-red-600 border-none" >Add Product</button>
                </div>
            </form>
        </div>
    );
};

export default AddToy;