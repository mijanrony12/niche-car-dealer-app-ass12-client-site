import React from 'react';
import './NavBar.css'
import { NavLink } from 'react-router-dom';
import img from '../../../images/logo.png'
import useAuth from '../../../Hooks/useAuth';




const Navbar = () => {
    
   const {user,logOut}=useAuth()
    return (
        <>
               <div className="navbar">
                      <div>
                          <img src={img} alt="" />
                      </div>
                        <div className="menu">
                            <NavLink to="/home">home</NavLink>
                            <NavLink to="/moreCar">More-Car</NavLink>
                            <NavLink to="/dashboard">DashBoard</NavLink>
                             <div  className="signIn" >
                        { user.email ? 
                        <NavLink onClick={logOut} to="">SIGN Out</NavLink>
                            :
                            <NavLink to="/login">SIGN IN</NavLink>
                        }
                            </div>
                        </div>
               </div>
        </>
    );
};

export default Navbar;