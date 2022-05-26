import React from 'react';

const CancelModal = ({cancelOrder, refetch}) => {
    
    const handleCancelOrder=()=>{

        fetch(`http://localhost:5000/orders/${cancelOrder?._id}`,{
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
            <input type="checkbox" id="cancel-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are You Sure Want To Delete <span className='text-warning font-bold'>{cancelOrder?.name}- {cancelOrder?.qyt} Pcs Order</span></h3>
                    <div class="modal-action">
                        <label onClick={handleCancelOrder} for="cancel-modal" class="btn btn-error text-white font-bold">Yes Cancel This Order</label>
                        <label for="cancel-modal" class="btn">No</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CancelModal;