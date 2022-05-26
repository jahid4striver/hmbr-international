import React from 'react';

const UpdateProfile = () => {
    const handleUpdateProfile=(e)=>{
        e.preventDefault();
    }
    return (
        <div className='grid  grid-cols-1 lg:grid-cols-2 md:grid-cols-1 justify-items-center gap-5 mt-4'>
            <div className='shadow-2xl p-12 bg-base-100 text-center w-3/4'>
                <h2 className='text-2xl text-center text-accent font-bold border-b-3 border-accent inline-block mb-2'>Update Profile</h2>
                <form onSubmit={handleUpdateProfile} className='flex flex-col justify-center items-center'>
                        
                        <input name='education' placeholder='Education' required type="text" class="input input-bordered mb-3 w-10/12" />
                        <input name='pPhone' placeholder='Personal Phone No' required type="text" class="input input-bordered mb-3 w-10/12" />
                        <input name='pAddress' placeholder='Personal Address' required type="text" class="input input-bordered mb-3 w-10/12" />
                        <input name='bName' placeholder='Business Name' required type="text" class="input input-bordered mb-3 w-10/12" />
                        <input name='bAddress' placeholder='Business Address' required type="text" class="input input-bordered mb-3 w-10/12" />
                        <input name='bPhone' placeholder='Business Phone' required type="text" class="input input-bordered mb-3 w-10/12" />
                        <input name='linkedin' placeholder='Linkedin Profile Address' required type="text" class="input input-bordered mb-3 w-10/12" />
                        <textarea name='details' required placeholder="Write About You In Details" type="text" class="textarea textarea-bordered mb-3 w-10/12"></textarea>
                        <label htmlFor="name">Upload Your Profile Image</label>
                        <input name='img' required type="file" class="input input-bordered mb-3 w-10/12" />

                    <button type='submit' className='btn btn-accent w-full text-white font-bold mt-4'>Update Profile</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;