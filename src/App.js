import React from 'react'
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import { Switch, Route } from 'react-router-dom'
import Login from './Login'
import Search from './Search'
import Submit from './Submit'
import Home from './Home'
import useToken from './useToken';
import Logout from './Logout'



function App() {

  const { token, setToken } = useToken();
  
  if(!token) {
    return <Login setToken={setToken} />
  }
  
  return (
    <div className="App">
      
      <Home />
      <Logout />
      <Switch>
        <Route path ="/home" component={Home} />
        <Route path ="/login" component={Login} />
        <Route path ="/search" component={Search} />
        <Route path ="/submit" component={Submit} />
      </Switch>
    </div>
  );
}

export default App;
