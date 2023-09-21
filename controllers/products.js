const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  const { company, name, featured, sort, select } = req.query;
  const queryObject = {};

  // if user enter company then filter data is showing
  // else empty array is showing
  if (company) {
    // queryObject.company = company;  //simple hard search
    queryObject.company = { $regex: company, $options: "i" }; //if any letter matches then the result displays
  }

  if (featured) {
    queryObject.featured = { $regex: featured, $options: "i" };
  }

  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  let apiData = Product.find(queryObject);

  if (sort) {
    let sortFix = sort.replace(",", " ");
    queryObject.sort = sortFix;
    apiData = apiData.sort(sortFix);
  }

  if (select) {
    // let selectFix = select.replace(",", " ");
    let selectFix = select.split(",").join(" ");

    queryObject.select = selectFix;
    apiData = apiData.select(selectFix);
  }

  console.log("Query Object is : ", queryObject);

  // const myData = await Product.find(req.query);
  // sort("name") for ascending order
  // sort("-name") for descending order
  // for single variable
  // const myData = await Product.find(queryObject).sort("name");
  // const myData = await Product.find(queryObject).sort("price");

  // for multiple variable like for name and prices the
  // const myData = await Product.find(queryObject).sort(sort);
  const myData = await apiData;

  res.status(200).json({ myData });
};

const getAllProductsTesting = async (req, res) => {
  // simple filter
  // const myData = await Product.find({ name: "iphone" });

  // advance filter for pagination
  const myData = await Product.find(req.query).select("name company");
  console.log("Request Query : ", req.query);

  res.status(200).json({ myData });
};

module.exports = { getAllProducts, getAllProductsTesting };

// go back to routes/products.js
// and import this
