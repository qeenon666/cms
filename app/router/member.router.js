module.exports = app => {
  const product = require("../controllers/products.controller.js");
  //const authJwt = require("../controllers/authJwt.js"); 
  var router = require("express").Router();

  router.get("/find", product.find);

  router.post("/add", product.add);

  router.delete("/delete/:VINCode", product.delete);


  app.use("/api", router);
};
