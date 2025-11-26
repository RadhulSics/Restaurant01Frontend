import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function ConfirmOrder() {
  const foodid = useParams();
  const navigate = useNavigate();

  const [food, setFood] = useState({});
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [order, setOrder] = useState({
    userId: localStorage.getItem("staffId"),
    quantity: 1,
    foodid: foodid.id,
    amount: 0,
    customername: "",
    date: new Date(),
  });

  const fetchFood = useCallback(async () => {
    try {
      const response = await axios.post(`http://localhost:5000/viewone/${foodid.id}`);
      setFood(response.data.data);
    } catch (error) {
      console.error("Error fetching food items:", error);
    }
  }, [foodid.id]);

  useEffect(() => {
    fetchFood();
  }, [fetchFood]);

  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!order.userId) {
      alert("Please login as staff first");
      return;
    }
    if (!deliveryAddress.trim()) {
      alert("Please enter a delivery address");
      return;
    }
    order.amount = parseInt(food.price) * parseInt(order.quantity);
    order.deliveryAddress = deliveryAddress;
    try {
      const result = await axios.post(`http://localhost:5000/staffaddorder/${foodid.id}`, order);
      console.log("result", result);
      console.log("orders", order);
      if (result.data.status === 200) {
        alert("Order Confirmed");
        navigate("/StaffviewOrder");
      } else {
        alert("Failed to confirm order");
      }
    } catch (error) {
      console.error("Error confirming order:", error);
      alert("Failed to confirm order");
    }
  };

  const handleCancel = () => {
    navigate("/Staffviefood");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        margin: 0,
      }}
    >
      <h4 style={{ textAlign: "center" }}>Order Details</h4>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "500px",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "5px",
        }}
      >
        <div className="mb-3">
          <label htmlFor="customername" className="form-label fw-semibold">Customer Name:</label>
          <input
            type="text"
            className="form-control"
            id="customername"
            name="customername"
            placeholder="Enter Customer Name"
            value={order.customername}
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="deliveryAddress" className="form-label fw-semibold">Delivery Address:</label>
          <textarea
            className="form-control"
            id="deliveryAddress"
            name="deliveryAddress"
            placeholder="Enter Delivery Address"
            value={deliveryAddress}
            onChange={(e) => setDeliveryAddress(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <h4>Food: {food.foodname}</h4>
          <h4>Price per item: ₹{food.price}</h4>
          <label>Quantity:</label>
          <input
            type="number"
            className="form-control"
            name="quantity"
            value={order.quantity}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <h3>Total Amount: ₹{parseInt(food.price) * parseInt(order.quantity)}</h3>
        <div className="d-grid gap-2 d-md-flex justify-content-md-between">
          <button type="button" className="btn btn-danger" onClick={handleCancel}>Cancel</button>
          <button type="submit" className="btn btn-success">Confirm Order</button>
        </div>
      </form>
    </div>
  );
}

export default ConfirmOrder;
