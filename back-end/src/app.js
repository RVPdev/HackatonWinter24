const express = require("express");
const cors = require("cors");
const app = express();
const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");

const loginRouter = require("./login/login.router");
const metricsRouter = require("./metrics/metrics.router");
const signupRouter = require("./signup/signup.router");
const adminRouter = require("./admin/admin.router");

app.use(cors());
app.use(express.json());

app.use("/login", loginRouter);
app.use("/metrics", metricsRouter);
app.use("/signup", signupRouter);
app.use("/admin", adminRouter);


app.use(notFound);
app.use(errorHandler);


module.exports = app;