const express = require("express");
const morgan = require("morgan");

const app = express();
//static folder
app.use(express.static(__dirname + "/public"));
// parses url-encoded bodies
app.use(express.urlencoded({ extended: false }));

app.use(morgan("dev"));
