import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../../assets/images/images/login.jpeg'
import auth from '../../../firebase.init';
import SocailLogin from './SocialLogin';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    if(user){
        navigate(from, { replace: true });
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    };
    return (
        <div>
            <div className='flex justify-center items-center my-16'>
                <div className='w-9/12 lg:w-4/12 md:w-1/2 shadow-2xl p-12'>
                <form onClick={handleSubmit(onSubmit)}>
                    <img className='w-3/4 mx-auto' src={login} alt="" />
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Email Address</span>
                        </label>
                        <input {...register("email", { required: true, })} type="email" class="input input-bordered" />
                        <label class="label">
                            <span class="label-text-alt text-red-500">{errors.email && <span>This field is required</span>}</span>
                        </label>
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input {...register("password", { required: true })} type="password" class="input input-bordered" />
                        <label class="label">
                            <span class="label-text-alt text-red-500">{errors.password && <span>This field is required</span>}</span>
                        </label>
                    </div>
                    <button type='submit' className='btn btn-accent w-full text-white font-bold'>Login</button>
                </form>
                    <p>Not Have an Account? <Link to='/signup'><button className='text-accent font-bold my-2'>Create Account</button></Link></p>
                    <div class="divider">OR</div>
                    <SocailLogin />
                </div>
            </div>
        </div>
    );
};

export default Login;