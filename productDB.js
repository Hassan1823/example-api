require("dotenv").config();

// local imports
const connectDB = require("./db/connect");
const Product = require("./models/product");

const ProductJson = require("./products.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    // delete the previous data
    await Product.deleteMany();
    await Product.create(ProductJson);
    console.log("Data Uploaded !!!");
  } catch (error) {
    console.log(error);
  }
};

start();
