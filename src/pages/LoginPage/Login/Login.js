import React from 'react';
import './Login.css'
import { useForm } from 'react-hook-form';
import login from '../../../images/login.jpg'
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { Spinner } from 'react-bootstrap';
const Login = () => {
    const { LoginUser, isLoading } = useAuth()
    if (isLoading)
    {
       return <Spinner className="text-center" animation="border" variant="success" />
        
    }
  
      const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
       LoginUser(data.email, data.password)
    };
    return (
         <div className="row login">
                
            <div className="col-md-6">
                <h3 className="heading mt-3 text-center">Please Login Here</h3>
                     {!isLoading && <form onSubmit={handleSubmit(onSubmit)} className=" order-details">
                    
                       <label htmlFor="name">Your Email</label>
                        <input {...register("email", { required: true })} placeholder="Your Email" />
                        { errors.email && <span>This field is required</span> }
                    
                       <label htmlFor="name">Your Password</label>
                      <input  { ...register("password") } placeholder="Your Password" />
            
                      <input className="btn-color" type="submit" value="Login" />
                </form> }
                {isLoading && <Spinner className="text-center" animation="border" variant="success" />}
                <div className="login-btn">
                     <Link className="text-center" to="/register">Are You New Here? Please Register</Link>
                     <p>------------------------------- <b>OR</b>-------------------------</p>
               </div>
            </div>
            <div className="col-md-6 ">
                <img src={login} alt="" />
           </div>
        </div>
    );
};

export default Login;