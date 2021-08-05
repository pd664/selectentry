import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

async function loginUser(credentials) {
  const host = process.env.BACKEND_URL
  console.log(host)
  return fetch(`${host}/login`
//   , {
//   //   headers: {
//   //     'Content-Type': 'application/json'
//   //   },
//   //   body: JSON.stringify(credentials)
//   // })
//     .then(data => data.json())
//  }
  )}

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
// import React, {useState} from 'react'


// const Login = (props) => {
   
//     const [username, setUsername] = useState("")
//     const [password, setPassword] = useState("")
//     const [error, setError] = useState(null);

    
//     const done = () => {
//         if(username === "anil" && password === "anil935") {
//              props.history.push('/home')
//         }
//         else {
//             setError("Please enter a valid username and password")
//          }
//     }

//     return (
//         <>
//         <form onSubmit={done}>
//             <div className="form-group">
//                 <label>username</label>
//                 <input type="username" className="form-control" onChange= {(e) => { setUsername(e.target.value)}} id="exampleInputEmail1"  placeholder="Enter Username" />
//             </div>

//             <div className="form-group">
//                 <label>Password</label>
//                 <input type="password" className="form-control" onChange= {(e) => { setPassword(e.target.value)}} id="exampleInputPassword1" placeholder="Password" />
//             </div>
            
//             <button type="submit" className="btn btn-primary">Submit</button>
            
//         </form>
//         {error && <><h1 style={{ color: 'red' }}>{error}</h1><br /></>}<br />
//     </>
//     )
// }

// export default Login