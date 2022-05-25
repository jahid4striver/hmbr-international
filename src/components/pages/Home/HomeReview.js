import React from 'react';

const HomeReview = ({ review }) => {
    const {name, img, description,rating}= review;
    return (
            <div class="card bg-base-100 shadow-xl mx-auto">
                <div class="card-body flex justify-center items-center p-4">
                    <div class="avatar online">
                        <div class="w-48 rounded-full">
                            <img src={img} alt="avator"/>
                        </div>
                    </div>
                    <h2 class="card-title">{name}</h2>
                    <p>{rating}</p>
                    <p>{description}</p>
                </div>
        </div>

    );
};

export default HomeReview;