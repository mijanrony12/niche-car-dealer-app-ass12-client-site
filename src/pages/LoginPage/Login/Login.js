import React from 'react';
import './Login.css'
import { useForm } from 'react-hook-form';
import login from '../../../images/login.jpg'
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { Button, Spinner } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    const { LoginUser, isLoading,authError,signInUsingGoogle } = useAuth();
    const location = useLocation()
    const history = useHistory()
    const { register, handleSubmit, formState: { errors } } = useForm();
    
            if (isLoading)
            {
             return <Spinner className="text-center" animation="border" variant="success" />
           }
    const onSubmit = data => {
         
       LoginUser(data.email, data.password,location,history)
  };
  

  const handleLogin = () => {
        signInUsingGoogle(location, history)
  }
  
  return (
      //create login page
         <div className="row login">
                
            <div className="col-md-6">
                <h3 className="heading mt-3 text-center">Please Login Here</h3>
                     {!isLoading && <form onSubmit={handleSubmit(onSubmit)} className=" order-details">
                    
                       <label htmlFor="name">Your Email</label>
                        <input {...register("email", { required: true })} placeholder="Your Email" />
                        { errors.email && <span>This field is required</span> }
                    
                       <label htmlFor="name">Your Password</label>
                      <input  { ...register("password") } placeholder="Your Password" />
                    <p className="text-danger">{authError}</p>
                      <input className="btn-color" type="submit" value="Login" />
                </form> }
                {isLoading && <Spinner className="text-center" animation="border" variant="success" />}
                <div className="login-btn">
                     <Link className="text-center" to="/register">Are You New Here? Please Register</Link>
                      <p>------------------------------- <b>OR</b>-------------------------</p>
                      <Button onClick={handleLogin} variant="outline-danger">Sign In Google</Button>
               </div>
            </div>
            <div className="col-md-6 ">
                <img src={login} alt="" />
           </div>
        </div>
    );
};

export default Login;