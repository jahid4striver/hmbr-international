import React from 'react';
import Banner from './Banner';
import BecomeDealer from './BecomeDealer';
import BussinessSummary from './BussinessSummary';
import HomeReviews from './HomeReviews';
import HomeTools from './HomeTools';
import Quality from './Quality';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeTools></HomeTools>
            <BussinessSummary></BussinessSummary>
            <Quality></Quality>
            <HomeReviews></HomeReviews>
            <BecomeDealer></BecomeDealer>
        </div>
    );
};

export default Home;