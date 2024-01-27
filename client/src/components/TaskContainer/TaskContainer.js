import React from "react";
import "./TaskContainer.css";
import CreateTask from "../CreateTask/CreateTask";
import CreatedTaskContainer from "../CreatedTaskContainer/CreatedTaskContainer";

const TaskContainer = ({ details }) => {
  return (
    <div className="TaskContainer">
      <CreateTask />
      <CreatedTaskContainer details={details} />
    </div>
  );
};

export default TaskContainer;
