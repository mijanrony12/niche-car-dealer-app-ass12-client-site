import axios from 'axios';
import React from 'react';
import { Card } from 'react-bootstrap';
import swal from 'sweetalert';
import useProducts from '../../../Hooks/useProducts';

const ManageProduct = () => {
    const [ products,setProducts ] = useProducts();
   
    
     const deleteSingleProduct = (id) => {
                 const proceed = window.confirm('Are You Sure? You Want to Delete This Product')
                if (proceed)
                {
                    axios.delete(`http://localhost:5000/products/${id}`)
                                .then(res => {
                                   
                                    if (res.data.deletedCount)
                                    {
                                        swal("Thanks", "Your Product successfully Deleted Form Database!");
                                        const remainingProducts = products.filter(product => product._id !== id)
                                        setProducts(remainingProducts)
                                    }
                            })
                }
               
    }

    return (
        <>
            <div className="row gy-3">
                <h4 className="heading text-center">All Product Here</h4>
                  {
                    products.map(product =>
                        <div className="col-md-6">

                            <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={product.img} />
                                    <Card.Body>
                                       <Card.Title>{ product.name }</Card.Title>
                                           <h6>{product.price}</h6>
                                        <Card.Text>
                                                   {product.desc}
                                        </Card.Text>
                                    <button
                                        style={ {
                                            padding: '10px 20px',
                                            background: "#eb4d4b",
                                            color: '#ffffff',
                                            fontWeight: 'bold',
                                            border: 'none',
                                            borderRadius:'10px'
                                        } }
                                        onClick={()=>{deleteSingleProduct(product._id)}}
                                    >delete</button>
                                    </Card.Body>
                             </Card>

                        </div>
                        
                        )
                  }
            </div>
      </>
    );
};

export default ManageProduct;