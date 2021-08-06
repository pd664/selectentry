import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

async function loginUser(credentials) {
  return fetch('/login', {
    method: 'POST',
    // headers: {
    //   'Content-Type': 'application/json'
    // },
    // body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

export default function Login({setToken}) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState("")


  useEffect(() => {
    loginUser()
  })
  
  const handleSubmit = async e => {
    e.preventDefault();

    if (username === "anil" && password === "123") {
      const token = await loginUser({
        username,
        password
      });
      setToken(token);
    }
    else {
      setError("please enter a valid username and password")
    }
    
  }

  return(
    <>
    <form onSubmit={handleSubmit}>
      <label>
        <p>Username</p>
        <input type="text" onChange={e => setUserName(e.target.value)}/>
      </label>
      <label>
        <p>Password</p>
        <input type="password" onChange={e => setPassword(e.target.value)} />
      </label>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
    <h1>{error}</h1>
    </>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}


// export default Login