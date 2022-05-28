import React from 'react';

const BecomeDealer = () => {
    return (
        <>
            <h1 className='text-center my-8 text-3xl text-accent border-b-4 border-accent inline-block'>Become Our Distributor</h1>
        <div class="hero min-h-screen bg-base-100">
            <div class="hero-content flex-col lg:flex-row">
                <div class="text-center lg:text-left">
                    <h1 class="text-5xl font-bold">Become Our Happy Distributor</h1>
                    <p class="py-6">If You owning a hardware and electric shop, you can become our Distributor with lot of opportunaties.Fill up the form if you are interest. We are going to give some dealership.</p>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Your Email Address</span>
                            </label>
                            <input type="text" placeholder="Your Email Address" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Your Shop/Business Name</span>
                            </label>
                            <input type="text" placeholder="Business Name" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Your Business Address</span>
                            </label>
                            <input type="text" placeholder="Business Address" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Your Details</span>
                            </label>
                            <textarea type="text" placeholder="Your Details" class="textarea textarea-bordered"></textarea>
                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-accent text-white">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default BecomeDealer;