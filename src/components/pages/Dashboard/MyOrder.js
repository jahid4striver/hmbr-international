import React from 'react';
import { Link } from 'react-router-dom';


const MyOrder = ({order, index, setCancelOrder}) => {
    const {_id, date, name, qyt,price, amount,paid, paymentId, status }= order;
    return (
        <>
        <tr className='text-center'>
            <th>{index+1}</th>
            <th>{date}</th>
            <th>{name}</th>
            <th>{qyt}</th>
            <th>{price}</th>
            <th>{amount}</th>
            <th>{paid? <button className='btn btn-sm btn-success'>Paid</button> : <button className='btn btn-sm btn-accent'><Link to={`/dashboard/payment/${_id}`}>Pay</Link></button>}</th>
            <th>{status ? <p className='bg-info text-white p-2'>{status}</p> : <p className='bg-error text-white p-2'>Not Paid</p>}</th>
            <th>{paymentId? <p><small className='text-green-500'>Payment Id: <input value={paymentId} type="text" /></small></p> :<label for="cancel-modal" onClick={()=>setCancelOrder(order)} className='btn btn-sm btn-danger'>Cencel Order</label>}</th>
        </tr>
        </>
    );
};

export default MyOrder;