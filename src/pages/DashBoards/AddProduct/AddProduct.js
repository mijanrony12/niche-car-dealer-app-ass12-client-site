import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';

const AddProduct = () => {
     const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const onSubmit = data => {

        //data post at database mongodb
        axios.post('https://stormy-reef-80779.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId)
                {
                    swal({
                        title: "Good job!",
                        text: "Your product add database!",
                        icon: "success",
                        button: "Ok!",
                        });
                }
          
            })
        reset()
    };
    
    return (
        //create form for add product
        <div>
            <h3 className="heading mt-3 text-center">Add a Product</h3>
                     <form onSubmit={handleSubmit(onSubmit)} className=" order-details">
                         <label htmlFor="name">Product Name</label>
                        <input { ...register("name") } placeholder="Product Name" />
                    
                       <label htmlFor="price">Price</label>
                        <input  {...register("price", { required: true })} placeholder="Product price" />
                        { errors.email && <span>This field is required</span> }
                    
                       <label htmlFor="rating">product Rating</label>
                      <input  { ...register("rating") } placeholder="Product Rating" />
                    
                       <label htmlFor="image">Image Link</label>
                       <input  { ...register("img") } placeholder="Put Image Link" />
                    
                        <label htmlFor="desc">Description</label>
                        <textarea style={{width:'100%'}}  {...register("desc")}  placeholder="description"/>
            
                      <input className="btn-color w-50 m-auto mt-3" type="submit" value="Add Product" />
               </form>
        </div>
    );
};

export default AddProduct;