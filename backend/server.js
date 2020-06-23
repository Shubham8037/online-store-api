const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const connectDB = require("./models/MongoDB");
const session = require("express-session");
const cors = require("cors");
const MongoStore = require("connect-mongo")(session);

const passport = require("passport");
require("./passport.js")(passport);

require("dotenv/config");

// parse application/json
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Sessions
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/products", require("./routes/products"));
app.use("/persons", require("./routes/persons"));

// Google Oauth Route
app.use("/auth", require("./routes/auth"));

// ROUTES
app.get("/", (req, res) => {
  res.send(
    "<div><center><h1>WELCOME</h1><br><h3>Google OAuth implemented at /auth/google/<h3></center></div>"
  );
});

app.get("*", (req, res) => {
  res.send("<center><h1>NOTHING HERE</h1></center>");
});

// Listening to port here
app.listen(5000);
