import React from 'react';
import './OrderPlace.css'
import { useForm } from 'react-hook-form';
import order from '../../images/order.jpg'
import axios from 'axios';
import swal from 'sweetalert';
import useAuth from '../../Hooks/useAuth';
import { useHistory } from 'react-router';

const OrderPlace = () => {
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const { user } = useAuth()
    const history = useHistory()
    const onSubmit = data => {
        data.status='pending...'
        axios.post('https://stormy-reef-80779.herokuapp.com/orders', data)
            .then(res => {
                if (res.data.insertedId)
                {
                    swal("Thanks", "Your order Complete!");
                    history.push('/');
                }
          
            })
        reset()
    };
    return (
        //you can order from here
        <div className="row">
                
            <div className="col-md-6">
                <h3 className="heading mt-3 text-center">Please Confirm Your Order</h3>
                     <form onSubmit={handleSubmit(onSubmit)} className=" order-details">
                         <label htmlFor="name">Your Name</label>
                        <input defaultValue={user.displayName} { ...register("name") } placeholder="Your Name" />
                    
                       <label htmlFor="name">Your Email</label>
                        <input defaultValue={user.email} {...register("email", { required: true })} placeholder="Your Email" />
                        { errors.email && <span>This field is required</span> }
                    
                       <label htmlFor="name">Your Phone</label>
                      <input  { ...register("phone") } placeholder="Your Number" />
                    
                       <label htmlFor="name">Your Address</label>
                       <input  { ...register("address") } placeholder="Your Address" />
                    
                        <label htmlFor="name">Total Quantity</label>
                        <input  {...register("quantity")}  placeholder="Quantity"/>
            
                      <input className="btn-color" type="submit" value="Confirm Purchase" />
               </form>
            </div>
            <div className="col-md-6 vector">
                 <img src={order} alt="" />
           </div>
        </div>
    );
};

export default OrderPlace;