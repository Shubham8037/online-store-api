const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

app.use(bodyParser.json());

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

app.get("*", (req, res) => {
  res.send("You Shouldn't Even Be In Here");
});

// COnnect to DB
mongoose.connect(
  process.env.MONGODB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("CONNECTED")
);

// Listening to port here
app.listen(3000);
