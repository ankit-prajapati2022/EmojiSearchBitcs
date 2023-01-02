import React from "react";
import "./Listing.css";

import Modal from "./Modal";
import "./Modal.css";

const Listing = (props) => {
  const [list, setList] = React.useState([]);
  const [dta, setDta] = React.useState({});
  const [page, setPage] = React.useState(1);
  const [toatalpage, setTotalPage] = React.useState(0);

  React.useEffect(() => {
    if (props.emojis) setList(props.emojis);
    else setList([]);
    setPage(1);
    setTotalPage(Math.ceil(props.emojis?.length / 10));
  }, [props.emojis]);

  const renderList = () =>
    list.slice((page - 1) * 10, page * 10).map((emoji, idx) => (
      <div
        className="button-text"
        onClick={() => {
          setDta(emoji);
          document.getElementById("Lists").classList.add("active");
        }}
        key={idx}
      >
        <span className="btn btn-icon">
          <i>{emoji.character}</i>
          <span>{emoji.unicodeName}</span>
        </span>
      </div>
    ));

  const changePage = (e) => {
    if (e.target.innerText === "previous page") {
      if (page > 1) setPage(page - 1);
    } else {
      if (page < toatalpage) setPage(page + 1);
    }
  };

  return (
    <div className="Listing" id="Lists">
      {list.length ? renderList() : <h1 className="blues">No Emoji Here</h1>}
      <Modal dta={dta} setDta={setDta} />
      {list.length ? (
        <div class="example">
          <div class="text" onClick={changePage}>
            previous page
          </div>
          <div class="counter">
            <span class="number">{page}</span>
            <span class="number">{toatalpage}</span>
          </div>
          <div class="text" onClick={changePage}>
            next page
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Listing;
