const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    product_name: { type: String, required: true, unique: true, trim: true },
    description: { type: String, required: true, trim: true },
    cost: { type: Number, required: true, trim: true },
    manf_country: { type: String, required: true, trim: true },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
