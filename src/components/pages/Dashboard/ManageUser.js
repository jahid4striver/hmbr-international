import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import profile from '../../../assets/images/images/profile.png'


const MyOrder = ({user, index, setDeleteUser, refetch}) => {
    const {_id, displayName, email,role, photoURL }= user;

    const handleMakeAdmin=()=>{
        const url=`http://localhost:5000/users/${email}`;

        fetch(url, {
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({role:'admin'})
        })
        .then(res=> res.json())
        .then(data=> {
            refetch();
            toast('Make Admin Successfull')
            console.log(data);
        })
    }

    return (
        <>
        <tr className='text-center'>
            <th>{index+1}</th>
            <th><img className='w-16' src={photoURL || profile} alt="" /></th>
            <th>{_id.slice(-10)}</th>
            <th>{displayName}</th>
            <th>{email}</th>
            <th>{role? <button className='btn btn-sm btn-warning'>{role}</button> : <button className='btn btn-sm btn-primary'>User</button> } </th>
            <th><button onClick={handleMakeAdmin} className='btn btn-sm btn-success'>Make Admin</button></th>
            <th><label for="delete-user-modal" onClick={()=>setDeleteUser(user)} className='btn btn-sm btn-error'>Delete</label></th>
        </tr>
        </>
    );
};

export default MyOrder;