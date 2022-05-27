import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const AddProduct = () => {
    const [user] = useAuthState(auth);


    const imgAPIKey = '73788e34c0735f097d12ee5f939e4838'

    const handleAddProduct = (e) => {
        e.preventDefault();


        const name = e.target.name.value;
        const price = e.target.price.value;
        const description = e.target.description.value;
        const minimum_qyt = e.target.minimum_qyt.value;
        const available_qyt = e.target.available_qyt.value;

        const image = e.target.img.files[0];
        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${imgAPIKey}`
        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    const img = data.data.url;
                    console.log(img);
                    const tool = { name, price, description, minimum_qyt, available_qyt, img };

                    fetch('http://localhost:5000/tools',{
                        method: 'POST', 
                        headers:{
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(tool)
                    })
                    .then(res=> res.json())
                    .then(data=> {
                        toast('Product Added Successfull')
                    })

                    
                }
            })


        
        // const img = image || e.target.img2.value;




        // fetch(`http://localhost:5000/users/${user.email}`, {
        //     method: 'PUT',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(userDetails)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //     })
    }
    return (
        <div className='grid  grid-cols-1 lg:grid-cols-2 md:grid-cols-1 justify-items-center gap-5 mt-4'>
            <div className='shadow-2xl p-12 bg-base-100 text-center w-11/12'>
                <h2 className='text-2xl text-center text-accent font-bold border-b-3 border-accent inline-block mb-2'>Add A Product</h2>
                <form onSubmit={handleAddProduct} className='flex flex-col justify-center items-center'>
                    <div className='form-control w-10/12'>
                        <label class="label">
                            <span class="label-text">Product Name</span>
                        </label>
                        <input name='name' placeholder='Enter Product Name' required type="text" class="input input-bordered mb-3" />
                    </div>
                    <div className='form-control w-10/12'>
                        <label class="label">
                            <span class="label-text">Product Price</span>
                        </label>
                        <input name='price' placeholder='Enter Product Price' required type="number" class="input input-bordered mb-3" />
                    </div>
                    <div className='form-control w-10/12'>
                        <label class="label">
                            <span class="label-text">Product Details</span>
                        </label>
                        <input name='description' placeholder='Product Details' required type="text" class="input input-bordered mb-3" />
                    </div>
                    <div className='form-control w-10/12'>
                        <label class="label">
                            <span class="label-text">Minimum Order Quantity</span>
                        </label>
                        <input name='minimum_qyt' placeholder='Enter Minimum Order Quantity' required type="number" class="input input-bordered mb-3" />
                    </div>
                    <div className='form-control w-10/12'>
                        <label class="label">
                            <span class="label-text">Opening Quantity</span>
                        </label>
                        <input name='available_qyt' placeholder='Enter Opening Quantity' required type="number" class="input input-bordered mb-3" />
                    </div>
                    <label className='mb-2 text-left' htmlFor="name">Upload Product Image</label>
                    <input name='img' type="file" class="input input-bordered mb-3 w-10/12" />
                    <button type='submit' className='btn btn-accent w-full text-white font-bold mt-4'>Add Product</button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;