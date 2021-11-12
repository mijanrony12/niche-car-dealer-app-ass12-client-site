import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import swal from 'sweetalert';
import useAuth from '../../../Hooks/useAuth';

const AllOrders = () => {
     const [ orders, setOrders ] = useState([])
    const {user}=useAuth()
    
    useEffect(() => {
        axios.get(`https://stormy-reef-80779.herokuapp.com/orders`)
            .then(res => {
            setOrders(res.data)
                console.log(res.data)
                
        })
    }, [orders])
    
//data update from user
    const handleUpdate = id => {
        const proceed = window.confirm('Are You Sure? you to update this value!')
        if (proceed)
        {
            axios.put(`https://stormy-reef-80779.herokuapp.com/orders/${id}`)
            .then(res => {
                if (res.data.modifiedCount)
                {
                            swal({
                                title: "Good job!",
                                text: "Shipping Complete!",
                                icon: "success",
                                button: "Ok!",
                        });
                 }
             })
        }
        
    }
    return (
        //show all user data
        <>
              <div>
                   <h4 className="heading text-center">You can Manage All Orders</h4>
                    <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Quantity</th>
                                    <th>Address</th>
                                    <th>status</th>
                                    </tr>
                                </thead>
                               {orders.map(order =><tbody>
                                    <tr>
                                    <td>1</td>
                                    <td>{order.name}</td>
                                    <td>{order.email}</td>
                                    <td>{order.quantity}</td>
                                    <td>{order.address}</td>
                                       <button
                                       style={ {
                                            padding: '4px 12px',
                                            margin: '4px  0px 4px 16px',
                                            background: "#eb4d4b",
                                            color: '#ffffff',
                                            fontWeight: 'bold',
                                            border: 'none',
                                            borderRadius:'10px'
                                           } }
                                           onClick={()=> handleUpdate(order._id)}
                                       >{ order.status }</button>
                                    </tr>
                                </tbody>)}
                     </Table>
              </div>
        </>
    );
};

export default AllOrders;