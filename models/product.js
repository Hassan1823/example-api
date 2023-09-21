const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  // name: "iphone",
  name: {
    type: String,
    required: [true, "Name must be provided"],
  },
  // price: 154,
  price: {
    type: Number,
    required: [true, "Price Must Be Provided"],
  },
  // featured: false,
  featured: {
    type: Boolean,
    default: false,
  },
  // rating: 4.8,
  rating: {
    type: Number,
    default: 4.9,
  },
  // createdAt: "2022-11-17T11:39:09.640Z",
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  // company: "apple",
  company: {
    type: String,
    enum: {
      values: ["apple", "samsung", "dell", "mi"],
      message: `{VALUE} is not supported`,
    },
  },
});

// adding schema to collection
module.exports = mongoose.model("Product", productSchema);
