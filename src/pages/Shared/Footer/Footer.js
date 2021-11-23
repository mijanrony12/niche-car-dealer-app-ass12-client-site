import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        //footer section implement..
        <>
            <div className=" footer row">
                   <div className="col-md-4">
                         <h2>Best car dealer in Bangladesh</h2>
                        <p>I've been camping as long as I can remember, first with the family, then with the Boy Scouts, now with my wife and extended family.</p>
                   </div>
                   <div className=" detail col-md-4">
                        <h2>Quicks Links</h2>
                         <p>About Us</p>
                         <p>Contact Us</p>
                         <p>Products</p>
                         <p>Login</p>
                        
                   </div>
                   <div className=" detail col-md-4">
                         <h2>Support</h2>
                        <p>Affiliates</p>
                        <p>Sitemap</p>
                        <p>Cancelation Policy</p>
                        <p>Privacy Policy</p>
                   </div>
                  
            </div>
        </>
    );
};

export default Footer;