import React from 'react'
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';

import logo from "../Assets/Logo.svg"
function Register() {
  const[values,setvalues]=useState({
    username:'',
    email:"",
    password:"",
    confirmPassword:'',

  })
    const handleSubmit=(event)=>{event.preventDefault();alert('form')}
    const handleChange=(event)=>{
      setvalues({...values,[event.target.name]:event.target.value})

    }
  return (
    <>

 <div className='container'>
        <form onSubmit={(event)=>handleSubmit(event)}>
            <div className='brand'>
                <img src={logo} alt=''/>
                
            </div>
            <input type='text' placeholder='username'name='username' onChange={(e)=>handleChange(e)}/>
            <input type='text' placeholder='email'name='email' onChange={(e)=>handleChange(e)}/>
            <input type='password' placeholder='password'name='confirm password' onChange={(e)=>handleChange(e)}/>

            <input type='password' placeholder='confirm password'name='password' onChange={(e)=>handleChange(e)}/>

<button type='submit'>Create User</button>
<span>already have an account?<Link to='/Login'>Login</Link></span>
        </form>
        </div>
    
    </>
  )
}



export default Register