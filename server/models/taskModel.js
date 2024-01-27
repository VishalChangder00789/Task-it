const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  taskTitle: {
    type: String,
    required: [true, "Please enter task title"],
    trim: true,
  },
  taskDescription: {
    type: String,
    required: [true, "Please enter task description"],
    maxlength: [250, "A description should be less than 250 characters"],
  },

  isBold: {
    type: Boolean,
    default: false,
  },

  isItalic: {
    type: Boolean,
    default: false,
  },

  hasUnderline: {
    type: Boolean,
    default: false,
  },

  fontSize: {
    type: String,
    default: "14px",
  },

  color: {
    type: String,
    default: "#e9e3d4",
  },

  isPending: {
    type: Boolean,
    default: true,
  },
});

const taskModel = mongoose.model("Task", taskSchema);
module.exports = taskModel;
