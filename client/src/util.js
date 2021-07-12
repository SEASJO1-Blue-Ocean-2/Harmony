
/*
To write to the database, first create a data object:
  var data = {
    author: user.displayName,
    uid: user.uid,
    message: message
  };
Then create a dbRef (probably in a useEffect). the path should be from the root
  const [dbRef, setDbRef] = useState(null);
  useEffect(() => {
    setDbRef(firebase.database().ref('/messages/' + roomName);
  }, [roomName]);
leaving the key parameter blank will generate a random one
*/
const addData = (data, dbRef, key = '', path = '') => {
  var key = key || dbRef.push().key;
  var path = '/' + key;
  var updates = {};
  updates[path] = data;
  return dbRef.update(updates);
};

module.exports = {addData: addData};
