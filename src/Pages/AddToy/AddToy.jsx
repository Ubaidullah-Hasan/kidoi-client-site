import React from 'react';

const AddToy = () => {

    const handleAddProduct = (event) => {
        event.preventDefault();
        const form = event.target;
        const pName = form.pName.value;
        const sName = form.sName.value;
        const category = form.category.value;
        const email = form.email.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const picture = form.picture.value;
        const description = form.textarea.value;

        console.log(pName, sName, category, email, price, rating, quantity, picture, description)

        // const order = { fName, date, phone, email, message, img, title, price, };
        // fetch("https://car-doctor-server-ubaidullah-hasan.vercel.app/bookings", {
        //     method: "POST",
        //     headers: {
        //         "content-type": "application/json"
        //     },
        //     body: JSON.stringify(order)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         if (data.insertedId) {
        //             alert("Chackout complete");
        //         }
        //     })
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
                        <input type="email" name='email' placeholder="Your Email" className="input focus:outline-none" />
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