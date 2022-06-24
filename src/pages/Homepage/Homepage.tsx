import React from 'react';
import Box from '@mui/material/Box';
import TopNavigationBar from '../../components/TopNavigationBar';
import About from './About/About';
import ContactUs from './ContactUs/ContactUs';
import HeroImage from './HeroImage/HeroImage';
import RatingAndReviews from './RatingAndReviews/RatingAndReviews';
import ShoppingCategories from './ShoppingCategories/ShoppingCategories';
import './style.scss';

const Homepage = () => {
    return (
        <Box className="homepage-container">
            <TopNavigationBar />
            <Box className="homepage">
                <HeroImage />
                <About />
                <RatingAndReviews />
                <ShoppingCategories />
                <ContactUs />
            </Box>
        </Box>
    )
}

export default Homepage