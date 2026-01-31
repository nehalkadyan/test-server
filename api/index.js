const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

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
