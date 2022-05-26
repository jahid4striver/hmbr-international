import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../shared/Loading';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe('pk_test_51L2ITWF2gM93aLaHCSf2MlzDRCW199moGnAndqvILc36H198PO1iTNzmebT5ttypjlJESLoo6y34TYvqH0mbVTOM00onLFnkQC');

const Payment = () => {
    console.log(stripePromise);

    const { id } = useParams();
    const url = `http://localhost:5000/orders/${id}`
    const { data: order, isLoading } = useQuery(['order'], () => fetch(url).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='container mx-auto'>
            <h2 className='text-2xl text-success text-center my-8 font-bold'>Make Payment For Your Order</h2>
            <div class="w-10/12 mx-auto card grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div class="card-body shadow-2xl bg-base-100 flex flex-col justify-center items-center">
                    <h2 class="card-title">Product Name: {order.name}</h2>
                    <p>Quantity: {order.qyt} Pcs</p>
                    <p>Unit Price: ${order.price}</p>
                    <p>Payable Amount: ${order.amount}</p>
                </div>
                <div class="card-body shadow-2xl bg-base-100 flex flex-col justify-center items-center">
                    <Elements stripe={stripePromise}>
                        <CheckOutForm order={order}/>
                    </Elements>
                </div>
            </div>
        </div>

    );
};

export default Payment;