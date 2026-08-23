const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "CI/CD Learning Project",
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Server is running on the server",
  });
});

module.exports = app;