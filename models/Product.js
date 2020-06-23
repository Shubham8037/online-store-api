const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  product_name: { type: String, required: true },
  description: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  cost: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Products", ProductSchema);
