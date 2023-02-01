const express = require('express');
const router = express.Router();
const fs = require("fs");
const generateId = require('generate-unqiue-id');

router.get("/", (req, res) => {
    fs.readFile("./db/db.json", "utf-8", (err, data) => {
        if (err) {
            res.status(500).send("Something is wrong ...");
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
                id: generateId()          
        }
        notesData.push(newData);
        fs.writeFile("./db/db.json", JSON.stringify(notesData, null, 4), (err) => {
            if (err) {
                res.status(500).send("Something is wrong...");
                throw err;
            } else {
                res.send("Data added!");
            }
        });
      }
    });
  });

module.exports = router;
