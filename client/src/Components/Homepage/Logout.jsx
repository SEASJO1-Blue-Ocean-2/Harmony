import React from "react";
import { Link, Redirect } from "react-router-dom";


const Logout = (props) => {

  const signOut = () => {
    props.auth.signOut();
  };

  return (
    <Link to="/">
      <button className='logout' onClick ={signOut}>Logout</button>
    </Link>
  );
}

export default Logout;
