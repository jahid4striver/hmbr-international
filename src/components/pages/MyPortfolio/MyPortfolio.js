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

const MyPortfolio = () => {
    return (
        <div className='container w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2 my-20'>
            <div class="card w-96 bg-base-100 shadow-xl">
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
            <div class="card w-96 bg-base-100 shadow-xl">
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
        
        </div>
    );
};

export default MyPortfolio;