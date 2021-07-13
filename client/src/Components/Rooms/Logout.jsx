import React from "react";
import { Link, Redirect } from "react-router-dom";


const Logout = (props) => {

  const signOut = () => {
    props.auth.signOut();
    // <Redirect to="/signUp" />
  };


  return (
    <button className='logout' onClick ={signOut}>Logout</button>
  )
}

export default Logout;