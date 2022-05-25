import React from 'react';
import google from '../../../assets/images/icons/google.png'

const SocailLogin = () => {
    return (
        <div>
            <button class="btn btn-accent text-white"> <img width='30px' className='mr-2' src={google} alt="" /> Sign In With Google</button>
        </div>
    );
};

export default SocailLogin;