import React, { useState } from "react";
import axios from "axios"
import {useNavigate} from "react-router-dom";
function Projectreg() {
  const navigate=useNavigate()
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    password: "",
    confirmpassword: "",
    email: "",
    gender: "",
    condition: "",
  });
  
  function Change(e) {
    setState({ ...state, [e.target.name]: e.target.value });
     
  }
 async function Submit(e) {
    e.preventDefault();
    
    // alert("You registered succesfully")
    console.log(state);
    if (state.password !== state.confirmpassword) {
      alert("Password not matched");
    } else {
      alert("You registered succesfully"); 
      const result= await axios.post("http://localhost:5000/addSchema",state)
      console.log("result",result);
      navigate("/Customerlogin")
     
    }
  }
  return (
    <div class=" Projectregmaindiv ">
    <div class=" container1   "
    //   class="form-control d-flex mx-auto"
    //   style={{ width: "30rem", marginTop: "8rem", backgroundColor:"rgba" }}
    >
      
      
      <form onSubmit={Submit}>
      <h1 className="form-title">Create Your Account</h1>
      <div class="container">
       </div>
        <div class="d-flex p-2">
          <label class="form-label mt-2 w-50">Firstname:</label>
          <input
            class="form-control"
            type="text"
            name="firstname"
            onChange={Change}
            required
          ></input>
        </div>

        <div class="d-flex p-2">
          <label class="form-label mt-2 w-50">Lastname:</label>
          <input
            class="form-control"
            type="text"
            name="lastname"
            onChange={Change}
            required
          ></input>
        </div>

        <div class="d-flex p-2">
          <label class="form-label mt-2 w-50">Password:</label>
          <input
            class="form-control"
            type="password"
            name="password"
            onChange={Change}
            required
          ></input>
        </div>

        <div class="d-flex p-2">
          <label class="form-label mt-2 w-50">ConfirmPassword:</label>
          <input
            class="form-control"
            type="password"
            name="confirmpassword"
            onChange={Change}
            required
          ></input>
        </div>

        <div class="d-flex p-2">
          <label class="form-label mt-2 w-50">Email:</label>
          <input
            class="form-control"
            type="email"
            name="email"
            onChange={Change}required></input>
        </div>

        <div class="d-flex p-2">
          <label class="d-flex p-2">Gender:</label>
          <input type="radio" name="gender" onChange={Change}required></input>{" "}
          <label class="d-flex p-2">Male</label>
          <input type="radio" name="gender" onChange={Change}required></input>{" "}
          <label class="d-flex p-2">Female</label>
        </div>
        


        <div class="text-center mt-3 mb-3">
          <input
            type="checkbox"
            name="condition"
            onChange={Change}
            required
          ></input>
          <label>I accept Terms and condition</label><br/>
         
          <button  onClick={Change} className='btn btn-primary' type="Register">Register</button><br/>
          <p>already have an account?<a href="/Customerlogin">Log in</a></p>
         
        </div>
      </form>
    </div>
    </div>
  );
}

export default Projectreg;