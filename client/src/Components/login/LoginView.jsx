import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
// import './login.css'


const Login = ({ user, auth }) => {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  const signOut = () => {
    auth.signOut();
  };

  return (
  <div>
    <div className="login-logo">HARMONY LOGO PLACE HOLDER</div>
    {user ? <div>Welcome Back</div>
    :
    <div>
      <form>
        <label>
          Email:
          <input type="email" name="email" required/>
        </label>
        <label>
          Password:
          <input type="password" name="password" minlength="8" required/>
        </label>
        <div>
          <button>Sign Up</button>
          <button>Sign In</button>
        </div>
      </form>
      <div className="other-signUp"> ---------- OR -----------
        <div>
          <img src="./img/google-logo.jpeg" alt="Google logo" style={{'width':'8vw'}}></img>
          <button onClick={signInWithGoogle}>Sign In with Google</button>
        </div>
        <div>
          <img src="./img/fb-logo.png" alt="Facebook logo" style={{'width':'8vw'}}></img>
          <button onClick={signInWithGoogle}>Sign In with Google</button>
        </div>
      </div>
    </div>
    }

  </div>)

};

export default Login;