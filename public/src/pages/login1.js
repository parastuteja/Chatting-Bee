import React from 'react'

function login1() {
  return (
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
  )
}

export default login1