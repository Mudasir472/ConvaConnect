import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
export const SignUp = () => {

  const history = useNavigate();

  // const [email,setEmail] = useState('')
  // const [password,setPassword]  = useState('')

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  })
  async function submit(e) {
    e.preventDefault();

    try {
      const response=await axios.post("http://localhost:8000/SignUp", userData)
      console.log(response);
      if(response.status===201){
        console.log("success");
        // history('/Home');
        toast.success("Registered successfully!!");
        setUserData({
          name:'',
          email:'',
          password:''
        })
      }
    }
    catch (e) {
      console.log(e);
      toast.error('Already Registered!!')
    }
  }
  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }
  return (
    <div className="SignUp">
      <main class="form-signin m-auto">
        <form method='post' action="/signup" id="signup-form" onSubmit={submit}>
          {/* <img class="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" style={{width : "72",height : "57"}} /> */}
          <h1 class="h3 mb-3 fw-normal">Please Sign Up</h1>

          <div class="form-floating mt-4">
            <input type="text" class="form-control" placeholder="name@example.com" id="Name" name='name' value={userData.name} onChange={handleInputChange} />
            <label for="floatingInput">Full Name</label>
          </div>
          <div class="form-floating mt-4">
            <input type="email" class="form-control" id="Email" placeholder="name@example.com"  name='email' value={userData.email} onChange={handleInputChange} required />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating mt-4 mb-4">
            <input type="password" class="form-control" id="Password" placeholder="Password" name='password' value={userData.password} onChange={handleInputChange} />
            <label for="floatingPassword">Create Password</label>
          </div>


          <button class="btn btn-primary w-100 py-2" type="submit" onClick={submit}>Sign Up</button>
          <p class="mt-5 mb-3 text-body-secondary">Already Have An Account ? <a href="">Log In</a></p>
        </form>
      </main>
    </div>
  );
};