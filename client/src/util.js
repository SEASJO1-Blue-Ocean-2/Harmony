const addData = (data, dbRef, key = '', path = '') => {
  var key = key || dbRef.push().key;
  var path = '/' + key;
  var updates = {};
  updates[path] = data;
  return dbRef.update(updates);
};

module.exports = {addData: addData};