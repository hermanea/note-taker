const express = require("express");
const router = express.Router();
const path = require("path");
const notesRoute = require('./notesController.js');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
  });

router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"))
});


router.use('/api/notes', notesRoute)

module.exports = router;