const express = require("express");
const homeRouter = express.Router();
const path = require("path");

homeRouter.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../view/homePage.html"));
});

module.exports = homeRouter;
