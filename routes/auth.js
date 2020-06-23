const express = require("express");
const passport = require("passport");
const router = express.Router();

const { ensureAuth } = require("../middleware/auth");

// Google Auth
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

// Google auth callback
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/failure" }),
  function (req, res) {
    // Successful authentication
    res.redirect("/success");
  }
);

router.get("/failure", (req, res) => {
  res.send("<center><h1>Login Failed</h1></center>");
});

router.get("/success", ensureAuth, (req, res) => {
  res.send(`WELCOME TO THE PARTY, ${req.user.displayName}!!!`);
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
