import React from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import './Product.css'
const Product = ({ product }) => {
    const { name,img,desc,price,rating } = product;
    return (
        <div className="col-md-6 col-lg-4 product">
            
                <img src={ img } alt="" />
              
            <div  className="price">
                 <Link to="">$ {price}</Link>
           </div>
            <div >
                <h3>{ name }</h3>
                <div>
                    <Rating
                        initialRating={rating}
                        readonly
                        emptySymbol="far fa-star star-color "
                        fullSymbol="fas fa-star star-color"
                     />
                </div>
                <p>{ desc }</p>
                <div className='btn-design'>
                      <Link to="/orderPlace"> Buy Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Product;