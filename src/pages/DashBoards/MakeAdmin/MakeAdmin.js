import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import useAuth from '../../../Hooks/useAuth';

const MakeAdmin = () => {
      const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const {user} = useAuth()
    const onSubmit = data => {

        // data update
        axios.put('https://stormy-reef-80779.herokuapp.com/users/admin', data)
            .then(res => {
                
                if (res.data.modifiedCount)
                {
                    swal("Thanks!", "...Successfully Added!");
                }
            })
        reset()
    };
    return (
        //you can make admin
      <>
              <div className="text-center">
                <h4 className="heading mt-3">You Can Make Admin Any User</h4>
                 <form onSubmit={handleSubmit(onSubmit)} className=" order-details">
                         <label  htmlFor="name">give me Email</label>
                        <input className=" w-50 m-auto" { ...register("email") } placeholder="Your Name" />

                      <input className="btn-color mt-3 w-50 m-auto" type="submit" value="Confirm Admin" />
               </form>
            </div>
       </>
    );
};

export default MakeAdmin;