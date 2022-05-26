import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);


    return (
        <div>

            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 justify-items-center gap-5 mt-4'>
                <div className='shadow-2xl p-12 bg-base-100 text-center'>
                    <h2 className='text-2xl text-center text-accent font-bold border-b-3 border-accent inline-block mb-2'>My Profile</h2>
                    <img className='rounded mx-auto' src={user.photoURL} alt="" />
                    <h3 className='text-xl text-left border border-1 border-accent p-2 mt-4 mb-2'>Name: {user.displayName}</h3>
                    <h3 className='text-xl text-left border border-1 border-accent p-2 mb-2'>Email: {user.email}</h3>
                    <h3 className='text-xl text-left border border-1 border-accent p-2 mb-2'>Education: {}</h3>
                    <h3 className='text-xl text-left border border-1 border-accent p-2 mb-2'>Address: {}</h3>
                    <h3 className='text-xl text-left border border-1 border-accent p-2 mb-2'>Phone No: {}</h3>
                    <h3 className='text-xl text-left border border-1 border-accent p-2 mb-2'>Business Name: {}</h3>
                    <h3 className='text-xl text-left border border-1 border-accent p-2 mb-2'>Busines Phone: {}</h3>
                    <h3 className='text-xl text-left border border-1 border-accent p-2 mb-2'>Business Address: {}</h3>
                    <h3 className='text-xl text-left border border-1 border-accent p-2 mb-2'>Linkedin Profile: {}</h3>
                    <h3 className='text-xl text-left border border-1 border-accent p-2 mb-2'>Your Details: {}</h3>
                    <button className='btn btn-accent mt-4 text-white font-bold'><Link to='/dashboard/myprofile/updateprofile'>Update Your Profile</Link></button>
                </div>
               
            </div>
        </div>
    );
};

export default MyProfile;