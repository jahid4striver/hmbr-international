import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import Loading from '../../shared/Loading';
import CancelModal from './CancelModal';
import MyOrder from './MyOrder';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [cancelOrder, setCancelOrder]= useState(null);
    // const email= user?.email;

    const { data: myOrders, isLoading, refetch } = useQuery(['orders', user.email], () => fetch(`http://localhost:5000/orders?email=${user.email}`).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h2 className='text-2xl text-center text-accent border-b-4 border-accent inline-block mt-8'>My Orders</h2>
            <div class="overflow-x-auto">
                <table class="table table-zebra w-11/12 my-8 mx-auto shadow-lg">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Order Date</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Shiping Status</th>
                            <th>Action And Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            myOrders.map((order, index)=><MyOrder
                            key={order._id}
                            order={order}
                            index={index}
                            setCancelOrder={setCancelOrder}
                            />)
                        }

                    </tbody>
                </table>
            </div>
            <CancelModal refetch={refetch} cancelOrder={cancelOrder}></CancelModal>
        </div>
    );
};

export default MyOrders;