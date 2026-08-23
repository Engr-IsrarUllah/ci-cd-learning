const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "CI/CD Learning Project",
  });
});

app.get("/profile", (req, res) => {
  res.json({
    name: "Israr",
    role: "Full Stack Developer",
  });
});

module.exports = app;