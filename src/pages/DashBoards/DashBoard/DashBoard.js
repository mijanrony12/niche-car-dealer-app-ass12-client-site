import React, { useState } from 'react';
import './DashBoard.css'
import logo from '../../../images/logo.png'
import useAuth from '../../../Hooks/useAuth';
import MyOrders from '../MyOrders/MyOrders';
import Review from '../Review/Review';
import Payment from '../Payment/Payment';
import Footer from '../../Shared/Footer/Footer';
import AllOrders from '../AllOrders/AllOrders';
import ManageProduct from '../ManageProduct/ManageProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProduct from '../AddProduct/AddProduct';
import { Link } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';


const DashBoard = () => {
  const { logOut, admin, isLoading } = useAuth();
  const [ controls, setControls ] = useState(admin ? 'allOrders' : 'myOrders');

  return (
      // create dashboard for every user.
        <>
           <div className="row mb-3">
                  <div className="col-md-3 dashboard">
                       <div className="text-center mt-3">
                             <img src={logo} alt="" />
                       </div>
                        <div className="text-center mt-5 all-Link">
                                  <button onClick={logOut}>Log Out</button>
                        { !admin ?
                            <>
                                 <button onClick={()=> setControls('myOrders')}>My Orders</button>
                                  <button onClick={()=> setControls('review')}>Review</button>
                                <button onClick={ () => setControls('payment') }>Payment</button>
                            </>
                            :
                            <>
                                  <button onClick={()=> setControls('allOrders')}>Manage All Orders</button>
                                  <button onClick={()=> setControls('product')}>Manage Product</button>
                                  <button onClick={()=> setControls('addProduct')}>Add Product</button>
                                  <button onClick={ () => setControls('makeAdmin') }>Make Admin</button>
                            </>
                        }
                                 
                              <Link style={{textDecoration:'none'}} to="/">Home Page</Link>    
                        </div>
                  </div>
                  <div className="col-md-9">
                    <h1 className="heading text-center my-3">Your DashBoard</h1>
                      {
                        controls === 'myOrders' && <MyOrders/>
                      }
                      {
                        controls === 'review' && <Review/>
                      }
                      {
                        controls === 'payment' && <Payment/>
                      }
                      {
                        controls === 'allOrders' && <AllOrders/>
                      }
                      {
                        controls === 'product' && <ManageProduct/>
                      }
                      {
                        controls === 'addProduct' && <AddProduct/>
                      }
                      {
                        controls === 'makeAdmin' && <MakeAdmin/>
                      }
                  </div>
      </div> 
      
            <Footer></Footer>
        </>
    );
};

export default DashBoard;

