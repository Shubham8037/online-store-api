const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// Gets all the products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.json({ message: err });
  }
});

// Submits a product
router.post("/", async (req, res) => {
  const post = new Product({
    product_name: req.body.product_name,
    description: req.body.description,
    cost: req.body.cost,
    manf_country: req.body.manf_country,
  });

  try {
    const savedProduct = await post.save();
    res.json(savedProduct);
  } catch (err) {
    res.json({ message: err });
  }
});

//Get Specific Product
router.get("/:productId", async (req, res) => {
  try {
    const product = await Product.find({ Product_name: req.params.productId });
    res.json(product);
  } catch (err) {
    res.json({ message: err });
  }
});

//Delete a Specific Product
router.delete("/:productId", async (req, res) => {
  try {
    const removedProduct = await Product.remove({ _id: req.params.productId });
    res.json(removedProduct);
  } catch (err) {
    res.json({ message: err });
  }
});

//Update a Specific Product
router.patch("/:productId", async (req, res) => {
  try {
    const updatedProduct = await Product.updateOne(
      { _id: req.params.productId },
      { $set: { cost: req.body.cost } }
    );
    res.json(updatedProduct);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
