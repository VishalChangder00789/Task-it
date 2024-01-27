import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./Status.css";
import { server_UpdateTaskWithTaskId } from "../../paths/serverPaths";
import { getUserDetails } from "../../controller/localStorageController";

const Status = ({ taskStatus, taskId }) => {
  const value = {
    right: "25%",
    left: "-10%",
  };

  const [isPending, setIsPending] = useState(taskStatus);

  useEffect(() => {
    let { token } = getUserDetails();

    const updatePending = async () => {
      await axios.patch(
        server_UpdateTaskWithTaskId(taskId),
        {
          isPending,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    };

    updatePending();
  }, [isPending]);

  const handleSwitchTab = async (e) => {
    e.stopPropagation();
    setIsPending(!isPending);
  };

  return (
    <div className="StatusContainer" id={taskId}>
      <div
        style={{
          left: `${isPending ? value.left : value.right}`,
          background: `${isPending ? `grey` : "#8BC34A"}`,
          color: `${isPending ? `white` : "#333333"}`,
        }}
        className="StatusContainer_SwitchTab"
        onClick={(e) => handleSwitchTab(e)}
      >
        {isPending ? `Pending` : "Fulfilled"}
      </div>
    </div>
  );
};

export default Status;
