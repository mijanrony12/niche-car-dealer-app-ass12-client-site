import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import useAuth from '../../../Hooks/useAuth';
import regLogo from '../../../images/register.jpg'
import { useHistory,useLocation } from 'react-router-dom';
const Register = () => {

    const {RegisterUser,isLoading,authError}=useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm();
    
          const history=useHistory()
    const onSubmit = data => {
        console.log(data);
        if (data.password !== data.password2)
        {
            swal("Sorry!", "Your password invalid!", "error");
            return
        }
        else if (data.password < 6 && data.password2)
        {
              swal("Sorry!", "password give me at least 6 character!", "error");
            return
        }
         
        RegisterUser(data.email, data.password,history)
      
    };

    return (
        // create a register form.
        <div className="row login">
                
            <div className="col-md-6">
                <h3 className="heading mt-3 text-center">Please Register Here</h3>
                     {!isLoading && <form onSubmit={handleSubmit(onSubmit)} className=" order-details">
                    
                       <label htmlFor="name">Your Email</label>
                        <input {...register("email", { required: true })} placeholder="Your Email" />
                        { errors.email && <span>This field is required</span> }
                    
                       <label htmlFor="name">Your Password</label>
                      <input type="number"  { ...register("password") } placeholder="Your Password" />
                    

                       <label htmlFor="name">Confirm Password</label>
                      <input type="number"  { ...register("password2") } placeholder="Re- Password" />
                       <p className="text-danger">{authError}</p>
                      <input className="btn-color" type="submit" value="Register" />
                </form>}
                { isLoading && <Spinner className="text-center" animation="border" variant="success" /> }
                
                <div className="login-btn">
                     <Link className="text-center" to="/login">Already Have An Account? Please Login Here</Link>
                     <p>------------------------------- <b>OR</b>-------------------------</p>
               </div>
            </div>
            <div className="col-md-6 ">
                <img src={regLogo} alt="" />
           </div>
        </div>
    );
};

export default Register;