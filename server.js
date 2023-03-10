const express = require("express");
const app = express();
const path = require("path");
const routes = require('./controllers');

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(routes)

app.listen(port, function() {
    console.log(`Server listening at port ${port}`);
})