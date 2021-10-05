import React, { useCallback, useState } from 'react';
import { useDropzone } from "react-dropzone";
import Mountain from '../images/Mountain.svg'
import { app } from '../firebase/index.js'
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
function Upload() {

const [image, setImage] = useState("null");
const [url, setUrl] = useState("null");
const storage = getStorage();


const onDrop = useCallback(acceptedFiles => {
  const file = acceptedFiles[0];
  setImage(file);
  handleUpload({image: file});
}, []);

const storageRef = ref(storage, "images/" + image.name);

const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
  accept: "image/*",
  maxFiles: 1,
  onDrop
}, []);

console.log(image)
const handleUpload = ({image}) => {
 const uploadTask = uploadBytesResumable(storageRef, image);

 uploadTask.on(
   "state_changed",
   (snapshot) => {
   
     const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
     console.log("Upload is " + progress + "% done");
     // eslint-disable-next-line default-case
     switch (snapshot.state) {
       case "paused":
         console.log("Upload is paused");
         break;
       case "running":
         console.log("Upload is running");
         break;
     }
   },
   (error) => {
  
   },
   () => {
   
     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
       console.log("File available at", downloadURL);
       setUrl(downloadURL)

     });
   }
 );
 }



  return (
    <div className="container">
      <div className="uploader">
        <h1>Upload your image</h1>
        <p>File should be Jpeg, Png,...</p>
        <div {...getRootProps()} className="dragzone">
          <input {...getInputProps()} />
          <img src={Mountain} alt="mountain" />
         { 
          isDragActive ?
          <p>Drag & Drop your image here</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
          }
        </div>
        <div className="fileselection">
          <p>Or</p>
          <button onClick={open}>Choose a file</button>
        </div>
      </div>
    </div>
  );
}

export default Upload
