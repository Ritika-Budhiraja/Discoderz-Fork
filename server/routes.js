const express = require("express");
const router = express.Router();
const connectDB = require("./db");
const Hospital = require("./models/hospitals");
const User = require("./models/users");
const Request = require("./models/request");

connectDB();
module.exports = router;
