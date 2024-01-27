import React from "react";
import "./Sidebar.css";

import tasklist_black from "../../assets/TaskList_sidebar.png";

const Sidebar = () => {
  return (
    <div className="SidebarContainer">
      <div className="SidebarContainer_content">
        <img src={tasklist_black} alt="sidebar_icon" />
        <div>Tasks</div>
      </div>
    </div>
  );
};

export default Sidebar;
