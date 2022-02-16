import React, {useState} from 'react'
import check from '../images/check.png'

function Uploaded(props) {
  const [copied, setCopied] = useState(false);
  function copy() {
    const el = document.createElement("input");
    el.value = props.url;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopied(true);
  }

  return (
    
    <div className="container">
      <div className="uploaded">
        <img  className="check" src={check} alt='checkmark'/>
        <h1>Uploaded Successfully!</h1>
        <div className="img-container">
          <img src={props.url} alt="uploaded" />
        </div>
        <div className="url-container">
          <p p className="url">{props.url}
          </p>
          <button className="copy-link" onClick={ copy }>{!copied ? "Copy link" : "Copied!"}</button>
        </div>
      </div>
    </div>
  );
}

export default Uploaded
