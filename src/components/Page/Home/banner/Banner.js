import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'
const Banner = () => {
    return (
        <div className="banner">
            <div>
            <h1>Amazing Tour In Hampshire </h1>
            <h2 className="custom_color ">7 Days, 8 Night Tour</h2>
            <Link to="/packages"className="banner_btn">Book Now</Link>
            </div>
        </div>
    );
};

export default Banner;