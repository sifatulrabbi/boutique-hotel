const express = require("express");
const cors = require("cors");
const {
  authRouter,
  roomsRouter,
  reservationsRouter,
  requestsRouter,
} = require("../api/routers");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/v1", (req, res) => {
  res.status(200).json({message: "Hello, world"});
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/rooms", roomsRouter);
app.use("/api/v1/reservations", reservationsRouter);
app.use("/api/v1/requests", requestsRouter);

module.exports.app = app;
