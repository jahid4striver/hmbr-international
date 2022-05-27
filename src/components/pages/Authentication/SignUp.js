import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import login from '../../../assets/images/images/login.jpeg'
import auth from '../../../firebase.init';
import SocailLogin from './SocialLogin';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';


const SignUp = () => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [passwordError,setPasswordError]= useState('');
    const navigate= useNavigate();


    const onSubmit = async data => {
        if(data.password===data.conPassword){
           await createUserWithEmailAndPassword(data.email, data.password);
           await updateProfile({displayName: data.name});
           navigate('/');
        }else{
            return 
        }
        

    };
    return (
        <div>
            <div className='flex justify-center items-center my-16'>
               <div className='w-9/12 lg:w-4/12 md:w-1/2 shadow-2xl p-12'>
               <form onClick={handleSubmit(onSubmit)}>
                    <img className='w-3/4 mx-auto' src={login} alt="" />
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Name</span>
                        </label>
                        <input {...register("name", { required: true, })} type="email" class="input input-bordered" />
                        <label class="label">
                            <span class="label-text-alt text-red-500">{errors.name && <span>This field is required</span>}</span>
                        </label>
                    </div>
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
                        <input required {...register("password", { minLength:6, maxLength:12, })} type="password" class="input input-bordered" />
                        <label class="label">
                            <span class="label-text-alt text-red-500">{errors.password && <span>Password Should Be Min 6 and Max 12 Characters</span>}</span>
                        </label>
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Confirm Password</span>
                        </label>
                        <input required {...register("conPassword", { minLength:6, maxLength:12, })} type="password" class="input input-bordered" />
                        <label class="label">
                            <span class="label-text-alt text-red-500">{errors.conPassword && <span>Password Should Be Min 6 and Max 12 Characters</span>}</span>
                        </label>
                    </div>
                    <p className='text-red-600 font-bold'>{passwordError}</p>
                    <button type='submit' className='btn btn-accent w-full text-white font-bold'>Sign Up</button>
                </form>
                    <p>Already Have an Account? <Link to='/login'><button className='text-accent font-bold my-2'>Login</button></Link></p>
                    <div class="divider">OR</div>
                    <SocailLogin />
               </div>
            </div>
        </div>
    );
};

export default SignUp;