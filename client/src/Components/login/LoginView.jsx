import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';


const Login = ({ user, auth }) => {

  const signIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (<div>
    {user ? user.email : <button onClick={signIn}>Sign In With Google</button>}
  </div>)

};

export default Login