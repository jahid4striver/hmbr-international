import React from 'react';
import { useQuery } from 'react-query';
import HomeReview from './HomeReview';

const HomeReviews = () => {
    const { data: reviews, isLoading } = useQuery(['reviews'], () => fetch('https://salty-dawn-53601.herokuapp.com/reviews').then(res => res.json()));

    if (isLoading) {
        return <progress class="progress w-56"></progress>
    }
    return (
        <div>
            <h1 className='text-center my-8 text-3xl text-accent border-b-4 border-accent inline-block'>Recent Customers Reviews</h1>
            <div>
                <div className='container mx-auto'>
                <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 my-8">
                    {
                        reviews.slice(0,3).map(review => <HomeReview
                            key={review._id}
                            review={review}
                        />)
                    }
                </div>
                </div>
            </div>
        </div>
    );
};

export default HomeReviews;