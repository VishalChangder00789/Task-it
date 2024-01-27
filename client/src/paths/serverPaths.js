export const port = 5000;
export const baseUrl = `http://localhost:${port}`;
export const server_login = `${baseUrl}/api/v1/login`;
export const server_register = `${baseUrl}/api/v1/register`;

export const server_CreateTaskUser = (userId) => {
  return `${baseUrl}/api/v1/user/${userId}/tasks`;
};

export const server_GetTaskUser = (userId) => {
  return `${baseUrl}/api/v1/user/${userId}/tasks`;
};

export const server_GetTaskWithTaskId = (taskId) => {
  return `${baseUrl}/api/v1/tasks/${taskId}`;
};

export const server_UpdateTaskWithTaskId = (taskId) => {
  return `${baseUrl}/api/v1/tasks/${taskId}`;
};

export const server_DeleteTaskWithTaskId = (taskId) => {
  return `${baseUrl}/api/v1/tasks/${taskId}`;
};

// const string = `http://localhost:5000/api/v1/user/:userId`;
