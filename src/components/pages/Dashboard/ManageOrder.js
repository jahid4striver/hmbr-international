import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


const ManageOrder = ({order, index, setCancelOrder, refetch}) => {

    const {_id, date, name, qyt,price, amount, paymentId, customer, email, status }= order;
    

    const handleOrderStatus= ()=>{
        const payment={
            status: 'Shipped',
        }

        fetch(`https://salty-dawn-53601.herokuapp.com/manageorders/${_id}`,{
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(payment)
        })
        .then(res=>res.json())
        .then(data=>{
            toast('Order Shiffted')
            refetch();
            // const url=`https://salty-dawn-53601.herokuapp.com//toolsqytupdate/${_id}`
            // fetch(url,{
            //     method: 'PUT',
            //     headers:{
            //         'content-type': 'application/json'
            //     },
            //     body:{}
            // })
            // .then(res=>res.json())
            // .then(data=>{

            // })

        })
    };

    return (
        <>
        <tr className='text-center text-xs'>
            <th><small>{index+1}</small></th>
            <th><small>{date}</small></th>
            <th><small>{_id.slice(-10)}</small></th>
            <th><small>{customer}</small></th>
            <th><small>{email}</small></th>
            <th><small>{name}</small></th>
            <th><small>{qyt}</small></th>
            <th><small>{price}</small></th>
            <th><small>{amount}</small></th>
            <th>

                {status ? <button className='btn btn-xs btn-success'>{status}</button> : <button className='btn btn-xs btn-accent'>Not Paid</button>}
                
            </th>
            <th>{paymentId && status==="Pending" ? <button onClick={handleOrderStatus} className='btn btn-xs btn-warning text-white'>Ship Order</button> : status? <button className='btn btn-xs btn-success text-white'>Completed</button> :<label for="cancel-modal" onClick={()=>setCancelOrder(order)} className='btn btn-xs btn-danger'>Cencel Order</label>}

            </th>
        </tr>
        </>
    );
};

export default ManageOrder;