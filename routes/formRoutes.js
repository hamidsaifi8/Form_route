const express = require("express");
const path = require("path");
const formRouter = express.Router();

// formRouter.use(express.urlencoded({ extended: true }));
// formRouter.use(express.json());

formRouter.get("/form", (req, res) => {
  res.sendFile(path.join(__dirname, "../view/form.html"));
});

formRouter.post("/submit-detail", (req, res) => {
  console.log("Form submitted with data:", req.body);
  res.sendFile(path.join(__dirname, "../view/userPageShow.html"));
});

module.exports = formRouter;
