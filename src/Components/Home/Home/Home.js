import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Offers from '../Offers/Offers';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Offers></Offers>
            <Reviews></Reviews>
            <Blogs></Blogs>
            <Footer></Footer>
        </div>
    );
};

export default Home;