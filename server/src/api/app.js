const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/v1", (req, res) => {
  res.status(200).json({message: "Hello, world"});
});

module.exports.app = app;
