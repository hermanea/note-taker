const express = require('express');
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

router.get("/", (req, res) => {
    fs.readFile("./db/db.json", "utf-8", (err, data) => {
        if (err) {
            res.status(500).send("Error retrieving note!");
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
            res.status(500).send("Error creating note!");
            throw err;
      } else {
            const notesData = JSON.parse(data);
            const newNote = {
                title: req.body.title,
                text: req.body.text,
                id: uuidv4()
        }
        notesData.push(newNote);
        fs.writeFile("./db/db.json", JSON.stringify(notesData, null, 4), (err) => {
            if (err) {
                res.status(500).send("Error.");
                throw err;
            } else {
                res.send("Data added!");
            }
        });
      }
    });
});

router.delete("/:id", (req, res) => {
    fs.readFile("./db/db.json", "utf-8", (err, data) => {
        if (err) {
            res.status(500).send("Error deleting note!");
            throw err;
        } else {
            let notesData = JSON.parse(data);
            notesData = notesData.filter((friend) => {
                if (friend.id == req.params.id) {
                    return false;
                } else {
                    return true;
                }
            });
            fs.writeFile("./db/db.json", JSON.stringify(notesData, null, 4), (err) => {
                if (err) {
                    res.status(500).send("Error.");
                    throw err;
                } else {
                    res.send("Data deleted!");
                }
            });
        }
    });
});

module.exports = router;