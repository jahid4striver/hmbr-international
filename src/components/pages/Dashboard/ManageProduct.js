import React from 'react';
import { Link } from 'react-router-dom';


const ManageProduct = ({ tool, index, setDeleteProduct }) => {
    const { _id, name, img, description, minimum_qyt, available_qyt, price } = tool;
    return (
        <>
            <tr className='text-center'>
                <th>{index + 1}</th>
                <th><div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                        <img src={img} alt={name} />
                    </div>
                </div></th>
                <th>{name}</th>
                <th>{price}</th>
                <th>{description.slice(0, 20)}</th>
                <th>{minimum_qyt}</th>
                <th>{available_qyt}</th>
                <th>

                    {/* <label onClick={()=>setEditProduct(tool)} for="edit-product-modal" className='btn btn-sm btn-accent'>Edit</label> */}

                    <label for="delete-product-modal" onClick={()=>setDeleteProduct(tool)}  className='btn btn-sm btn-error'>Delete</label>
                </th>
            </tr>
        </>
    );
};

export default ManageProduct;