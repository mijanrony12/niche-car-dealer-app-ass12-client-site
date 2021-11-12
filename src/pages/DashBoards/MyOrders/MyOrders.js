import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import swal from 'sweetalert';
import useAuth from '../../../Hooks/useAuth';

const MyOrders = () => {
    const [ orders, setOrders ] = useState([])
    const {user}=useAuth()
    
    useEffect(() => {
        axios.get(`https://stormy-reef-80779.herokuapp.com/orders?email=${user.email}`)
            .then(res => {
            setOrders(res.data)
                console.log(res.data)
        })
    }, [])
    
    const handleDelete = id => {
       const proceed = window.confirm('Are You Sure? You Want to Delete This Product')
                if (proceed)
                {
                    axios.delete(`https://stormy-reef-80779.herokuapp.com/orders/${id}`)
                                .then(res => {
                                   
                                    if (res.data.deletedCount)
                                    {
                                          swal({
                                                title: "Good job!",
                                                text: "Your order delete Complete!",
                                                icon: "success",
                                                button: "Ok!",
                                         });
                                        const remainingProducts = orders.filter(product => product._id !== id)
                                        setOrders(remainingProducts)
                                    }
                            })
                }
    }
    
    return (
        <>
              <div>
                   <h4 className="heading text-center">You can Manage All Orders</h4>
                    <Table striped bordered hover variant="dark">
                                <thead>
                                    <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Quantity</th>
                                    <th>Confirm</th>
                                    
                                    </tr>
                                </thead>
                               {orders.map(order =><tbody>
                                    <tr>
                                    <td>1</td>
                                    <td>{order.name}</td>
                                    <td>{order.email}</td>
                                    <td>{order.quantity}</td>
                                       <td><button
                                            style={ {
                                            padding: '4px 12px',
                                            margin: '4px  0px 4px 16px',
                                            background: "#eb4d4b",
                                            color: '#ffffff',
                                            fontWeight: 'bold',
                                            border: 'none',
                                            borderRadius:'10px'
                                           } }
                                           onClick={ () => handleDelete(order._id) }
                                       >delete</button></td>
                                     
                                    </tr>
                                </tbody>)}
                     </Table>
              </div>
        </>
    );
};

export default MyOrders;