import React, { useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';


const AddReview = () => { 

    const [user] = useAuthState(auth);
    
    const handleReview=(e)=>{
      e.preventDefault();
       const name= e.target.name.value;
       const company= e.target.company.value;
       const rating= e.target.rating.value;
       const description= e.target.comments.value;
       const img= user.reloadUserInfo.photoUrl;
       const review={name, company, rating, description,img}
       
       
       fetch('http://localhost:5000/reviews',{
           method:'POST',
           headers:{
               'content-type': 'application/json'
           },
           body:JSON.stringify(review)
       })
       .then(res=> res.json())
       .then(data=> {
           toast.success('Review Added Succesfull')
           e.target.reset();
       })
       
    }

    return (
        <div>

            <div className='flex justify-center items-center my-16'>

                <div className='w-9/12 lg:w-6/12 md:w-1/2 shadow-2xl p-12 bg-base-100'>
                    <h2 className='text-2xl text-center text-accent font-bold border-b-3 border-accent inline-block my-2'>Add Review</h2>
                    <h4>Your Valuable Review Of Our Products and Service</h4>
                    <form onSubmit={handleReview}>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input name='name' required type="text" value={user?.displayName} disabled class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Your Company Name</span>
                            </label>
                            <input name='company' required type="text" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                        <label class="label">
                                <span class="label-text">Select Rating</span>
                            </label>
                            <select name='rating' required class="select select-bordered w-full max-w-xs">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
    
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Your Comments</span>
                            </label>
                            <textarea name='comments' required placeholder="Write Your Thought About Us" type="text" class="textarea textarea-bordered"></textarea>
                        </div>

                        <button type='submit' className='btn btn-accent w-full text-white font-bold mt-4'>Submit Review</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;