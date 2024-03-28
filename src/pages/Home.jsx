import React from 'react';
import Hero from '../components/Hero';
import CategoryList from '../components/CategoryList';
import FeaturedJobs from '../components/FeaturedJobs';

const Home = () => {
    return (
        <div className=''>
            <Hero></Hero>
            <CategoryList></CategoryList>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;