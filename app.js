require("dotenv").config();

const express = require("express");
const app = express();
const connectDB = require("./db/connect");

const PORT = process.env.PORT || 5000;

// local imports
const products_routes = require("./routes/products");

// define root
app.get("/", (req, res) => {
  res.send("Hi, I'm live !!!");
});

// middleware or to set router
app.use("/api/products", products_routes);

// listen the server
const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log("Server connected to port ", PORT);
    });
  } catch (error) {
    console.log("Server Connection Error : ", error);
  }
};

start();

// step # 2
// go to router/products.js
