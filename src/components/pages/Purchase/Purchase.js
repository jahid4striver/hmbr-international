import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../shared/Loading';

const Purchase = () => {
    const [user] = useAuthState(auth);
    const { id } = useParams();
    const [tool, setTool] = useState([]);
    const [minQty, setMinQty] = useState('');

    useEffect(() => {
        fetch(`http://localhost:5000/tools/${id}`)
            .then(res => res.json())
            .then(data => setTool(data))
    }, [minQty])

    const handleOrderSubmit=()=>{

    }

    const handleQyt = (e) => {
        const quantity = e.target.value;
        if (quantity < tool.minimum_qyt) {
            setMinQty(`Minimum Order Quantity Is ${tool.minimum_qyt}`);
        } if (quantity > tool.available_qyt) {
            setMinQty('You Can Not Order More Than Stock');
        } if (quantity > tool.minimum_qyt && quantity < tool.available_qyt) {
            setMinQty('')
        }
    }

    // if(isLoading){
    //     return <Loading></Loading>
    // }
    return (
        <div className='container lg:container mx-auto my-16'>
            <h2 className='text-center text-3xl text-accent my-8'>Place The Order For {tool.name} </h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-5'>

                <div class="card card-compact w-10/12 bg-base-100 shadow-xl mx-auto">
                    <figure><img src={tool.img} alt="tool" /></figure>
                    <div class="card-body">

                        <div className='text-left bg-base-100 py-2 px-4'>
                            <h2 class="card-title text-accent">Name: {tool.name}</h2>
                            <p>Description: {tool.description}</p>
                            <p className='text-xl font-medium'>Price: ${tool.price} Per Unit</p>
                            <p className='font-medium'>Minimum Order Quantity: {tool.minimum_qyt} Pcs</p>
                        </div>
                        <h3 className='text-xl mt-4 font-bold'>Available Stock: {tool.available_qyt} Pcs</h3>
                    </div>
                </div>
                <div className='card card-compact w-10/12 bg-base-100 shadow-xl mx-auto p-8'>
                    <h2 className='text-2xl text-center font-bold my-8'>Purchase Order Form</h2>
                    <form className='flex flex-col'>
                        <label class="label">
                            <span class="label-text">Date</span>
                        </label>
                        <input type="date" placeholder="Type here" class="input input-bordered w-full" required/>
                        <label class="label">
                            <span class="label-text">Product Name</span>
                        </label>
                        <input type="text" value={tool.name} disabled class="input input-bordered w-full" />
                        <label class="label">
                            <span class="label-text">Quantity</span>
                        </label>
                        <input name='qyt' onChange={handleQyt} type="number" defaultValue={tool.minimum_qyt} class="input input-bordered w-full" />
                        <label class="label">
                            <span class="label-text-alt text-red-500">{minQty}</span>
                        </label>
                        <label class="label">
                            <span class="label-text">Customer Name</span>
                        </label>
                        <input type="text" value={user?.displayName} disabled class="input input-bordered w-full" />
                        <label class="label">
                            <span class="label-text">Customer Email</span>
                        </label>
                        <input type="text" value={user?.email} disabled class="input input-bordered w-full" />
                        <label class="label">
                            <span class="label-text">Address</span>
                        </label>
                        <input type="text" placeholder="Type Your Address" required class="input input-bordered w-full" />
                        <label class="label">
                            <span class="label-text">Phone No</span>
                        </label>
                        <input type="text" placeholder="Type Your Phone No" required class="input input-bordered w-full" />
                        <input type="submit" disabled={minQty} value='Submit Order' class="btn btn-accent text-white font-bold input input-bordered w-full mt-5" />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;