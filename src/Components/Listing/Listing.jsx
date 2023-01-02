import React from "react";
import "./Listing.css";

import Modal from "./Modal";
import "./Modal.css";

const Listing = (props) => {
  const [list, setList] = React.useState([]);
  const [dta, setDta] = React.useState({});

  React.useEffect(() => {
    if (props.emojis) setList(props.emojis);
    else setList([]);
  }, [props.emojis]);

  const renderList = () =>
    list.map((emoji, idx) => (
      <div
        className="button-text"
        onClick={() => {
          setDta(emoji);
          document.getElementById("Lists").classList.add("active");
        }}
      >
        <span className="btn btn-icon">
          <i>{emoji.character}</i>
          <span>{emoji.unicodeName}</span>
        </span>
      </div>
    ));

  return (
    <div className="Listing" id="Lists">
      {list.length ? renderList() : <h1 className="blues">No Emoji Here</h1>}
      <Modal dta={dta} setDta={setDta} />
    </div>
  );
};

export default Listing;
