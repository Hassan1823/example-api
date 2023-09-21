const express = require("express");
const router = express.Router();

// importing/requiring controllers/products.js
const {
  getAllProducts,
  getAllProductsTesting,
} = require("../controllers/products");

// define the routes
router.route("/").get(getAllProducts);
router.route("/testing").get(getAllProductsTesting);

module.exports = router;

// step 3
// defines those routes functions
// goto controllers/products.js
