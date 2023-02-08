const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  img_responsive: String,
  product_brand: String,
  product_name: String,
  product_size: String,
  product_strike: String,
});

const CartModel = mongoose.model("cart", cartSchema);

module.exports = { CartModel };
