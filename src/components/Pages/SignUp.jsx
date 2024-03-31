import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {

  const history = useNavigate();

  const [email,setEmail] = useState('')
  const [password,setPassword]  = useState('')

  async function submit(e){
    e.preventDefault();

    try{
      await axios.post("http://localhost:5174/SignUp",{
        email,password
      })
      .then(res => {
        if (res.data == "Exist") {
          alert("User Already exists")
          
        }
        else if (res.data == "notExist") {
          history("/Home")
        }
      })
      .catch(e => {
        alert("wrong details")
        console.log(e)
      })

    }
    catch(e){
      console.log(e)
    }
  }
  return (
    <div className="SignUp">
      <main class="form-signin m-auto">
        <form>
          {/* <img class="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" style={{width : "72",height : "57"}} /> */}
            <h1 class="h3 mb-3 fw-normal">Please Sign Up</h1>

            <div class="form-floating mt-4">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Full Name</label>
            </div>
            <div class="form-floating mt-4">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating mt-4 mb-4">
              <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Create Password</label>
            </div>

            
            <button class="btn btn-primary w-100 py-2" type="submit">Sign Up</button>
            <p class="mt-5 mb-3 text-body-secondary">Already Have An Account ? <a href="">Log In</a></p>
        </form>
      </main>
    </div>
  );
};