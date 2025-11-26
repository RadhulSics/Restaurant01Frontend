import axios from "axios";
import React, { useState } from "react";



function StaffforgotPassword() {
  const [Data, setData] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });
  const handleChange = (a) => {
    setData({ ...Data, [a.target.name]: a.target.value });
  };
  
  const handleSubmit = (a) => {
    a.preventDefault();
    console.log(Data);
    if (Data.password !== Data.confirmpassword) {
      alert("Password and Confirm password must be same");
    } else {
      axios
      .post("http://localhost:5000/staffforgotpassword",Data)
      .then((res)=>{
        console.log(res);
        if(res.data.status === 200){
        alert(res.data.msg);
        window.location.reload(false);
        }
        else{
          alert(res.data.msg);
        }
      })
      .catch((err)=>{
        console.log(err);
      });
    }
  };
  return (
    <div className="staffforgotpassword mb-5" style={{ background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <form>
        <div
          className="form-control mx-auto d-block"
          style={{
            width: "25rem",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            textAlign: "center",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="p-2 w-100">
            <h2 className="text-center mt-3 mb-3" style={{ color: "black", textDecoration: "none" }}>
              Staff Reset Password
            </h2>
          </div>
          <div className="d-flex justify-content-center">
            <label className="form-label mt-2" style={{ width: "9rem" }}>
              Email:
            </label>
            <input
              className="form-control"
              style={{ width: "13rem" }}
              name="email"
              placeholder="Enter Username"
              type="email"
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className="d-flex justify-content-center">
            <label className="form-label mt-2" style={{ width: "9rem" }}>
              Enter New Password:
            </label>
            <input
              className="form-control"
              style={{ width: "13rem" }}
              name="password"
              placeholder="Enter Password"
              type="password"
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className="d-flex justify-content-center">
            <label className="form-label mt-2" style={{ width: "9rem" }}>
              Confirm Password:
            </label>
            <input
              className="form-control"
              style={{ width: "13rem" }}
              name="confirmpassword"
              placeholder="Re-enter the Password"
              type="password"
              onChange={handleChange}
              required
            ></input>
          </div>

          <div className="text-center mt-3 mb-3">
            <button className="w-25 btn btn-primary" onClick={handleSubmit}>
              Change
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default StaffforgotPassword;