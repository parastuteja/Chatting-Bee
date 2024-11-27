import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import logo from "../Assets/Logo.svg";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import { registerRoute } from '../utils/APIroutes';

function Register() {
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationResponse = handleValidation();
    if (validationResponse.isValid) {
      const { password, username, email } = values;
      try {
        const { data } = await axios.post(registerRoute, { username, email, password });
        toast.success(data.message, toastOptions); // Assuming the API response has a message
      } catch (error) {
        toast.error(error.response.data.message || 'An error occurred', toastOptions);
      }
    } else {
      toast.error(validationResponse.message, toastOptions);
    }
  };

  const handleValidation = () => {
    const { password, confirmPassword, username, email } = values;
    if (!username || !email || !password || !confirmPassword) {
      return { isValid: false, message: 'All fields are required.' };
    }
    if (password !== confirmPassword) {
      return { isValid: false, message: 'Passwords do not match.' };
    }
    return { isValid: true };
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
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

export default Register;