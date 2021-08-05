import React from 'react'

import { Redirect } from "react-router-dom";

function Logut() {
    // let history = useHistory();

  function handleClick() {
      
    // history.push("/home");
    return <Redirect to='/submit' />
  }

  return (
    <button type="button" onClick={handleClick}>
      LOGOUT
    </button>
  );
}

export default Logut


