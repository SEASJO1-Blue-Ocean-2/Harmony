import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import { Link, Redirect } from "react-router-dom";
import 'firebase/auth';
import css from './login.css';
import { addData } from '../../util.js';


const Login = ({ user, auth }) => {

  const [dbRef, setRef] = useState(null);

  useEffect(() => {
    setRef(firebase.database().ref(('/users')));
  }, []);

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
      .then((results) => {
        addData({ username: results.user.displayName, email: results.user.email, picture: results.user.photoURL }, dbRef, results.user.uid);
      });
  }

  const signOut = () => {
    auth.signOut();
  };

  return (
    <div>
      {user && <button onClick={signOut}>Sign Out</button>}
      <div className="login-logo">
        <img src='https://image.flaticon.com/icons/png/512/1820/1820090.png' id={css.harmonyLogo}>
        </img></div>
      {user ? <Redirect to="/home" />

        :
        <div>

          <form className="signUp container">
            <label>
              Email:
              <input type="email" name="email" required />
            </label>
            <label>
              Password:
              <input type="password" name="password" minLength="8" required />
            </label>
            <div>
              <Link to="/signUp">
                <button>Sign Up</button>
              </Link>
              <button>Sign In</button>
            </div>
          </form>
          <div className="other-signUp"> ---------- OR -----------
            <div>
              <img src="./img/google-logo.jpeg" alt="Google logo" ></img>
              <button onClick={signInWithGoogle}>Sign In with Google</button>
            </div>
            <div>
              <img src="./img/fb-logo.png" alt="Facebook logo" ></img>
              <button onClick={signInWithGoogle}>Sign In with Facebook</button>
            </div>
          </div>
        </div>
      }

    </div>)


};

export default Login;
