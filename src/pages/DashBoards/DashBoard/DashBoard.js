import React from 'react';
import './DashBoard.css'
import logo from '../../../images/logo.png'
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import MyOrders from '../MyOrders/MyOrders';
import Review from '../Review/Review';

const DashBoard = () => {
    const { logOut } = useAuth()
    return (
        <>
            <div className="row">
                  <div className="col-md-3 dashboard">
                       <div className="text-center mt-3">
                             <img src={logo} alt="" />
                       </div>
                        <div className="text-center mt-5 all-Link">
                                  <NavLink onClick={logOut} to="">LogOut</NavLink>
                                
                        </div>
                  </div>
                  <div className="col-md-9">
                    <h1 className="heading text-center my-3">Your DashBoard</h1>
                    
                  </div>
         </div>
        </>
    );
};

export default DashBoard;

