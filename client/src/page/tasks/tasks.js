import React, { useEffect, useImperativeHandle, useState } from "react";
import "./tasks.css";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import TaskContainer from "../../components/TaskContainer/TaskContainer";
import axios from "axios";
import { server_GetTaskUser } from "../../paths/serverPaths";
import { getUserDetails } from "../../controller/localStorageController";
import { useNavigate } from "react-router-dom";

const Tasks = () => {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (localStorage.userDetails) {
      const { token, userId } = getUserDetails();

      const getTasks = async () => {
        const response = await axios.get(server_GetTaskUser(userId));
        const tasks = response.data.data.tasklists;
        console.log(tasks);
        setTasks(tasks);
      };

      getTasks();
    } else {
      navigate("/login");
    }
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
