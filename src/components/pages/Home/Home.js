import React from 'react';
import Banner from './Banner';
import BussinessSummary from './BussinessSummary';
import HomeReviews from './HomeReviews';
import HomeTools from './HomeTools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeTools></HomeTools>
            <BussinessSummary></BussinessSummary>
            <HomeReviews></HomeReviews>
        </div>
    );
};

export default Home;