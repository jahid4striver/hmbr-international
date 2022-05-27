import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../shared/Loading';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const [currentUser, setCurrentUser]= useState('');
    const [isActive, setIsActive]= useState(false);

    const email=user.email;

 const url= `https://salty-dawn-53601.herokuapp.com/users?email=${email}`

    useEffect(()=>{
            fetch(url)
        .then(res=> res.json())
        .then(data=> {
            setCurrentUser(data)
            console.log(data);
        })
        
    },[url, isActive])
    
    const addUserToDatabase=()=>{

        const userDetails={
            displayName:user.displayName,
            email: user.email,
            active: true,
        }
        console.log(userDetails);

        fetch('https://salty-dawn-53601.herokuapp.com/users',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(userDetails)
        })
        .then(res=> res.json())
        .then(data=>{
            setIsActive(true);
        })

    }


    return (
        <div>

            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 justify-items-center gap-5 mt-4'>
                <div className='shadow-2xl p-12 bg-base-100 text-center w-11/12'>
                    
                    <h2 className='text-2xl text-center text-accent font-bold border-b-3 border-accent inline-block mb-2'>My Profile</h2>
                    {
                        currentUser?.active?'':<button onClick={addUserToDatabase} className='btn btn-xs ml-2 btn-accent mt-4 text-white font-bold'>Active Profile</button>
                    }
                    <img className='rounded mx-auto' src={user?.photoURL} alt="" />
                    <h3 className='text-xl text-left border border-1 border-accent p-2 mt-4 mb-2'>Name: {user?.displayName || currentUser?.displayName}</h3>
                    <h3 className='text-xl text-left border border-1 border-accent p-2 mb-2'>Email: {user?.email || currentUser?.email}</h3>
                    <h3 className='text-xl text-left border border-1 border-accent p-2 mb-2'>Education: {currentUser?.education}</h3>
                    <h3 className='text-xl text-left border border-1 border-accent p-2 mb-2'>Address: {currentUser?.personalAddress}</h3>
                    <h3 className='text-xl text-left border border-1 border-accent p-2 mb-2'>Phone No: {currentUser?.personalPhone}</h3>
                    <h3 className='text-xl text-left border border-1 border-accent p-2 mb-2'>Business Name: {currentUser?.businessName}</h3>
                    <h3 className='text-xl text-left border border-1 border-accent p-2 mb-2'>Busines Phone: {currentUser?.businessPhone}</h3>
                    <h3 className='text-xl text-left border border-1 border-accent p-2 mb-2'>Business Address: {currentUser?.businessAddress}</h3>
                    <h3 className='text-xl text-left border border-1 border-accent p-2 mb-2'>Linkedin Profile: {currentUser?.linkedin}</h3>
                    <h3 className='text-xl text-left border border-1 border-accent p-2 mb-2'>Your Details: {currentUser?.details}</h3>
                    {
                        isActive || currentUser.active?<button className='btn btn-accent mt-4 text-white font-bold'><Link to='/dashboard/myprofile/updateprofile'>Update Your Profile</Link></button>:<button disabled className='btn btn-accent mt-4 text-white font-bold'>Active Profile For Update</button>
                    }
                    
                </div>
               
            </div>
        </div>
    );
};

export default MyProfile;