import React from 'react';
import './OrderPlace.css'
import { useForm } from 'react-hook-form';
import order from '../../images/order.jpg'
import axios from 'axios';
import swal from 'sweetalert';
import useAuth from '../../Hooks/useAuth';
const OrderPlace = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user} = useAuth()
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/orders', data)
            .then(res => {
                if (res.data.insertedId)
                {
                    swal("Thanks", "Your order Complete!");
                }
            console.log(res.data);
        })
    };
    return (
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