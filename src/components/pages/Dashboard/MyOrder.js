import React from 'react';

const MyOrder = ({order, index}) => {
    const {date, name, qyt, }= order;
    return (
        <tr>
            <th>{index+1}</th>
            <th>{date}</th>
            <th>{name}</th>
            <th>{qyt}</th>
            <th>Price</th>
            <th>Amount</th>
            <th><button className='btn btn-sm btn-accent'>Pay</button></th>
            <th><button className='btn btn-sm btn-danger'>Cencel</button></th>
        </tr>
    );
};

export default MyOrder;