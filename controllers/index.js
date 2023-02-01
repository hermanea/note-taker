const express = require('express');
const router = express.Router();
const fs = require("fs");
const generateUniqueID = require('generate-unqiue-ID');

router.get("/", (req, res) => {
    fs.readFile("./db/db.json", "utf-8", (err, data) => {
        if (err) {
            res.status(500).send("Ooooops! Something went wrong...");
            throw err;
        } else {
            const notesData = JSON.parse(data);
            res.json(notesData);
        }
    });
});

router.post("/", (req, res) => {
    fs.readFile("./db/db.json", "utf-8", (err, data) => {
      if (err) {
            res.status(500).send("Something is wrong...");
            throw err;
      } else {
            const notesData = JSON.parse(data);
            const newNote = {
                title: req.body.title,
                text: req.body.text,
                id: generateUniqueID()          
        }
        notesData.push(newData);
        fs.writeFile("./db/db.json", JSON.stringify(notesData, null, 4), (err) => {
            if (err) {
                res.status(500).send("Something is wrong...");
                throw err;
            } else {
                res.send("data added!");
            }
        });
      }
    });
  });

  module.exports = router;
