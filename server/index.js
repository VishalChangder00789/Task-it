const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

// File Paths
const parentRoute = require("./routes/parentRoute");
const AppError = require("./utils/appError");
const globalErrorHandler = require("../server/controller/errorController");

// Configuring Middlewares
dotenv.config();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Sequence of the middlewares are very necessary

// Routing
app.use("/api/v1/", parentRoute);

// Unhandled routes
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on the server`, 404));
});

app.use(globalErrorHandler);

// Setup server
app.listen(process.env.PORT, () => {
  mongoose
    .connect(process.env.MONGOURL)
    .then(() => {
      console.log("DB Connected successfully");
    })
    .catch((err) => {
      console.log(err);
    });

  console.log(`Server is running on ${process.env.PORT}`);
});
