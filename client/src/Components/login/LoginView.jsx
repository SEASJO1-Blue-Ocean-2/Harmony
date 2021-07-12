import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';


const Login = ({ user }) => {

  const signIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }


  return (<div>
    {!user && <button onClick={signIn}>Sign In</button>}
  </div>)

};

export default Login