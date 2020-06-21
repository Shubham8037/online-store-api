const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");
require("./passport-setup");

const passport = require("passport");
const cookieSession = require("cookie-session");

// parse application/json
app.use(bodyParser.json());

// For an actual app you should configure this with an expiration time, better keys, proxy and secure
app.use(
  cookieSession({
    name: "test-online-store-api",
    keys: ["key1", "key2"],
  })
);

// Auth middleware that checks if the user is logged in
const isLoggedIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
  }
};

// Initializes passport and passport sessions
app.use(passport.initialize());
app.use(passport.session());

//Import Routes
const productsRoute = require("./routes/products");
const usersRoute = require("./routes/users");

// Middleware's
app.use("/products", productsRoute);
app.use("/users", usersRoute);

// ROUTES
app.get("/", (req, res) => {
  res.send("Are You Sure This Was The URL?");
});

app.get(
  "/google",
  passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/plus.login",
      ,
      "https://www.googleapis.com/auth/plus.profile.emails.read",
    ],
  })
);

app.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "/google/success",
    failureRedirect: "/google/failure",
  })
);

app.get("/google/failure", (req, res) => {
  res.send("LOGIN FAILED !!");
});

// In this route you can see that if the user is logged in u can access his info in: req.user
app.get("/google/success", isLoggedIn, (req, res) => {
  res.send(`WELCOME TO THE PARTY, ${req.user.displayName}!!!`);
});

app.get("/google/logout", (req, res) => {
  req.session = null;
  req.logout();
  res.redirect("/");
});

app.get("*", (req, res) => {
  res.send("You Shouldn't Even Be In Here");
});

// Connect to DB
mongoose.connect(
  process.env.MONGODB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("CONNECTED")
);

// Listening to port here
app.listen(3000);
