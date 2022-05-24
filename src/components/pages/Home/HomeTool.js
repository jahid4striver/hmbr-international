import React from 'react';
import { Link } from 'react-router-dom';

const HomeTool = ({tool}) => {
    const {_id, img, name, description, minimum_qyt, available_qyt, price}=tool;
    return (
        <div class="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
            <figure className='w-10/12 mx-auto'><img src={img} alt="Shoes" /></figure>
            <div class="card-body">
            
                <div className='text-left bg-base-100 shadow-2xl text-gray py-2 px-4 absolute top-80 rounded-2xl right-px'>
                <h2 class="card-title text-accent">{name}</h2>
                <p>{description}</p>
                <p className='text-xl font-medium'>Price: ৳ {price} Per Unit</p>
                <p className='font-medium'>Minimum Order Quantity: {minimum_qyt} Pcs</p>
                </div>
                <h3 className='text-xl mt-4 font-bold'>Available Stock: {available_qyt} Pcs</h3>
                <div class="card-actions justify-center">
                    <Link class="btn btn-accent text-white w-full font-bold" to={`/purchase/${_id}`}>Place a Order</Link>
                </div>
            </div>
        </div>
    );
};

export default HomeTool;