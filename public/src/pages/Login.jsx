import React, { useState, useEffect } from "react";
import axios from "axios";

import { useNavigate, Link } from "react-router-dom";
import Logo from '../Assets/Logo.svg'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginRoute, } from "../utils/APIroutes";

export default function Login() {
  const navigate = useNavigate();
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
      navigate("/");
    }
  })

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleValidation = () => {
    const { password,  username } = values;
    
      if (username.length < 3) {
      toast.error(
        "Username should be greater than 3 characters.",
        toastOptions
      );
      return false;
    
    } 
else if(password===''){
  toast.error("password shouldn't be empty")
}
    return true;
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      const {  username, password } = event.target.elements
      try {
        const { data } = await axios.post(loginRoute, {
          username:username.value,
          password:password.value,
        });
  
        if (data.status === false) {
          toast.error(data.msg, toastOptions);
        }
        if (data.status === true) {
          localStorage.setItem(
            process.env.REACT_APP_LOCALHOST_KEY,
            JSON.stringify(data.user)
          );
          navigate("/");
        }
      } catch (error) {
       
        if (error.response) {
         
          toast.error(`Error: ${error.response.data.msg || 'An error occurred'}`, toastOptions);
        } else if (error.request) {
          toast.error("Network error: No response received from server.", toastOptions);
        } else {
        
          toast.error(`Error: ${error.message}`, toastOptions);
        }
      }
    }
  }

  return (
    <>
      <div className="container">
        <form action="" onSubmit={handleSubmit}>
          <div className="brand">
            <img src={Logo} alt="logo" />
           
          </div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => handleChange(e)}
          />
         
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          
          <button type="submit">Login</button>
          <span>
            Didn't Have An Account? <Link to="/Register">Register Here</Link>
          </span>
        </form>
    </div>
      <ToastContainer />
    </>
  );
}