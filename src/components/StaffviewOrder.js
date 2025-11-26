import React, { useState, useEffect } from 'react';
import axios from 'axios';

function StaffviewOrder() {
  const [staffOrders, setStaffOrders] = useState([]);

  useEffect(() => {
    fetchStaffOrders();
  }, []);

  const fetchStaffOrders = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/stafforderdetails/${localStorage.getItem("staffid")}`
      );
      setStaffOrders(response.data.result);
    } catch (error) {
      console.error('Failed to fetch staff orders', error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Food Order Details</h1>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <ul className="list-group">
            {staffOrders.map(order => (
              <li key={order._id} className="list-group-item">
                 <strong>Customer Name:</strong> {order.customername}<br />
                <strong>Food Name:</strong> {order.foodid.foodname}<br />
                <strong>Quantity:</strong> {order.count}<br />
                <strong>Date:</strong> {new Date(order.date).toLocaleDateString()}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default StaffviewOrder;
