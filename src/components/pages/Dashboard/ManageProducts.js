import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import Loading from '../../shared/Loading';
import DeleteProductModal from './DeleteProductModal';
// import EditProductModal from './EditProductModal';
import ManageProduct from './ManageProduct';


const ManageProducts = () => {
    // const [user] = useAuthState(auth);
    const [deleteProduct, setDeleteProduct]= useState(null);
    // const [editProduct, setEditProduct]= useState(null);
    // const email= user?.email;

    const { data: tools, isLoading, refetch } = useQuery(['tools'], () => fetch(`https://salty-dawn-53601.herokuapp.com/tools`,{
        method: 'GET',
        headers:{
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h2 className='text-2xl text-center text-accent border-b-4 border-accent inline-block mt-8'>Manage Products</h2>
            <div class="overflow-x-auto">
                <table class="table text-center w-11/12 my-8 mx-auto shadow-lg">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Product Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Details</th>
                            <th>Minimum Order Qyt</th>
                            <th>Stock</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            tools.map((tool, index)=><ManageProduct
                            key={tool._id}
                            tool={tool}
                            index={index}
                            setDeleteProduct={setDeleteProduct}
                            />)
                        }

                    </tbody>
                </table>
            </div>
            {/* <EditProductModal editProduct={editProduct}></EditProductModal> */}
            <DeleteProductModal refetch={refetch} setDeleteProduct={setDeleteProduct} deleteProduct={deleteProduct}></DeleteProductModal>
        </div>
    );
};

export default ManageProducts;