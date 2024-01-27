import React from "react";
import "./CreatedTaskContainer.css";
import TaskNote from "../TaskNote/TaskNote";

import TaskListImage from "../../assets/TaskList_sidebar.png";

const CreatedTaskContainer = ({ details }) => {
  return (
    <div
      className={
        details.length === 0
          ? `CreatedTaskContainer_EmptyParent`
          : `CreatedTaskContainer`
      }
    >
      {details.length === 0 ? (
        <div className="CreatedTaskContainer_Empty">
          <img src={TaskListImage} />
        </div>
      ) : (
        details.map((detail) => {
          return <TaskNote detail={detail} />;
        })
      )}
    </div>
  );
};

export default CreatedTaskContainer;
