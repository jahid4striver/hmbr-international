import React from 'react';
import client from '../../../assets/images/icons/client.jpeg'
import service from '../../../assets/images/icons/service.png'
import sale from '../../../assets/images/icons/sale.png'
import products from '../../../assets/images/icons/products.png'

const BussinessSummary = () => {
    return (
        <div className='container mx-auto my-16'>
            <h1 className='text-center my-8 text-3xl text-accent border-b-4 border-accent inline-block'>Why You Will Bussiness With Us</h1>
            <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-5'>
            <div class="card bg-base-100 shadow-xl">
                <div class="card-body flex justify-center items-center p-4">
                    <img className='w-40' src={client} alt="" />
                    <h2 class="card-title">5000+</h2>
                    <h2 class="card-title">Happy Client</h2>
                </div>
            </div>
            <div class="card bg-base-100 shadow-xl">
                <div class="card-body flex justify-center items-center p-4">
                    <img className='w-40' src={products} alt="" />
                    <h2 class="card-title">200+</h2>
                    <h2 class="card-title">Proudcts</h2>
                </div>
            </div>
            <div class="card bg-base-100 shadow-xl">
                <div class="card-body flex justify-center items-center p-4">
                    <img className='w-40' src={service} alt="" />
                    <h2 class="card-title">50+</h2>
                    <h2 class="card-title">Servicing Center</h2>
                </div>
            </div>
            <div class="card bg-base-100 shadow-xl">
                <div class="card-body flex justify-center items-center p-4">
                    <img className='w-40' src={sale} alt="" />
                    <h2 class="card-title">150+</h2>
                    <h2 class="card-title">Sales Agent</h2>
                </div>
            </div>
            </div>
        </div>
    );
};

export default BussinessSummary;