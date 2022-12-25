import React from "react";
import "./SideBar.css";

import { getEmojiCategories } from "../../backend/api";

const SideBar = (props) => {
  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    getEmojiCategories().then((data) => setCategories(data));
  }, []);

  const handlechange = (e) => {
    props.setcat(e.target.innerHTML);
  };

  const renderCategories = () =>
    categories.map((category, idx) => (
      <li key={idx}>
        <span onClick={handlechange}>
          {category.slug}
        </span>
      </li>
    ));
  return (
    <aside class="sidebar">
      <nav class="nav">
        <ul>
          <li>
            <span onClick={handlechange} value={"Home"}>
              Home
            </span>
          </li>
          {renderCategories()}
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
