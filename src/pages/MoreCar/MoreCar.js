import React from 'react';
import useProducts from '../../Hooks/useProducts';
import Product from '../Product/Product';

const MoreCar = () => {
        const[products]=useProducts()
    return (
        <div className="container">
                 <div className="row gy-3 my-5">
                <h1 className="text-center heading">Our Car</h1>
                {
                    products.map(product => <Product
                        key={ product._id }
                        product={product}
                    ></Product>)
                    }
                   
             </div>
           </div>
    );
};

export default MoreCar;