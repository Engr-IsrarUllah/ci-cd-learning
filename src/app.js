const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "CI/CD Learning Project",
  });
});

<<<<<<< HEAD
app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Server is running",
=======
app.get("/profile", (req, res) => {
  res.json({
    name: "Israr",
    role: "Full Stack Developer",
>>>>>>> main
  });
});

module.exports = app;