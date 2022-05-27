import React from 'react';
import { toast } from 'react-toastify';

const EditProductModal = ({ editProduct, refetch }) => {

    // const { _id } = editProduct;
    const imgAPIKey = '73788e34c0735f097d12ee5f939e4838'

    const handleUpdateProduct = (e) => {
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
                if(data.success){
                    const img = data.data.url;
                console.log(img);

                const tool = { name, price, description, minimum_qyt, available_qyt, img };

                const url = `http://localhost:5000/tools/`

                fetch(url, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(tool)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        toast('Product Added Successfull')
                    })


                }

            })
    }
    return (
        <div>
            <input type="checkbox" id="edit-product-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <div class="modal-action">
                        <div className='grid grid-cols-1 justify-items-center mt-4 mx-auto'>
                            <div className='shadow-2xl p-12 bg-base-100 text-center'>
                                <h2 className='text-2xl text-center text-accent font-bold border-b-3 border-accent inline-block mb-2'>Update Product</h2>
                                <label for="edit-product-modal" class="btn btn-xs ml-4">Close</label>
                                <span></span>
                                <form onSubmit={handleUpdateProduct} className='flex flex-col justify-center items-center'>
                                    <div className='form-control w-10/12'>
                                        <label class="label">
                                            <span class="label-text">Product Name</span>
                                        </label>
                                        <input name='name' defaultValue={editProduct?.name} required type="text" class="input input-bordered mb-3" />
                                    </div>
                                    <div className='form-control w-10/12'>
                                        <label class="label">
                                            <span class="label-text">Product Price</span>
                                        </label>
                                        <input name='price' defaultValue={editProduct?.price} required type="number" class="input input-bordered mb-3" />
                                    </div>
                                    <div className='form-control w-10/12'>
                                        <label class="label">
                                            <span class="label-text">Product Details</span>
                                        </label>
                                        <input name='description' defaultValue={editProduct?.description} required type="text" class="input input-bordered mb-3" />
                                    </div>
                                    <div className='form-control w-10/12'>
                                        <label class="label">
                                            <span class="label-text">Minimum Order Quantity</span>
                                        </label>
                                        <input name='minimum_qyt' defaultValue={editProduct?.minimum_qyt} required type="number" class="input input-bordered mb-3" />
                                    </div>
                                    <div className='form-control w-10/12'>
                                        <label class="label">
                                            <span class="label-text">Current Stock Quantity</span>
                                        </label>
                                        <input name='available_qyt' defaultValue={editProduct?.available_qyt} required type="number" class="input input-bordered mb-3" />
                                    </div>
                                    <label className='mb-2 text-left' htmlFor="name">Upload Product Image</label>
                                    <input name='img' type="file" class="input input-bordered mb-3 w-10/12" />
                                    <label type='submit' className='btn btn-accent w-full text-white font-bold mt-4'>Update Product</label>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProductModal;