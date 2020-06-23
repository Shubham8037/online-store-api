const express = require("express");
const router = express.Router();
const Person = require("../models/Person");

// Gets all the Person's
router.get("/", async (req, res) => {
  try {
    const persons = await Person.find();
    res.json(persons);
  } catch (err) {
    res.json({ message: err });
  }
});

// Creates New Person
router.post("/", async (req, res) => {
  const person = new Person({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    username: req.body.username,
  });

  try {
    const savedPerson = await person.save();
    res.json(savedPerson);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
