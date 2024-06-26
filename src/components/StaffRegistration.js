import React, { useState } from "react";
 import axios from "axios";
import img2 from '../Assests/img2.jpeg'
import {useNavigate} from "react-router-dom"
//  import "./Staffregistration.css"
function Staffregister() {
  const navigate=useNavigate()
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
    <div style={{ position: "relative", width: "100%" }}>
    <img src={img2} alt="Background" style={{ width:"100%" }} />
    <div className="Ani" style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <form style={{ width: "50%", maxWidth: "500px",backgroundColor: "rgba(128, 128, 128, 0.600)" }}>
        <h2 className="text-center mt-4 mb-3">Staff Registration</h2>
          <div className="d-flex p-2">
            <label className="form-label mt-2 w-50" htmlFor="fname">
              First Name
            </label>
            <input
              id="fname"
              className="form-control "
              style={{ width: "20rem" }}
              type="text"
              name="fname"
              placeholder="First Name"
              required
              onChange={handleChange}
            ></input>
          </div>
          <div className="d-flex p-2">
            <label className="form-label mt-2 w-50" htmlFor="lname">
              Last Name:
            </label>
            <input
              id="lname"
              className="form-control "
              style={{ width: "20rem" }}
              type="text"
              name="lname"
              placeholder="Last Name"
              required
              onChange={handleChange}
            ></input>
          </div>
          <div className="d-flex p-2">
            <label className="form-label mt-2 w-50">D.O.B:</label>
            <input
              className="form-control "
              style={{ width: "20rem" }}
              type="date"
              name="dob"
              placeholder="Date of Birth"
              required
              onChange={handleChange}
            ></input>
          </div>
          <div className="d-flex p-2">
            <label className="form-label mt-2 w-50">Gender:</label>
            <div style={{ width: "20rem" }}>
              <input
                id="male"
                type="radio"
                name="gender"
                value="male"
                onChange={handleChange}
                required
                className="p-0 mx-2 form-check-input"
                style={{ marginTop: "0.8rem" }}
              ></input>
              <label className="form-label mt-2 " htmlFor="male">
                Male
              </label>
              <input
                id="female"
                type="radio"
                name="gender"
                value="female"
                onChange={handleChange}
                required
                className="p-0 mx-2 form-check-input"
                style={{ marginTop: "0.8rem" }}
              ></input>
              <label className="form-label mt-2" htmlFor="female">
                Female
              </label>
            </div>
          </div>
          <div className="d-flex p-2">
            <label className="form-label mt-2 w-50" htmlFor="email">
              Email:
            </label>
            <input
              id="email"
              className="form-control"
              style={{ width: "20rem" }}
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={handleChange}
            ></input>
          </div>
          <div className="d-flex p-2">
            <label className="form-label mt-2 w-50" htmlFor="password">
              Password:
            </label>
            <input
              id="password"
              className="form-control"
              style={{ width: "20rem" }}
              type="password"
              name="password"
              placeholder="Enter password"
              required
              onChange={handleChange}
            ></input>
          </div>
          <div className="d-flex p-2">
            <label className="form-label mt-2 w-50" htmlFor="confirmpassword">
              Confirm Password:
            </label>
            <input
              id="confirmpassword"
              className="form-control"
              style={{ width: "20rem" }}
              type="password"
              name="confirmpassword"
              placeholder="Enter Confirm password"
              required
              onChange={handleChange}
            ></input>
          </div>
          <div className="d-flex p-2">
            <label className="form-label mt-2 w-50" htmlFor="contact">
              Contact No.:
            </label>
            <input
              id="contact"
              className="form-control"
              style={{ width: "20rem" }}
              type="tel"
              name="contactno"
              placeholder="Contact No."
              maxLength={10}
              minLength={10}
              required
              onChange={handleChange}
            ></input>
          </div>
          
          <div className="text-center mt-3 mb-3">
            <button className="w-25 btn btn-success" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Staffregister;
