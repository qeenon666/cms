
const mongoose = require("mongoose");
var MongoClient = mongoose.Promise = global.Promise;

var url = "mongodb://localhost:27017/product1"

const db={};
db.mongoose = mongoose;
db.url = url;
db.product = require("./products.model.js")(mongoose);

module.exports = db; 

