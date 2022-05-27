import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import Loading from '../../shared/Loading';
import CancelModal from './CancelModal';
import ManageOrder from './ManageOrder';
import MyOrder from './MyOrder';

const ManageOrders = () => {
    const [user] = useAuthState(auth);
    const [cancelOrder, setCancelOrder]= useState(null);
    // const email= user?.email;

    const { data: allOrders, isLoading, refetch } = useQuery(['allorders'], () => fetch('https://salty-dawn-53601.herokuapp.com/allorders').then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h2 className='text-2xl text-center text-accent border-b-4 border-accent inline-block mt-8'>Manage All Orders</h2>
            <div class="overflow-x-auto">
                <table class="table table-zebra text-center w-11/12 my-8 mx-auto shadow-lg">
                    <thead>
                        <tr>
                            <th><small>SL</small></th>
                            <th><small>Order Date</small></th>
                            <th><small>Order Id</small></th>
                            <th><small>Customer Name</small></th>
                            <th><small>Customer Email</small></th>
                            <th><small>Product Name</small></th>
                            <th><small>Quantity</small></th>
                            <th><small>Price</small></th>
                            <th><small>Amount</small></th>
                            <th><small>Status</small></th>
                            <th><small>Action</small></th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            allOrders.map((order, index)=><ManageOrder
                            key={order._id}
                            order={order}
                            index={index}
                            setCancelOrder={setCancelOrder}
                            refetch={refetch}
                            />)
                        }

                    </tbody>
                </table>
            </div>
            <CancelModal refetch={refetch} cancelOrder={cancelOrder}></CancelModal>
        </div>
    );
};

export default ManageOrders;