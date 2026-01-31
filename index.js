// import express

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config()

const app = express();

// port 

const port = process.env.PORT || 4000

app.use(cors())

app.get("/test", (req, res) => {
    return res.status(200).json({user : {
        name : "Nehal",
        lastName : "Kadyan"
    }})
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})