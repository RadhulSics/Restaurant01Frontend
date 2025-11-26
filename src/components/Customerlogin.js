import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Customerlogin() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function Change(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  async function submit(e) {
    e.preventDefault();
    try {
      const result = await axios.post(
        "http://localhost:5000/customerlogin",
        data
      );
      console.log(result.data);
      if (result.data.status === 200) {
        alert("Login successful");
        localStorage.setItem("custId", result.data.data._id);
        localStorage.setItem("fname", result.data.data.firstname);
        navigate("/Customerviewmenu");
      } else {
        alert("Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Login failed. Please try again.");
    }
  }

  return (
    <div className="customerlogin d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg" style={{ width: "30rem", backgroundColor: "white" }}>
        <div className="card-body p-4">
          <h1 className="card-title text-center mb-4" style={{ color: "#667eea" }}>LOG IN</h1>
          <form onSubmit={submit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input
                className="form-control"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your valid email"
                onChange={Change}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password:</label>
              <input
                className="form-control"
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                onChange={Change}
                required
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">Log in</button>
            </div>
            <div className="text-center mt-3">
              <a href="/Forgotpassword" className="text-decoration-none">Forgot your Password?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Customerlogin;
