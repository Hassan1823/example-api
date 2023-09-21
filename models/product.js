const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  ParentTitle: {
    type: String,
  },
  ImageLink: {
    type: String,
  },
  Alt: {
    type: String,
  },
  Family: {
    type: String,
  },
  Years: {
    type: String,
  },
  Frames: {
    type: String,
  },
  Generation: {
    type: String,
  },
  BreadcrumbsH1: {
    type: String,
  },
  ListOfHrefs: [
    {
      H1Tag: {
        type: String,
      },
      cards: [
        {
          Href: {
            type: String,
          },
          ImageLink: String,
          Alt: String,
          hrefH1: String,
          hrefNumbers: [String],
          hrefNames: [String],
          hrefPrices: [String],
        },
      ],
    },
  ],
  TypesDiv: String,
  TextsDiv: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

// adding schema to collection
module.exports = mongoose.model("Product", productSchema);
