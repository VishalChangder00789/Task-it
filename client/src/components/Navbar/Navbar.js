import React, { useState } from "react";
import "./Navbar.css";

// Logo
import Applogo from "../AppLogo/Applogo";
import Search from "../Search/Search";
import Settings from "../Settings/Settings";

const Navbar = () => {
  // Search Input Handler
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="NavbarContainer">
      <div className="NavbarContainer_logo">
        <Applogo />
      </div>
      {/* <div className="NavbarContainer_search">
        <Search value={searchInput} setValue={setSearchInput} />
      </div> */}

      <div className="NavbarContainer_settings">
        <Settings />
        {/* <ViewChanger /> */}
      </div>
    </div>
  );
};

export default Navbar;
