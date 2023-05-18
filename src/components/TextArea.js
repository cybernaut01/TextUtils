import React, { useState } from "react";


export default function TextArea(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUppercase = () => {
    let newText = text.toUpperCase();
    setText2(newText);
    props.showAlert("Converted to Uppercase","success")
  };

  const handleLowercase = () => {
    let newText = text.toLowerCase();
    setText2(newText);
  };

  const handleTrim = () => {
    let index1 = prompt("Enter the starting Index")
    let index2 = prompt("Enter the Ending Index")

    let newText = text.substring(index1,index2)
    setText2(newText);

  }
  const [text2, setText2] = useState("");

  return (
    <>
      <div className="container my-3">
        <div className="form-group">
          <label htmlFor="myBox">
            <h3>{props.heading}</h3>
          </label>
          <textarea
            className="form-control"
            id="myBox"
            rows="6"
            placeholder="Enter the text here!"
            onChange={handleOnChange}
            style = {{backgroundColor: props.mode === 'dark' ? '#394867' : '#f7f7f7',color: props.mode === 'dark' ? 'white' : 'black'}}
          ></textarea>

          <button className="btn btn-primary my-3" onClick={handleUppercase}>
            UPPERCASE
          </button>

          <button className="btn btn-success mx-3" onClick={handleLowercase}>
            lowercase
          </button>

          <button className="btn btn-danger mx-2" onClick={handleTrim}>
            Trim String
          </button>
          
          <textarea
            className="form-control"
            id="myBox"
            rows="6"
            value={text2}
            onChange={handleOnChange}
            disabled={true}
            placeholder = "Waiting for the Button to be Clicked!"
            style = {{backgroundColor: props.mode === 'dark' ? '#394867' : '#f7f7f7',color: props.mode === 'dark' ? 'white' : 'black'}}
          ></textarea>
        </div>
      </div>
      <div className="container my-3">
        <h3>Text Summary</h3>
        <h4>Character Count : {text.trim().length}</h4>
        <h4>Word Count      : {text.split(" ").length}</h4>
      </div>
    </>
  );
}
