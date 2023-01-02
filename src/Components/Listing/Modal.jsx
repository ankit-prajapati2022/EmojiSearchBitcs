import React from "react";

const Modal = (props) => {
  return (
    <div className="wrapper">
      <div className="popup">
        <div className="popup-inside">
          <div className="backgrounds">
            <div className="background"></div>
            <div className="background background2"></div>
            <div className="background background3"></div>
            <div className="background background4"></div>
            <div className="background background5"></div>
            <div className="background background6"></div>
          </div>
        </div>
        <div className="content">
          <div className="content-wrapper">
            <h1>{props.dta.unicodeName}</h1>
            <p>Code Point : {props.dta.codePoint}</p>
            <p>Groups : {props.dta.group}</p>
            <p>Sub Group : {props.dta.subGroup}</p>
            <p
              className="try-again"
              onClick={() => {
                document.getElementById("Lists").classList.remove("active");
                props.setDta({});
              }}
            >
              Close this!! Try Another
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
