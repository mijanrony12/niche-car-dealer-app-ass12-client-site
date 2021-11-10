import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../../Hooks/useProducts';
import Product from '../../Product/Product';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar'



const Home = () => {
    const[products]=useProducts()
    return (
        <div>
            <NavBar></NavBar><br />

            <div className="container">
                 <div className="row gy-3 my-5">
                <h1 className="text-center heading">Our Car</h1>
                {
                    products.slice(0, 6).map(product => <Product
                        key={ product._id }
                        product={product}
                    ></Product>)
                    }
                    <Link className="text-end" to='/moreCar'> See More Car</Link>
             </div>
           </div>
             <Footer></Footer>
        </div>
    );
};

export default Home;