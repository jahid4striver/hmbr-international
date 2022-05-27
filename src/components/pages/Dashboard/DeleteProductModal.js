import React from 'react';
import { toast } from 'react-toastify';

const DeleteProductModal = ({deleteProduct, refetch, setDeleteProduct}) => {
    
    const handleDeleteOrder=()=>{

        fetch(`http://localhost:5000/tools/${deleteProduct?._id}`,{
            method: 'DELETE'
        })
        .then(res=> res.json())
        .then(data=>{
            refetch();
            setDeleteProduct(null)
            toast('Product Delete Successfull')
            console.log(data)
        })
    }
    return (
        <div>
            <input type="checkbox" id="delete-product-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are You Sure Want To Delete <span className='text-warning font-bold'>{deleteProduct?.name}</span></h3>
                    <div class="modal-action">
                        <label onClick={handleDeleteOrder} for="delete-product-modal" class="btn btn-error text-white font-bold">Yes Delete This Order</label>
                        <label for="delete-product-modal" class="btn">No</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteProductModal;