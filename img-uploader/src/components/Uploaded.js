import React from 'react'
import check from '../images/check.png'

function Uploaded(props) {
  console.log(props)
  return (
    
    <div className="container">
      <div className="uploaded">
        <img  className="check" src={check} alt='checkmark'/>
        <h1>Uploaded Successfully!</h1>
        <div className="img-container">
          <img src={props.url} alt="image-uploaded" />
        </div>
        <div className="url-container">
          <p p className="url">{props.url}
          </p>
          <button className="copy-link">Copy Link</button>
        </div>
      </div>
    </div>
  );
}

export default Uploaded
