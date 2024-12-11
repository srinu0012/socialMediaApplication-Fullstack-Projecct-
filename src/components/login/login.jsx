import { useEffect, useRef, useState } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
const registerError=useRef("")
const loginError=useRef("")

const navigate =useNavigate()
useEffect(()=>{
  const token=localStorage.getItem('token')
  if(token){
    navigate("/Home")
  }
},[])
// registration from submit validation
function REGsubmit(e){
e.preventDefault()
function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}
let isvalidEmail=validateEmail(e.target[1].value)
let ispassvalid=e.target[2].value===e.target[3].value

if(isvalidEmail && ispassvalid){
  async function registration(){
    try{
      let x= await axios.post("https://myscocialmedia-node-js-mysql2.onrender.com/register",{
        "userName":e.target[0].value,
        "email":e.target[1].value,
        "password":e.target[2].value
    })
     registerError.current.innerText="register sucessfully"
     registerError.current.classList="registersuccess"
    
    }catch(err){

       registerError.current.innerText="user already existed"
     registerError.current.classList="registerError"
    }
  
   
   }
   registration()
}else{

  registerError.current.innerText="invalid details"
  registerError.current.classList="registerError"
}




}



// login form submit function 

function loginsubmit(e){
  e.preventDefault()
  async function getdetails(params) {
    
    try{
      let data= await axios.post("https://myscocialmedia-node-js-mysql2.onrender.com/login",{
        "userName":e.target[0].value,
        "password":e.target[1].value
    })

   if(data.data!="invalid credentials"){
    localStorage.setItem('token', data.data);

   
    const token=localStorage.getItem('token')
 
    if(token){
      navigate("/Home")
    }
   }else{
    loginError.current.innerText=data.data
   }

    }catch(err){
      e.preventDefault()
      loginError.current.classList="registerError"
      loginError.current.innerText="invalid details"
      // console.log(err)
    }

  }
  getdetails()
}

  return (
    <>
    <div className="registerHeading">
        <h2>Social Media Application</h2>
    </div>
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form className="loginRegisterFrom" onSubmit={REGsubmit} >
            <h1 className="loginRegisterH1">Register</h1>
            <input
              className="loginRegisterInput"
              placeholder="Username"
              name="r_user"
              id="r_user"
              required
            />
            <input
              className="loginRegisterInput"
              placeholder="email"
              name="r_email"
              id="r_email"
              required
              
            />
            <input
              className="loginRegisterInput"
              placeholder="Password"
              name="r_pass"
              id="r_pass"
              required
            />
             <input
              className="loginRegisterInput"
              placeholder="Conform Password"
              required
            />
            <p>Forgot your password?</p>
            <input type="submit" className="loginRegisterButton" />
            <small id="" ref={registerError} ></small>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form className="loginRegisterFrom" action="/Home" onSubmit={loginsubmit}>
            <h1 className="loginRegisterH1">Login</h1>
            <input
              className="loginRegisterInput"
              placeholder="Username"
              name="l_user"
              id="l_user"
              required
            />
            <input
              className="loginRegisterInput"
              placeholder="Password"
              required
            />
            <p id="forgot">Forgot your password?</p>
            <input type="submit"  className="loginRegisterButton"/>
            <small ref={loginError}></small>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="bg-bubbles">
              <li className="loginRegisterLi"></li>
              <li className="loginRegisterLi"></li>
              <li className="loginRegisterLi"></li>
              <li className="loginRegisterLi"></li>
              <li className="loginRegisterLi"></li>
              <li className="loginRegisterLi"></li>
              <li className="loginRegisterLi"></li>
              <li className="loginRegisterLi"></li>
              <li className="loginRegisterLi"></li>
              <li className="loginRegisterLi"></li>
            </div>

            <div className="overlay-panel overlay-left">
              <h1 className="loginRegisterH1">Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className="loginRegisterButton"
                onClick={() => {
                  container.classList.remove("right-panel-active");
                }}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="loginRegisterH1">Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                className="loginRegisterButton"
                onClick={() => {
                  container.classList.add("right-panel-active");
                }}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
