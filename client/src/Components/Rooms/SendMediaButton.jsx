import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/storage';

const SendMediaButton = (props) => {
  const { setCurrentUrl, showMediaInput, setShowMediaInput, fileUploaded, setFileUploaded } = props;
  const [mediaInputText, setMediaInputText] = useState('');
  const storage = firebase.storage();
  const storageRef = storage.ref();
  const elCapRef = storageRef.child('el_cap.jpeg');
  const childRef = storageRef.child(mediaInputText);

  const handleSendMedia = () => {
    setShowMediaInput(!showMediaInput);
  };

  const handleUpload = () => {
    elCapRef.getDownloadURL()
      .then((url) => console.log(url));
  };

  const handleSubmitFile = async () => {
    const selectedFile = document.getElementById('fileInput').files[0];
    await childRef.put(selectedFile)
      .then(snapshot => console.log('fileuploaded', snapshot));
    const currentRef = storageRef.child(mediaInputText);
    currentRef.getDownloadURL().then((url)=> setCurrentUrl(url));
    setFileUploaded(true);
  }

  return (
    <div id= 'sendMediabutton'>
      {showMediaInput
        ? (
          <div className='fileInput'>
            <input id="fileInput" type="file" name="file" multiple onChange={(e) => setMediaInputText(e.target.value)}/>
            <button onClick={() => {handleSubmitFile()}}>Upload File</button>
            {fileUploaded ? <div>file uploaded</div> : null}
          </div>
        )
        : <button onClick={handleSendMedia} id='sendMediabutton'>send media</button>}
    </div>
  );
};

export default SendMediaButton;
