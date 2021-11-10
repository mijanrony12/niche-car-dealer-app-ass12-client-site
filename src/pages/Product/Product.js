import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'
const Product = ({ product }) => {
    const { name,img,desc,price } = product;
    return (
        <div className="col-md-6 col-lg-4 product">
            
                <img src={ img } alt="" />
              
            <div  className="price">
                 <Link to="">$ {price}</Link>
           </div>
            <div >
                <h3>{ name }</h3>
                <p>{ desc }</p>
                <div className='btn-design'>
                      <Link to="/orderPlace"> Buy Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Product;