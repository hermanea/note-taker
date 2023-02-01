const express = require("express");
const app = express();
const path = require("path");

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const notesRoute = require('./controllers');
app.use(notesRoute)

app.listen(port, function() {
    console.log('Server listening at port ${PORT}');
})