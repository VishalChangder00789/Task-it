import React, { useEffect, useState } from "react";
import "./CreateTask.css";
import StylePanel from "../StylePanel/StylePanel";
import axios from "axios";
import { server_CreateTaskUser } from "../../paths/serverPaths";
import { getUserDetails } from "../../controller/localStorageController";

const CreateTask = () => {
  const [listCreated, setListCreated] = useState(false);

  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underLine, setUnderLine] = useState(false);
  const [fontSize, setFontSize] = useState("14px");
  const [tabBackgroundColor, setTabBackgroundColor] = useState("white");
  const [backgroundColor, setBackgroundColor] = useState("#E37598");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [titleCharCount, setTitleCharCount] = useState(0);
  const [descCharCount, setDescCharCount] = useState(0);
  const titleMaxChars = 50;
  const descMaxChars = 250;

  const handleListCreated = () => {
    setListCreated(!listCreated);
    setTabBackgroundColor("white");
  };

  const handleTitle = (e) => {
    const inputValue = e.target.value;

    if (inputValue.length <= titleMaxChars) {
      setTitle(inputValue);
      setTitleCharCount(inputValue.length);
    }
  };

  const handleDescription = (e) => {
    const inputValue = e.target.value;

    if (inputValue.length <= descMaxChars) {
      setDescription(inputValue);
      setDescCharCount(inputValue.length);
    }
  };

  const createTaskHandler = async () => {
    if (!title || !description) {
      return;
    }

    const { userId, token } = getUserDetails();
    const response = await axios.post(
      server_CreateTaskUser(userId),
      {
        taskTitle: title,
        taskDescription: description,
        isBold: bold,
        isItalic: italic,
        hasUnderline: underLine,
        fontSize: fontSize,
        color: backgroundColor,
        isPending: true,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    window.location.reload();
  };

  return (
    <div
      className="CreateTaskContainer"
      style={{
        backgroundColor: `${
          backgroundColor === "#E37598"
            ? `${tabBackgroundColor}`
            : `${backgroundColor}`
        }`,
      }}
    >
      {!listCreated ? (
        <div
          className="CreatedTaskContainer_before"
          onClick={handleListCreated}
        >
          <input
            className="CreatedTaskContainer_before_input"
            type="text"
            placeholder="Create Task"
          />
        </div>
      ) : (
        <div className="CreatedTaskContainer_after">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => handleTitle(e)}
          />
          <div className="char-count">
            {titleCharCount}/{titleMaxChars}
          </div>

          <textarea
            type="text"
            className={`${bold ? "bold" : ""} ${italic ? "italic" : ""} ${
              underLine ? "underline" : ""
            }  `}
            style={{ fontSize: `${fontSize}` }}
            placeholder="Add a task..."
            value={description}
            onChange={(e) => handleDescription(e)}
          />
          <div className="char-count">
            {descCharCount}/{descMaxChars}
          </div>
          <StylePanel
            handleListCreated={handleListCreated}
            bold={bold}
            italic={italic}
            underLine={underLine}
            fontSize={fontSize}
            backgroundColor={backgroundColor}
            setFontSize={setFontSize}
            setBold={setBold}
            setItalic={setItalic}
            setUnderLine={setUnderLine}
            setBackgroundColor={setBackgroundColor}
            createTaskHandler={createTaskHandler}
            setTabBackgroundColor={setTabBackgroundColor}
          />
        </div>
      )}
    </div>
  );
};

export default CreateTask;
