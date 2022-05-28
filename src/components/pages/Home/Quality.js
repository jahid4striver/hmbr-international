import React from 'react';
import { Link } from 'react-router-dom';
import working from '../../../assets/images/images/working.jpg'

const Quality = () => {
    return (
        <div>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={working} class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">Favourite Of Technicians</h1>
                        <p class="py-6">HMBR Tools and Mechinaries are top choice amongst the technicians of all over world.</p>
                        <button class="btn btn-accent text-white font-bold"><Link to='/tools'>Order Now</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quality;