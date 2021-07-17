import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import { Link, Redirect } from 'react-router-dom';
import 'firebase/auth';
import css from './login.css';
import { addData } from '../../util';

const Login = ({ user, auth }) => {
  const [dbRef, setRef] = useState(null);
  const [newUser, setNewUser] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    setRef(firebase.database().ref(('/users')));
    setRedirect(true);
  }, []);

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider)
      .then((results) => {
        setUsername(results.user.displayName);
        setEmail(results.user.email);
        setNewUser(results.additionalUserInfo.isNewUser);
        return results;
      })
      .then((results) => {
        if (results.additionalUserInfo.isNewUser) {
          addData(
            {
              username: results.user.displayName,
              email: results.user.email,
              picture: results.user.photoURL,
            }, dbRef, results.user.uid,
          );
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {(redirect && newUser) && (
      <Redirect
        to={{
          pathname: '/createUserData',
          state: {
            username,
            email,
          },
        }}
      />
      )}

      <div className="login-logo">
        <img src="https://image.flaticon.com/icons/png/512/1820/1820090.png" id={css.harmonyLogo} alt="loginLogo" />
      </div>

      {(redirect && user) ? <Redirect to="/home" />
        : (
          <div>

            <form className="signUpContainer">
              <input type="email" name="email" required placeholder="Enter your email" className="signUpForm" />
              <input type="password" name="password" minLength="8" required placeholder="Enter your password" className="signUpForm" />
              <div>
                <Link to="/signUp">
                  <button type="button" className="signButton">Sign Up</button>
                </Link>
                <button type="button" className="signButton">Sign In</button>
              </div>
            </form>
            <div className="other-signUp">
              <div className="loginLogos">
                <div>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/480px-Google_%22G%22_Logo.svg.png" width="50px;" alt="Google logo" />
                  <br />
                  <button type="button" onClick={signInWithGoogle}>Sign In with Google</button>
                </div>
                <div>
                  <img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?" width="50px;" alt="Facebook logo" />
                  <br />
                  <button type="button" onClick={signInWithGoogle}>Sign In with Facebook</button>
                </div>
              </div>
            </div>
          </div>
        )}
    </div>
  );
};

export default Login;
