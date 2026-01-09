import React from 'react';

export default function About(props) {

  const myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "#042743" : "white"
  };

  return (
    <div className="container" style={myStyle}>
      <h1 className="my-3">About Us</h1>

      <div className="accordion" id="accordionExample">

        {/* ITEM 1 */}
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
            >
              Analyze your text
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show">
            <div className="accordion-body" style={myStyle}>
              TextUtils gives you a way to analyze your text quickly and efficiently.
              Be it word count, character count, or text manipulation.
            </div>
          </div>
        </div>

        {/* ITEM 2 */}
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
            >
              Free to use
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse">
            <div className="accordion-body" style={myStyle}>
              TextUtils is a free character counter tool that provides instant
              character and word count statistics for a given text.
            </div>
          </div>
        </div>

        {/* ITEM 3 */}
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
            >
              Browser compatible
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse">
            <div className="accordion-body" style={myStyle}>
              This application works in all modern browsers such as Chrome,
              Firefox, Safari, Edge, and Opera.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
