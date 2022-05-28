import React from 'react';
import jahid from '../../../assets/images/images/jahid.jpg'
import html5 from '../../../assets/images/svg/html5.svg'
import css3 from '../../../assets/images/svg/css3.svg'
import bootstrap from '../../../assets/images/svg/bootstrap.svg'
import js from '../../../assets/images/svg/js.svg'
import tailwindcss from '../../../assets/images/svg/tailwindcss.svg'
import react from '../../../assets/images/svg/react.svg'
import node from '../../../assets/images/svg/node.svg'
import express from '../../../assets/images/svg/express.svg'
import mongodb from '../../../assets/images/svg/mongodb.svg'
import firebase from '../../../assets/images/svg/firebase.svg'
import { Link } from 'react-router-dom';
import nbc from '../../../assets/images/images/nbc.png';
import easy from '../../../assets/images/images/easy.png';
import musafir from '../../../assets/images/images/musafir.png';

const MyPortfolio = () => {
    return (
        <div>
            <h2 className='text-2xl text-center text-accent border-b-4 border-accent inline-block mt-8'>My Details and Projects</h2>
            <div className='w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 my-20 gap-8'>
                <div class="card w-full mx-auto bg-base-100 shadow-xl">
                <h2 className='text-xl text-center text-accent font-bold'>My Info</h2>
                    <figure class="px-10 pt-10">
                        <img src={jahid} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Jahid Hossen</h2>
                        <h2 class="text-sm">Jr. Web Developer</h2>
                        <p>Email Address: jahihassan701@gmail.com</p>
                        <p>Education: BBA Honours In Management (National University) </p>
                        <h2 class="card-title">Web Technologies</h2>
                        <div className='grid grid-cols-8 gap-2'>
                            <div className='text-center'>
                                <img className='w-8' src={html5} alt="HTML5" />
                            </div>
                            <div className='text-center'>
                                <img className='w-8' src={css3} alt="" />

                            </div>
                            <div className='text-center'>
                                <img className='w-8' src={bootstrap} alt="" />

                            </div>
                            <div className='text-center'>
                                <img className='w-8' src={js} alt="" />

                            </div>
                            <div className='text-center'>
                                <img className='w-8' src={tailwindcss} alt="" />

                            </div>
                            <div className='text-center'>
                                <img className='w-8' src={react} alt="" />

                            </div>
                            <div className='text-center'>
                                <img className='w-8' src={firebase} alt="" />

                            </div>
                            <div className='text-center'>
                                <img className='w-8' src={node} alt="" />

                            </div>
                            <div className='text-center'>
                                <img className='w-8' src={express} alt="" />

                            </div>
                            <div className='text-center'>
                                <img className='w-8' src={mongodb} alt="" />

                            </div>
                        </div>
                    </div>
                </div>
                <div class="card w-full mx-auto bg-base-100 shadow-xl">
                    <h2 className='text-xl text-center text-accent font-bold'>My Recent Projects</h2>
                    <figure class="px-10 pt-10">
                        <div class="card w-96 bg-base-100 shadow-xl image-full">
                            <figure><img src={nbc} alt="Shoes" /></figure>
                            <div class="card-body">
                                <h2 class="card-title">NBC Motors</h2>
                                <p>A Website For Honda Brand Showroom With Lot of Dynamic Features</p>
                                <div class="card-actions justify-end">
                                    <button class="btn btn-accent text-white font-bold"><a href="https://nbc-motors-inventory.web.app/" target='_blank'>Visit NBC Motors</a></button>
                                </div>
                            </div>
                        </div>
                    </figure>
                    <figure class="px-10 pt-10">
                        <div class="card w-96 bg-base-100 shadow-xl image-full">
                            <figure><img src={easy} alt="Shoes" /></figure>
                            <div class="card-body">
                                <h2 class="card-title">Easy Accounts</h2>
                                <p>A Website For an Accountant With Exciting Features</p>
                                <div class="card-actions justify-end">
                                <button class="btn btn-accent text-white font-bold"><a href="https://easy-accounts-b7a5d.web.app/" target='_blank'>Visit Easy Accounts</a></button>
                                </div>
                            </div>
                        </div>
                    </figure>
                    <figure class="px-10 pt-10">
                        <div class="card w-96 bg-base-100 shadow-xl image-full">
                            <figure><img src={musafir} alt="Shoes" /></figure>
                            <div class="card-body">
                                <h2 class="card-title">Musafir Hotel</h2>
                                <p>A Website for Hotel Booking</p>
                                <div class="card-actions justify-end">
                                <button class="btn btn-accent text-white font-bold"><a href="https://musafir-hotel.web.app/" target='_blank'>Visit Musafir Hotel</a></button>
                                </div>
                            </div>
                        </div>
                    </figure>
                </div>

            </div>
        </div>
    );
};

export default MyPortfolio;