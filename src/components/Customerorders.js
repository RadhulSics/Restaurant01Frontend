import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import Admindashboard from './Admindashboard';

const Customerorders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      
      const response = await axios.get("http://localhost:5000/viewCustomerOrders");
      console.log(response.data.result); 
      setOrders(response.data.result);
    } catch (error) {
      console.error('Failed to fetch orders', error);
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <Admindashboard />
      <Container style={{ flex: 1, padding: '20px' }}>
        <h1 className="title">Customer Orders</h1>
        <div>
          {orders.map(order => (
            <div className="order-container" key={order._id}>
              <div className="order-details">
                <p className="customer-name">
                  Customer Name: {order.userId ? `${order.userId.firstname} ${order.userId.lastname}` : 'N/A'}
                </p>
                <p>Delivery Address: {order.deliveryAddress}</p>
                <p>Food Name: {order.foodid ? order.foodid.foodname : "N/A"}</p>
                <p>Quantity: <span className="quantity">{order.quantity}</span></p>
                <p>Amount: <span className="amount">₹{order.amount}</span></p>
                <p className={`payment-status ${order.paymentstatus ? 'paid' : 'pending'}`}>
                  Payment Status: {order.paymentstatus ? 'Paid' : 'Pending'}
                </p>
                <p>Order ID: {order._id}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Customerorders;
