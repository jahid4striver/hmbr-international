import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div class="hero min-h-screen" style={{backgroundImage: `url('https://www.incimages.com/uploaded_files/image/1920x1080/getty_494605768_2000133320009280151_316966.jpg')`}}>
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold">HMBR Tools And Hardware</h1>
                    <p class="mb-5">Start Your Bussiness With HMBR International, World On Of the Best Tools and Machinary Menufacturer</p>
                    <button class="btn btn-accent text-white font-bold"><Link to='/tools'>Get Started</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;