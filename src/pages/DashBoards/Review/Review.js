import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import useAuth from '../../../Hooks/useAuth';

const Review = () => {
      const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const {user} = useAuth()
    const onSubmit = data => {
        
        axios.post('https://stormy-reef-80779.herokuapp.com/review', data)
            .then(res => {
                if (res.data.insertedId)
                {
                    swal("Thanks", "we got your feedback!");
                }
          
            })
        reset()
    };

    return (
        <div>
              <h3 className="heading mt-3 text-center">Please Give Your Feedback</h3>
                     <form onSubmit={handleSubmit(onSubmit)} className=" order-details">
                         <label htmlFor="name">Your Name</label>
                        <input defaultValue={user.displayName} { ...register("name") } placeholder="Your Name" />
                    
                       <label htmlFor="email">Your Email</label>
                        <input defaultValue={user.email} {...register("email", { required: true })} placeholder="Your Email" />
                        { errors.email && <span>This field is required</span> }
                    
                       <label htmlFor="rating">Rating</label>
                      <input  { ...register("rating") } placeholder="0 - 5" />
                    
                       <label htmlFor="name">Your Address</label>
                       <textarea style={{width:"100%"}}  { ...register("review") } placeholder="What's on your mind?" />
            
                <input className="btn-color w-50 mt-3 m-auto" type="submit" value="Review" />
                
               </form>
        </div>
    );
};

export default Review;