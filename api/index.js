const express = require("express");
const cors = require("cors");

const app = express();

// FORCE HEADERS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(cors());
app.use(express.json());

app.get("/test", (req, res) => {
  return res.status(200).json({
    user: {
      name: "Nehal",
      lastName: "Kadyan",
    },
  });
});

module.exports = app;
