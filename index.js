const express = require('express');
const app = express();
const routes = require("./routes");
const mongoose = require("mongoose");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/todo", { useNewUrlParser: true }).then(() => {
    console.log("database connected at port 27017");
});

app.use("/api", routes);

app.listen(1000, () => {
    console.log('Star Server at port 1000');
});

// Web localhost:1000
// MongoDB localhost:27017