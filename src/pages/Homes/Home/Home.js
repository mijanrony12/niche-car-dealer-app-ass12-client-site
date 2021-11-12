import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../../Hooks/useProducts';
import Product from '../../Product/Product';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar'
import Banner from '../Banner/Banner';
import TopBrand from '../TopBrand/TopBrand';
import TotalReview from '../TotalReview/TotalReview';



const Home = () => {
    const[products]=useProducts()
    return (
        // create a home page here
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
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
            <div className="container my-5">
                  <h3 className="heading mt-3 mb-4 text-center">Our Top Brand</h3>
                  <div className="row">
                        <TopBrand></TopBrand>
                  </div>
            </div>
            <div className="container my-5">
                  <h3 className="heading mt-3 mb-4 text-center">Our Client Review</h3>
                  <div className="row gy-3">
                        <TotalReview></TotalReview>
                  </div>
            </div>
             <Footer></Footer>
        </div>
    );
};

export default Home;