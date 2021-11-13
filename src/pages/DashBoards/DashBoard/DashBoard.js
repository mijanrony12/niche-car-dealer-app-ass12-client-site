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



const DashBoard = () => {
  const { logOut, admin,  } = useAuth();
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
                                  <Link to="" onClick={logOut}>Log Out</Link>
                        { !admin ?
                            <>
                                 <Link to="" onClick={()=> setControls('myOrders')}>My Orders</Link>
                                  <Link to="" onClick={()=> setControls('review')}>Review</Link>
                                <Link to="" onClick={ () => setControls('payment') }>Payment</Link>
                            </>
                            :
                            <>
                                  <Link to="" onClick={()=> setControls('allOrders')}>Manage All Orders</Link>
                                  <Link to="" onClick={()=> setControls('product')}>Manage Product</Link>
                                  <Link to="" onClick={()=> setControls('addProduct')}>Add Product</Link>
                                  <Link to="" onClick={ () => setControls('makeAdmin') }>Make Admin</Link>
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

