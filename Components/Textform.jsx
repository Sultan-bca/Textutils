import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpclick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to uppercase", "success");
  };

  const handleLoclick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase", "success");
  };

  const handleclkclick = () => {
    setText("");
    props.showAlert("Text cleared", "success");
  };

  const handlecopyclick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard", "success");
  };

  const handleremoveclick = () => {
    let newText = text.replace(/\s+/g, " ").trim();
    setText(newText);
    props.showAlert("Extra spaces removed", "success");
  };

  const wordCount =
    text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length;

  // ✅ Common text color style (heading + summary)
  const textStyle = {
    color: props.mode === "dark" ? "white" : "black"
  };

  // ✅ Textarea dark mode style
  const textAreaStyle = {
    backgroundColor: props.mode === "dark" ? "#042743" : "white",
    color: props.mode === "dark" ? "white" : "black"
  };

  return (
    <>
      <div className="mb-3">
        {/* ✅ Heading color fixed */}
        <h1 style={textStyle}>{props.heading}</h1>

        <textarea
          className="form-control"
          id="mybox"
          rows="8"
          value={text}
          onChange={handleOnChange}
          style={textAreaStyle}
        ></textarea>
      </div>

      {/* Buttons */}
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpclick}>
        Convert to Uppercase
      </button>

      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoclick}>
        Convert to Lowercase
      </button>

      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleclkclick}>
        Clear
      </button>

      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlecopyclick}>
        Copy
      </button>

      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleremoveclick}>
        Remove Extra Spaces
      </button>

      {/* Summary */}
      <div className="container my-3" style={textStyle}>
        <h2>Your text summary</h2>

        <p>
          {wordCount} words and {text.replace(/\s/g, "").length} characters
        </p>

        <p>{(0.008 * wordCount).toFixed(2)} Minutes read</p>

        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
};

export default TextForm;
