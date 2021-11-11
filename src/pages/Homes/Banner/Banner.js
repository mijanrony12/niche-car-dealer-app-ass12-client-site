import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';
const Banner = () => {
    return (
        <>
                <div className="banner">
                <div class="banner-text">
                    <h1 >World Most Expensive Car</h1>
                    <p>this is very luxuarious car, intorior and extranal design just awesome</p>
                    <Link to="/about">
                        <button>About Me</button>
                    </Link>
                </div>
            </div> 
        </>
    );
};

export default Banner;