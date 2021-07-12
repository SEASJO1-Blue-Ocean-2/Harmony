import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import './login.css';
import { useAuthState } from 'react-firebase-hooks/auth';

const Login = ({ auth }) => {
  const [user] = useAuthState(auth);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  const signOut = () => {
    auth.signOut();
  };

  const signUpWithEmail = () => { };

  const signInWithEmail = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, pass)
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <div>
      {user && <button onClick={signOut}>Sign Out</button>}
      <div className="login-logo">HARMONY LOGO PLACE HOLDER</div>
      {user ? <div>Welcome Back</div>
        :
        <div>
          <form className="signUp container">
            <label>
              Email:
              <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
            <label>
              Password:
              <input type="password" name="password" value={pass} onChange={(e) => setPass(e.target.value)} minLength="8" required />
            </label>
            <div>
              <button onClick={signUpWithEmail}>Sign Up</button>
              <button onClick={signInWithEmail}>Sign In</button>
            </div>
          </form>
          <div className="other-signUp"> ---------- OR -----------
            <div>
              <img src="./img/google-logo.jpeg" alt="Google logo" ></img>
              <button onClick={signInWithGoogle}>Sign In with Google</button>
            </div>
            <div>
              <img src="./img/fb-logo.png" alt="Facebook logo" ></img>
              <button onClick={signInWithGoogle}>Sign In with Google</button>
            </div>
          </div>
        </div>
      }

    </div>)

};

export default Login;