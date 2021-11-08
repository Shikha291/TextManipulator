import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }

    const handleLowClick = () => {
        // console.log("Uppercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    }

    const handleCopyClick = () => {
      navigator.clipboard.writeText(text);
      props.showAlert("Copied to clipboard", "success");
    }

    const handleClearClick = () => {
        // console.log("Uppercase was clicked");
        let newText = "";
        setText(newText);
        props.showAlert("Cleared text", "success");
    }

    const handleCapClick = () => {
        const words = text.split(" ");
        for(let i=0; i<words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
        }
        let newText = words.join(" ");
        setText(newText);
        props.showAlert("Capitalized text", "success");
    }

    const handleExtraClick = () => {
      const regex = / +/g;
      let newText = text.replace(regex, " ");
      setText(newText);
      props.showAlert("Removed extra spaces", "success");
    }

    const handleOnChange = (event) => {
        // console.log("text was changed");
        setText(event.target.value)
    }
  const [text, setText] = useState(""); //state, also using array destructuring
//   text = "shsidi";//Not allowed
    //  setText("new text"); //correct way

  return (
      <>
    <div className=" container my-3" style={{color: props.mode==="light"?"black":"white"}}>
      <h2 className="mb-3">{props.heading}</h2>
      <textarea
        className="form-control "
        id="exampleFormControlTextarea1 myBox"
        rows="8"
        value={text}
        onChange={handleOnChange}
        style={{backgroundColor: props.mode==="light"?"white":"rgb(154 162 170)", color: props.mode==="light"?"black":"white"}}
      ></textarea>
      <button disabled={text.length === 0} className="btn btn-primary my-2 mx-1" onClick={handleUpClick}>Change to uppercase</button>
      <button disabled={text.length === 0} className="btn btn-primary my-2 mx-1" onClick={handleLowClick}>Change to lowercase</button>
      <button disabled={text.length === 0} className="btn btn-primary my-2 mx-1" onClick={handleCopyClick}>Copy text</button>
      <button disabled={text.length === 0} className="btn btn-primary my-2 mx-1" onClick={handleClearClick}>Clear</button>
      <button disabled={text.length === 0} className="btn btn-primary my-2 mx-1" onClick={handleCapClick}>Capitalize text</button>
      <button disabled={text.length === 0} className="btn btn-primary my-2 mx-1" onClick={handleExtraClick}>Remove extra spaces</button>

    </div>
    <div className="container my-3" style={{color: props.mode==="light"?"black":"white"}}>
        <h2>Your text summary</h2>
        <p><b>{text.split(/\s+/).filter((element) =>  element!=="").length}</b> words and <b>{text.length}</b> characters</p>
        <p><b>{0.008*text.split(" ").filter((element) =>  element!=="").length}</b> minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  );
}
