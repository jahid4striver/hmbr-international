import React, { useState } from 'react';
import r1 from '../../../assets/images/ratings/r1.png'
import r2 from '../../../assets/images/ratings/r2.png'
import r3 from '../../../assets/images/ratings/r3.png'
import r4 from '../../../assets/images/ratings/r4.png'
import r5 from '../../../assets/images/ratings/r5.png'

const HomeReview = ({ review }) => {
    const {name, img, description,rating}= review;
    let star;

    if(rating==1){
        star=r1;
    }if(rating==2){
        star=r2
    }if(rating==3){
        star=r3
    }if(rating==4){
        star=r4
    }if(rating==5){
        star=r5
    }


    return (
            <div class="card bg-base-100 shadow-xl mx-auto">
                <div class="card-body flex justify-center items-center p-4">
                    <div class="avatar online">
                        <div class="w-48 rounded-full">
                            <img src={img} alt="avator"/>
                        </div>
                    </div>
                    <h2 class="card-title">{name}</h2>
                    <p><img className='h-20' src={star} alt="" /></p>
                    <p>{description}</p>
                </div>
        </div>

    );
};

export default HomeReview;