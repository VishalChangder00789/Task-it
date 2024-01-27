import React from "react";
import "./Applogo.css";

// Logo
import AppLogo from "../../assets/application_logo.png";
import AppList from "../../assets/application_name.png";

const Applogo = () => {
  return (
    <div className="Applogo">
      <img src={AppLogo} alt="app-logo" />
      <img src={AppList} alt="app-name" />
    </div>
  );
};

export default Applogo;
