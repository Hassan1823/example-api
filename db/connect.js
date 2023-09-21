const mongoose = require("mongoose");


const connectDB = (uri) => {
  console.log("DB Connected !!!");
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;


// goto app.js
