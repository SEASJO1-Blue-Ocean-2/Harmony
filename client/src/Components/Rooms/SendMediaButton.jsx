import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/storage';

const SendMediaButton = (props) => {
  const { setCurrentUrl } = props;
  const [showMediaInput, setShowMediaInput] = useState(false);
  const [mediaInputText, setMediaInputText] = useState('');
  const storage = firebase.storage();
  const storageRef = storage.ref();
  // console.log(storageRef);
  const elCapRef = storageRef.child('el_cap.jpeg');
  const childRef = storageRef.child(mediaInputText);
  // console.log(elCapRef);

  const handleSendMedia = () => {
    setShowMediaInput(!showMediaInput);
  }
  const handleUpload = () => {
    elCapRef.getDownloadURL()
      .then((url) => console.log(url));
  };

  const handleSubmitFile = async () => {
    console.log(document.getElementById('fileInput'))
    const selectedFile = document.getElementById('fileInput').files[0]
    await childRef.put(selectedFile)
      .then(snapshot => console.log('fileuploaded', snapshot));
    const currentRef = storageRef.child(mediaInputText)
    currentRef.getDownloadURL().then((url)=> setCurrentUrl(url));
  }


  // elCapRef.getDownloadURL()
  //   .then((url) => console.log(url));

  return (
    <div>
      {showMediaInput
        ? (
          <div>
            <input id="fileInput" type="file" accept="image/*" onChange={(e) => setMediaInputText(e.target.value)}/>
            <button onClick={() => {handleSubmitFile()}}>Upload File</button>
          </div>
        )
        : <button onClick={handleSendMedia}>send media</button>}
      {/* <div>{elCapRef.val()}</div> */}
    </div>
  )
}

export default SendMediaButton;
