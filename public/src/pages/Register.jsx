import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import logo from "../Assets/Logo.svg";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import { registerRoute } from '../utils/APIroutes';

export default function Register() {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  
  const toastOptions = {
    position: 'bottom-right',
    autoClose: 8000,
    pauseOnHover: true,
    theme: 'dark'
  };
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const handleValidation=()=>{
const {username,email,password,confirmPassword}=values
if(password!==confirmPassword){
  toast.error("password and current passowrd should be same",toastOptions)
  return false;
}
else if(username.length<3){
  toast.error("username should be greater than 3 characters",toastOptions)
  return false;
}
 else if(password.length<8){
  toast.error("password should be greater than 8 characters",toastOptions)
  return false;
}
else if(password.length<8){
  toast.error("password should be greater than 8 characters",toastOptions)
  return false;
}
else if(email===''){
  toast.error("password should be greater than 8 characters",toastOptions)
  return false;
}
return true;
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    if(handleValidation()){ const { password, username, email } = values;
    const{data}=await axios.post(registerRoute,{email,username,password
    })
  
  
     
  } 
  };

  
  

  return (
    <>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <div className='brand'>
            <img src={logo} alt='' />
          </div>
          <input type='text' placeholder='username' name='username' onChange={handleChange} />
          <input type='text' placeholder='email' name='email' onChange={handleChange} />
          <input type='password' placeholder='password' name='password' onChange={handleChange} />
          <input type='password' placeholder='confirm password' name='confirmPassword' onChange={handleChange} />
          <button type='submit'>Create User</button>
          <span>already have an account?<Link to='/Login'>Login</Link></span>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}

