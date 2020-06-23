const express = require("express");
const passport = require("passport");
const router = express.Router();

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
  res.send("Login Failed");
});

/* 
const isLoggedIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
  }
};
*/

router.get(
  "/success",
  /* isLoggedIn, */ (req, res) => {
    res.send(`WELCOME TO THE PARTY, ${req.user.displayName}!!!`);
  }
);

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
