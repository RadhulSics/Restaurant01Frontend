import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Staffslogin() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    axios.post("http://localhost:5000/stafflogin", data)
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          alert(res.data.msg);
          localStorage.setItem("staffId", res.data.result._id);
          localStorage.setItem("sfname", res.data.result.fname);
          navigate("/staffviewfood");
          window.location.reload(false);
        } else {
          alert(res.data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form>
        <div className="mx-auto d-block" style={{ width: "21rem", backgroundColor: "hsla(0, 0%, 100%, 1.00)" }}>
          <div className="p-2 w-100">
            <h2 className="text-center mt-3 mb-3" style={{ textDecoration: "none", color:'blue' }}>Staff Login</h2>
          </div>
          <div className="d-flex p-2">
            <label className="form-label mt-2" style={{ width: "5rem" }}>Username:</label>
            <input
              className="form-control"
              style={{ width: "13rem" }}
              placeholder="Enter email"
              type="email"
              onChange={handleChange}
              name="email"
            />
          </div>
          <div className="d-flex p-2">
            <label className="form-label mt-2" style={{ width: "5rem" }}>Password:</label>
            <input
              className="form-control"
              style={{ width: "13rem" }}
              placeholder="Enter Password"
              type="password"
              name="password"
              onChange={handleChange}
            />
          </div>
          <div className="text-center mt-3 mb-3">
            <button className="w-50 btn btn-primary" onClick={handleSubmit}>
              Sign in
            </button>
          </div>
          <div className="text-center mt-3 mb-3">
            <a href="/StaffforgotPassword">Forget password</a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Staffslogin;
