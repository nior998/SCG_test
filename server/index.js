var express = require("express");
var cors = require("cors");
var mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Connect to MongoDB Atlas
var mongo_url = "mongodb+srv://Admin:121242846@scgtest.ukfh2.gcp.mongodb.net/SCGTEST?retryWrites=true&w=majority";
mongoose.Promise = global.Promise;
mongoose.connect(mongo_url, { useNewUrlParser: true }).then(
    () => {
        console.log("// Successfully connected to Database");
    },
    error => {
        console.log("// Error. Cannot connect to database");
        process.exit();
    }
);

var app = express();

app.use(cors());

// Server startup log
var port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("// Running complete: listening on port " + port);
});

// First message
app.get("/", (req,res) => {
    res.status(200).send("Express API Home");
});

// Error handling
app.use((req, res, next) =>{
    var err = new Error("// Error. Path not found.");
    err.status = 404;
    next(err);
});