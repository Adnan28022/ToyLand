import React from 'react';
import Hero from '../../components/WebPages/home/Hero';
import Categories from '../../components/WebPages/home/Categories';
import FeaturedProducts from '../../components/WebPages/home/FeaturedProducts';
import PromoBanner from '../../components/WebPages/home/PromoBanner';
import TrustSection from '../../components/WebPages/home/TrustSection';
import VideoShowcase from '../../components/WebPages/home/VideoShowCase';
import SocialNewsletter from '../../components/WebPages/home/SocialNewsLetter';

const Home = () => {
    return (
        <div className="bg-white">
            <Hero />
            <Categories />
            <FeaturedProducts />
            <PromoBanner />
            <TrustSection />
            <VideoShowcase />
            <SocialNewsletter />
        </div>
    );
};

export default Home;