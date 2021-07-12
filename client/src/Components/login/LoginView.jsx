import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';


const Login = ({ user, auth }) => {

  const signIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  const signOut = () => {
    auth.signOut();
  };

  return (<div>
    {user ? <button onClick={signOut}>Sign Out</button> : <button onClick={signIn}>Sign In</button>}
  </div>)

};

export default Login