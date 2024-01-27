import React from "react";
import "./Search.css";

// Images
import SearchImage from "../../assets/search.png";

const Search = ({ value, setValue }) => {
  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="SearchContainer">
      <img src={SearchImage} className="Search_searchIcon" alt="search" />
      <input
        type="text"
        value={value}
        onChange={(e) => handleChangeValue(e)}
        placeholder="Search"
      />
    </div>
  );
};

export default Search;
