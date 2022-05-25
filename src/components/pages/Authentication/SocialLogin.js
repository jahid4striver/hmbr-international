import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import google from '../../../assets/images/icons/google.png'
import auth from '../../../firebase.init';

const SocailLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    if(user){
        navigate(from, { replace: true });
    }

    const handleGoogleSignIn= ()=>{
        signInWithGoogle();
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn} class="btn btn-accent text-white"> <img width='30px' className='mr-2' src={google} alt="" /> Sign In With Google</button>
        </div>
    );
};

export default SocailLogin;