import React, { setState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/analytics';
import 'firebase/database';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useList } from 'react-firebase-hooks/database';
import config from '../../../config';

firebase.initializeApp(config);
const auth = firebase.auth();
const db = firebase.database();

const Room = () => {
  const [snapshots, loading, error] = useList(db.ref('users'));
  return (
    <div>
      {!loading && snapshots.length > 0 && (
      <div>
        {snapshots.map((v) => <div key={v.key}>{JSON.stringify(v.val())}</div>)}
      </div>
      )}
    </div>
  );
};

export default Room;
