const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");
const taskController = require("../controller/taskController");

// Authentication Controllers
router.route("/register").post(authController.register);
router.route("/login").post(authController.login);

// Tasks Controller : Add and Retrive task
router
  .route("/user/:userId/tasks")
  .get(taskController.getAllTasks)
  .post(authController.protect, taskController.createTask);

// Update a particular task and delete
router
  .route("/tasks/:taskId")
  .get(taskController.getTask)
  .patch(authController.protect, taskController.updateTask)
  .delete(authController.protect, taskController.deleteTask);

module.exports = router;
