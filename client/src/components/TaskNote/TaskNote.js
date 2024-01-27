import React, { useEffect, useState } from "react";
import "./TaskNote.css";
import Status from "../Status/Status";
import axios from "axios";

import bin from "../../assets/LightMode/bin.png";
import { server_DeleteTaskWithTaskId } from "../../paths/serverPaths";
import { getUserDetails } from "../../controller/localStorageController";

import editIconImage from "../../assets/LightMode/edit-text.png";
import EditTask from "../EditTask/EditTask";

const TaskNote = ({ detail }) => {
  const [taskEdit, setTaskEdit] = useState(false);

  const handleTaskDelete = async (e) => {
    e.stopPropagation();
    const taskId = detail._id;
    const { token } = getUserDetails();
    await axios.delete(server_DeleteTaskWithTaskId(taskId), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    window.location.reload();
  };

  const handleEditMode = (e) => {
    e.stopPropagation();
    setTaskEdit(!taskEdit);
  };

  return (
    <div
      onClick={(e) => handleEditMode(e)}
      className="TaskNoteContainer"
      style={{ backgroundColor: `${detail.color}` }}
    >
      {/* Modal */}

      <EditTask isOpen={taskEdit} setTaskEdit={setTaskEdit} detail={detail} />

      <div className="TaskNoteContainer_Details">
        <div className="TaskNoteContainer_Details_title">
          {detail.taskTitle}
        </div>
        <div
          className="TaskNoteContainer_Details_description"
          style={{
            fontWeight: `${detail.isBold ? "600" : ""}`,
            fontStyle: `${detail.isItalic ? "italic" : ""}`,
            textDecoration: `${detail.hasUnderline ? "underline" : ""}`,
            fontSize: `${detail.fontSize ? `${detail.fontSize}` : ""}`,
          }}
        >
          {detail.taskDescription}
        </div>
      </div>

      <div className="TaskNoteContainer_Status">
        <div
          className="TaskNoteContainer_Status_Bin"
          onClick={(e) => handleTaskDelete(e)}
        >
          <img className="TaskNoteContainer_Status_Bin_img" src={bin} />
        </div>

        <Status taskStatus={detail.isPending} taskId={detail._id} />
      </div>
    </div>
  );
};

export default TaskNote;
