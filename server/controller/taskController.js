const catchAsync = require("../utils/catchAsync");
const taskModel = require("./../models/taskModel");
const userModel = require("./../models/userModel");

exports.getAllTasks = catchAsync(async (req, res, next) => {
  // get the user id
  // find the user and get the tasklist
  // return the tasklist

  //              /user/:userId/tasks

  const userId = req.params.userId;
  const userTasks = await userModel.findById(userId).populate("taskLists");

  res.status(201).json({
    status: "success",
    message: "Tasks Found for the user",
    data: {
      tasklists: userTasks.taskLists,
    },
  });
});

exports.createTask = catchAsync(async (req, res, next) => {
  // create a task by extracting all details from the req.body in the databse
  // update the userModel by updating it

  //      /user/:userId/tasks

  // changes made

  const userId = req.params.userId;

  const newTask = await taskModel.create(req.body);

  const updatedUserTasks = await userModel.findByIdAndUpdate(
    userId,
    {
      $push: { taskLists: newTask._id },
    },
    { new: true }
  );

  res.status(201).json({
    status: "successfully created task",
    message: "Task Created",
    data: {
      updatedUserTasks,
    },
  });
});

exports.getTask = catchAsync(async (req, res, next) => {
  const taskId = req.params.taskId;

  const foundTask = await taskModel.findById(taskId);

  res.status(201).json({
    status: "Successfully found task",
    data: {
      foundTask,
    },
  });
});

exports.updateTask = catchAsync(async (req, res, next) => {
  const taskId = req.params.taskId;
  const updatedTask = await taskModel.findByIdAndUpdate(taskId, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(201).json({
    status: "Successfully Updated",
    data: {
      updatedTask,
    },
  });
});

exports.deleteTask = catchAsync(async (req, res, next) => {
  const taskId = req.params.taskId;

  await taskModel.findByIdAndDelete(taskId);

  res.status(200).json({
    status: "Succcessfully deleted",
    message: "Task deleted successfully",
  });
});
