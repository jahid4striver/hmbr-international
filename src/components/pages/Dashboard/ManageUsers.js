import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import Loading from '../../shared/Loading';
import CancelModal from './CancelModal';
import ManageUser from '../Dashboard/ManageUser'
import DeleteUserModal from './DeleteUserModal';


const ManageUsers = () => {

    const [deleteUser, setDeleteUser]= useState(null);
    // const email= user?.email;

    const { data: allUsers, isLoading, refetch } = useQuery(['allusers'], () => fetch('https://salty-dawn-53601.herokuapp.com/allusers').then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h2 className='text-2xl text-center text-accent border-b-4 border-accent inline-block mt-8'>Manage All Users</h2>
            <div class="overflow-x-auto">
                <table class="table table-zebra text-center text-base w-11/12 my-8 mx-auto shadow-lg">
                    <thead>
                        <tr className='text-base'>
                            <th><small>SL</small></th>
                            <th><small>User Image</small></th>
                            <th><small>User Id</small></th>
                            <th><small>User Name</small></th>
                            <th><small>User Email</small></th>
                            <th><small>User Role</small></th>
                            <th><small>Action</small></th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            allUsers.map((user, index)=><ManageUser
                            key={user._id}
                            user={user}
                            index={index}
                            setDeleteUser={setDeleteUser}
                            refetch={refetch}
                            />)
                        }

                    </tbody>
                </table>
            </div>
            <DeleteUserModal refetch={refetch} deleteUser={deleteUser}></DeleteUserModal>
        </div>
    );
};

export default ManageUsers;