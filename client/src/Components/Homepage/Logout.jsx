import React from "react";
import { Link, Redirect } from "react-router-dom";


const Logout = (props) => {

  const signOut = () => {
    props.auth.signOut();
    event.preventDefault();
  };

  return (
    <Link to="/">
      <button className='logout' onClick ={signOut} id='logoutButton'>Logout</button>
    </Link>
  );
}

export default Logout;
