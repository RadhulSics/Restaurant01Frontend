
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Admindashboard from './Admindashboard';


const Stafforders = () => {
  const [staffOrders, setStaffOrders] = useState([]);

  useEffect(() => {
    fetchStaffOrders();
  }, []);

  const fetchStaffOrders = async () => {
    try {
      const response = await axios.get("http://localhost:5000/viewallstafforders");
      setStaffOrders(response.data.result);
    } catch (error) {
      console.error('Failed to fetch staff orders', error);
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <Admindashboard />
      <div className="staff-orders-container" style={{ flex: 1, padding: '20px' }}>
        <h1>Staff Order Details</h1>
        <ul className="staff-orders-list">
          {staffOrders.map(order => (
            <li key={order._id} className="staff-order-item">
              <strong className="customer-name">Customer Name:</strong> {order.customername}<br />
              <strong className="food-name">Food Name:</strong> {order.foodid.foodname}<br />
              <strong className="quantity">Quantity:</strong> {order.count}<br />
              <strong className="date">Date:</strong> {new Date(order.date).toLocaleDateString()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Stafforders;

