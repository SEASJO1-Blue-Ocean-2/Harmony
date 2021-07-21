import React from 'react';
import { Link } from 'react-router-dom';

const Logout = (props) => {
  const signOut = () => {
    props.auth.signOut();
  };

  return (
    <Link to="/">
      <button type="button" className="logout" onClick={signOut} id="logoutButton">Logout</button>
    </Link>
  );
};

export default Logout;
