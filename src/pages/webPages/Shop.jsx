import React from 'react';
import PageHero from '../../components/WebPages/PageHero';
import ShopContent from '../../components/WebPages/shop/ShopContext';

const ShopPage = () => {
    return (
        <div>
            <PageHero
                title="Shop Galaxy of Fun"
                description="Embark on a journey through our celestial collection of premium toys. Crafted with magic and designed for adventure."
                breadcrumb="Shop All"
                image="https://pngimg.com/uploads/teddy_bear/teddy_bear_PNG57.png" // High-quality image use karein
            />
            <ShopContent />
        </div>
    );
};

export default ShopPage;