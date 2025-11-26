import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Staffregister() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    fname: "",
    lname: "",
    dob: "",
    gender: "",
    password: "",
    confirmpassword: "",
    email: "",
    contactno: "",
  });

  const handleChange = (a) => {
    setData({ ...data, [a.target.name]: a.target.value });
  };

  const handleSubmit = (a) => {
    a.preventDefault();
    if (data.password === data.confirmpassword) {
      console.log(data);
      axios
        .post("http://localhost:5000/staffregistration", data)
        .then((res) => {
          console.log(res);
          if (res.data.status === 200) {
            alert(res.data.msg);
            navigate("/Staffslogin");
            window.location.reload(false);
          } else {
            alert(res.data.msg);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Password and Confirm password must be same");
    }
  };

  return (
    <div className="staffregistration d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg" style={{ width: "40rem", backgroundColor: "white" }}>
        <div className="card-body p-4">
          <h2 className="card-title text-center mb-4" style={{ color: "#667eea" }}>Staff Registration</h2>
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="fname" className="form-label">First Name</label>
                <input
                  id="fname"
                  className="form-control"
                  type="text"
                  name="fname"
                  placeholder="First Name"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="lname" className="form-label">Last Name</label>
                <input
                  id="lname"
                  className="form-control"
                  type="text"
                  name="lname"
                  placeholder="Last Name"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="dob" className="form-label">D.O.B</label>
                <input
                  id="dob"
                  className="form-control"
                  type="date"
                  name="dob"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Gender</label>
                <div>
                  <div className="form-check form-check-inline">
                    <input
                      id="male"
                      type="radio"
                      name="gender"
                      value="male"
                      onChange={handleChange}
                      required
                      className="form-check-input"
                    />
                    <label className="form-check-label" htmlFor="male">Male</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      id="female"
                      type="radio"
                      name="gender"
                      value="female"
                      onChange={handleChange}
                      required
                      className="form-check-input"
                    />
                    <label className="form-check-label" htmlFor="female">Female</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                id="email"
                className="form-control"
                type="email"
                name="email"
                placeholder="Email"
                required
                onChange={handleChange}
              />
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  id="password"
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="confirmpassword" className="form-label">Confirm Password</label>
                <input
                  id="confirmpassword"
                  className="form-control"
                  type="password"
                  name="confirmpassword"
                  placeholder="Enter Confirm password"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="contact" className="form-label">Contact No.</label>
              <input
                id="contact"
                className="form-control"
                type="tel"
                name="contactno"
                placeholder="Contact No."
                maxLength={10}
                minLength={10}
                required
                onChange={handleChange}
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-success">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Staffregister;
