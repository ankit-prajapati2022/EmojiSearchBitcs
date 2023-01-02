import React from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
  const [search, setSearch] = React.useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setSearch(search);
  };

  return (
    <div className="SearchBar">
      <div className="Card">
        <div className="CardInner">
          <label>Search for your favourite emoji</label>
          <div className="container">
            <div className="Icon" onClick={handleSubmit}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#657789"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-search"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
            <form style={{ display: "contents" }} onSubmit={handleSubmit}>
              <div className="InputContainer">
                <input
                  placeholder="It just can't be Heart..."
                  type="text"
                  value={search}
                  onChange={handleChange}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
