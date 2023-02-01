const express = require("express");
const router = express.Router();
const fs = require("path");


// Returns the file notes.html.
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
})



module.exports = router;