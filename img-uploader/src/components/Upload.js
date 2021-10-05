import React, { useCallback } from 'react';
import { useDropzone } from "react-dropzone";
import image from '../images/image.svg'

function Upload() {

const onDrop = useCallback(acceptedFiles => {
  const file = acceptedFiles[0];
  console.log(file);
});

const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
  accept: "image/*",
  maxFiles: 1,
  noClick: true,
  noKeyboard: true,
  onDrop
}, []);



  return (
    <div className="container">
      <div className="uploader">
        <h1>Upload your image</h1>
        <p>File should be Jpeg, Png,...</p>
        <div {...getRootProps()} className="dragzone">
          <input {...getInputProps()} />
          <img src={image} alt="mountain" />
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
