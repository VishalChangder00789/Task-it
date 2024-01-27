import React, { useEffect, useImperativeHandle, useState } from "react";
import "./tasks.css";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import TaskContainer from "../../components/TaskContainer/TaskContainer";
import axios from "axios";
import { server_GetTaskUser } from "../../paths/serverPaths";
import { getUserDetails } from "../../controller/localStorageController";

const Tasks = () => {
  const details = [
    {
      title: "Title",
      description: "Description",
      bold: false,
      italic: true,
      underline: false,
      fontSize: "14px",
      color: "#f6e2dd",
      pending: true,
    },
    {
      title: "Title",
      description: "Description",
      bold: true,
      italic: true,
      underline: true,
      fontSize: "18px",
      color: "#b4ddd3",
      pending: false,
    },
  ];

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const { token, userId } = getUserDetails();
    const getTasks = async () => {
      const response = await axios.get(server_GetTaskUser(userId));
      const tasks = response.data.data.tasklists;
      console.log(tasks);
      setTasks(tasks);
    };

    getTasks();
  }, []);

  return (
    <div className="TasksContainer">
      <Navbar />
      <div className="BodyContainer">
        <Sidebar />
        <TaskContainer details={tasks} />
      </div>
    </div>
  );
};

export default Tasks;
