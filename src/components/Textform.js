import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    //console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();    //upper key
    setText(newText);
  };
  const handleLowClick = () => {
    //console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();//lower key
    setText(newText);
  };

 
  

  
  
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter the text");

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div class="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="5"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 " onClick={handleUpClick}>
          Convert to upper case
        </button>
        <button className="btn btn-primary mx-2 " onClick={handleLowClick}>
          Convert to Lower case
        </button>
        
      </div>
      <div className="container my-3">
        <h1> your text summary</h1>
        <p> {text.split(" ").length}words, and   {text.length}characters</p>
        <p> {0.008 * text.split(" ").length}minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
