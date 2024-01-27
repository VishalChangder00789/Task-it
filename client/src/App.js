import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import TaskContainer from "./components/TaskContainer/TaskContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./page/login/login";
import Register from "./page/register/register";
import Tasks from "./page/tasks/tasks";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Tasks />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
