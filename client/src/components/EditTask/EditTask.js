import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./EditTask.css";

import StylePanel from "../StylePanel/StylePanel";
import axios from "axios";
import { server_UpdateTaskWithTaskId } from "../../paths/serverPaths";
import { getUserDetails } from "../../controller/localStorageController";

const EditTask = ({ isOpen, detail, setTaskEdit }) => {
  const [updatedTitle, setUpdatedTitle] = useState(detail.taskTitle);
  const [updatedDescription, setUpdatedDescription] = useState(
    detail.taskDescription
  );
  const [bold, setBold] = useState(detail.isBold);
  const [italic, setItalic] = useState(detail.isItalic);
  const [underLine, setUnderLine] = useState(detail.hasUnderline);
  const [fontSize, setFontSize] = useState(detail.fontSize);
  const [backgroundColorEdit, setBackgroundColorEdit] = useState(detail.color);

  // Methods
  const handleTitle = (e) => {
    setUpdatedTitle(e.target.value);
  };

  const handleDescription = (e) => {
    setUpdatedDescription(e.target.value);
  };

  const updateTaskHandler = async () => {
    const { token } = getUserDetails();
    const taskId = detail._id;

    console.log({
      title: updatedTitle,
      description: updatedDescription,
      bold: bold,
      italic: italic,
      underLine: underLine,
      fontSize: fontSize,
      color: backgroundColorEdit,
    });

    await axios.patch(
      server_UpdateTaskWithTaskId(taskId),
      {
        taskTitle: updatedTitle,
        taskDescription: updatedDescription,
        isBold: bold,
        isItalic: italic,
        hasUnderline: underLine,
        fontSize: fontSize,
        color: backgroundColorEdit,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    window.location.reload();
  };

  if (!isOpen) {
    return null;
  }

  const handleModalClose = (e) => {
    e.stopPropagation();
    setTaskEdit(false);
    setUpdatedTitle(detail.taskTitle);
    setUpdatedDescription(detail.taskDescription);
    setBold(detail.isBold);
    setItalic(detail.isItalic);
    setUnderLine(detail.hasUnderLine);
    setFontSize(detail.fontSize);
    setBackgroundColorEdit(detail.color);
  };

  return ReactDOM.createPortal(
    <div className="EditTaskContainer" onClick={(e) => handleModalClose(e)}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="Edit_CreateTaskContainer"
        style={{
          backgroundColor: `${backgroundColorEdit}`,
        }}
      >
        <div className="Edit_CreatedTaskContainer_after">
          <input
            type="text"
            placeholder="Title"
            value={updatedTitle}
            onChange={(e) => handleTitle(e)}
          />
          <textarea
            type="text"
            className={`${bold ? "bold" : ""} ${italic ? "italic" : ""} ${
              underLine ? "underline" : ""
            }  `}
            style={{ fontSize: `${fontSize}` }}
            placeholder="Add a task..."
            value={updatedDescription}
            onChange={(e) => handleDescription(e)}
          />

          <StylePanel
            bold={bold}
            italic={italic}
            underLine={underLine}
            setFontSize={setFontSize}
            setBold={setBold}
            setItalic={setItalic}
            setUnderLine={setUnderLine}
            createTaskHandler={updateTaskHandler}
            handleListCreated={handleModalClose}
            updateButton="true"
            updateTaskHandler={updateTaskHandler}
            setBackgroundColorEdit={setBackgroundColorEdit}
          />
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default EditTask;
