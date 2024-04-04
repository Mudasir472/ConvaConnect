import React, { useState } from "react";
import "./Login.css"
import toast from "react-hot-toast";

import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Login = () => {

  const history = useNavigate();

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  })

  async function submit(e) {
    e.preventDefault();
    try {
      const response=await axios.post("http://localhost:8000/Login", userData)
      // console.log(response);
      if(response.status===202){
        console.log("success");
        history('/userDashboard');
        toast.success("Login successfully!!");
        // setUserData({
        //   name:'',
        //   email:'',
        //   password:''
        // })
      }
      else if(response.status===502){
        console.log("Not Successs");
        toast.success("Invalid Email or password");
      }
    }
    catch (e) {
      console.log("error",e)
    }
  }

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }
  return (
    <div className="Loginn">
      <main className="form-signin m-auto">
        <form>
          <img className="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" style={{ width: "72", height: "57" }} />
          <h1 className="h3 mb-3 fw-normal">Please Log in</h1>

          <div className="form-floating mt-4">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name='email' value={userData.email} onChange={handleInputChange} />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating mt-4 mb-4">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name='password' value={userData.password} onChange={handleInputChange} />
            <label for="floatingPassword">Password</label>
          </div>

          <div className="form-check text-start my-3">
            <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
            <label className="form-check-label mb-3" for="flexCheckDefault">
              Remember me
            </label>
          </div>
          <button className="btn btn-primary w-100 py-2" type="submit" onClick={submit}>Log in</button>
          <p className="mt-5 mb-3 text-body-secondary">© 2024</p>
        </form>
      </main>
    </div>
  );
};