import React from 'react';

const DeleteUserModal = ({deleteUser, refetch}) => {
    
    const handleDeleteUser=()=>{

        fetch(`https://salty-dawn-53601.herokuapp.com/users/${deleteUser?._id}`,{
            method: 'DELETE'
        })
        .then(res=> res.json())
        .then(data=>{
            refetch();
            console.log(data)
        })
    }
    return (
        <div>
            <input type="checkbox" id="delete-user-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are You Sure Want To Delete <span className='text-warning font-bold'>{deleteUser?.displayName}</span></h3>
                    <div class="modal-action">
                        <label onClick={handleDeleteUser} for="delete-user-modal" class="btn btn-error text-white font-bold">Delete</label>
                        <label for="delete-user-modal" class="btn">No</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteUserModal;