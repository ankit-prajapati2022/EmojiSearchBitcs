import React from "react";

import SearchBar from "./SearchBar/SearchBar";
import Listing from "./Listing/Listing";
import SideBar from "./SideBar/SideBar";

import { getEmojiBySearch, getEmojiByCategory } from "../backend/api";

const UI = () => {
  const [emojis, setEmojis] = React.useState([]);
  const [category, setCategory] = React.useState("Home");
  const [search, setSearch] = React.useState("");

  React.useEffect(() => {
    if (category === "Home") setEmojis([]);
    else getEmojiByCategory(category).then((data) => setEmojis(data));
  }, [category]);

  React.useEffect(() => {
    if (search === "") {
      setEmojis([]);
      setCategory("Home");
    } else {
      getEmojiBySearch(search).then((data) => setEmojis(data));
    }
  }, [search]);

  return (
    <>
      <SideBar setcat={setCategory} />
      <div className="mainbody">
        <h1 className="purples">Bitcs Emoji Search</h1>
        <SearchBar setSearch={setSearch} />
        <Listing emojis={emojis} />
      </div>
    </>
  );
};

export default UI;
