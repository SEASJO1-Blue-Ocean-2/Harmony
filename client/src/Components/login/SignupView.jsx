import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Redirect } from 'react-router-dom';
import { addData } from '../../util';

// import './signup.css';

const Signup = ({ auth }) => {
  // Assume we aren't logged in. Don't show this page if we have already authenticated.
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  const [pass, setPass] = useState('');
  const [dbRef, setRef] = useState(null);

  useEffect(() => {
    setRef(firebase.database().ref(('/users')));
  }, []);

  const signUp = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, pass)
      .then((uc) => {
        const data = {
          email,
          username,
        };
        addData(data, dbRef, uc.user.uid);
        setDone(true);
      })
      .catch((err) => { console.log(err); });
  };

  return (
    <div className="test">
      {done && (
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
      {dbRef
        ? (
          <form onSubmit={signUp}>
            <label htmlFor="usernameSignup">
              Username:
              <input id="usernameSignup" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label htmlFor="emailSignup">
              Email:
              <input type="text" id="emailSignup" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label htmlFor="passwordSignup">
              Password:
              <input id="passwordSignup" type="password" value={pass} onChange={(e) => setPass(e.target.value)} />
            </label>
            <input type="submit" />
          </form>
        ) : null}
    </div>
  );
};

export default Signup;
