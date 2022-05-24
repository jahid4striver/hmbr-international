import React from 'react';

const Footer = () => {
    const date= new Date();
    const year= date.getUTCFullYear();
    return (
        <div className='bg-accent h-28 flex justify-center items-center'>
            <p className='text-center'> <small>&copy; Copyright</small> HMBR International {year}</p>
        </div>
    );
};

export default Footer;