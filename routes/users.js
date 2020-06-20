const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Gets all the Users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.json({ message: err });
  }
});

// Creates New User
router.post("/", async (req, res) => {
  const user = new User({
    First_name: req.body.First_name,
    Last_name: req.body.Last_name,
    Username: req.body.Username,
  });

  try {
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (err) {
    res.json({ message: err });
  }
});

/* 
// Gets single User
router.get("/:userID", async (req, res) => {
  try {
    const usersid = await User.find({ Username: "username" });
    res.json(usersid);
  } catch (err) {
    res.json({ message: err });
  }
});
 */

module.exports = router;
