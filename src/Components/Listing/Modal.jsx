import React from "react";

const Modal = (props) => {
  return (
    <div class="wrapper">
      <div class="popup">
        <div class="popup-inside">
          <div class="backgrounds">
            <div class="background"></div>
            <div class="background background2"></div>
            <div class="background background3"></div>
            <div class="background background4"></div>
            <div class="background background5"></div>
            <div class="background background6"></div>
          </div>
        </div>
        <div class="content">
          <div class="content-wrapper">
            <h1>{props.dta.unicodeName}</h1>
            <p>Code Point : {props.dta.codePoint}</p>
            <p>Groups : {props.dta.group}</p>
            <p>Sub Group : {props.dta.subGroup}</p>
            <p
              class="try-again"
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
