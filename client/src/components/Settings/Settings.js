import React, { useState } from "react";
import "./Settings.css";
import { useNavigate } from "react-router-dom";

// Logo
import settingsLogo from "../../assets/settings.png";
import profile from "../../assets/LightMode/user.png";
import { getUserDetails } from "../../controller/localStorageController";

const Settings = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const navigate = useNavigate();

  const handleSettingsDropdown = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  const handleItemClicked = () => {
    navigate("/login");
  };

  return (
    <div className="SettingsContainer" onClick={handleSettingsDropdown}>
      <img src={profile} alt="Settings" />
      {isSettingsOpen && (
        <div className="SettingsDropDown">
          <div onClick={handleItemClicked} className="SettingsDropDown_item">
            Login/Register
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
