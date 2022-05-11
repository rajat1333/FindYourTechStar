/* eslint-disable quotes */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/order */
const cookieParser = require("cookie-parser");
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const { getAuthMiddleware, getAccessMiddleware } = require("u-server-utils");
const validate = require("./util/authValidator");

//  Importing routes
const matchRoute = require("./src/routes/matchRoute");
const signUpRoute = require("./src/routes/signUpRoute");
const loginRoute = require("./src/routes/loginRoute");
const userRoute = require("./src/routes/userRoute");

const app = express();

// all middlewaress
app.use(logger("dev"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors());
// app.use(cors({ origin: '*', credentials: true }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Max-Age", 1728000);
  res.setHeader("Cache-Control", "no-cache");
  next();
});

const validationMid = getAuthMiddleware(validate);

//  API Endpoints
app.use("/matches", matchRoute);
app.use("/signUp", signUpRoute);
app.use("/login", loginRoute);
app.use("/users", userRoute);

module.exports = app;
