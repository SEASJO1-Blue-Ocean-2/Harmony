import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { addData } from '../../util.js';
import { Redirect } from "react-router-dom";


//import './signup.css';

const Signup = ({ auth }) => {
  //Assume we aren't logged in. Don't show this page if we have already authenticated.
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
    auth.createUserWithEmailAndPassword(email, pass).then(uc => {
      var data = {
        email: email,
        username: username
      };
      addData(data, dbRef, uc.user.uid);
    }).then(() => setDone(true)).catch(err => {
      console.log(err);
    });
  }

  return (
    <div className='test'>
      {done && <Redirect to="/home" />}
      {dbRef ?
        <form onSubmit={signUp}>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          <label>Email:</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label>Password:</label>
          <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} />
          <input type="submit" />
        </form> : null}


    </div>)

};

export default Signup;