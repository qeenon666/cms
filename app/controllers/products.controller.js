const db = require("../models");
const Product = db.product;

exports.add = (req, res) => {
  // Create Database
    const product = new Product({
    id: req.body.id,
    model: req.body.model,
    manufacture: req.body.manufacture,
    modelYear: req.body.modelYear,
    mileage: req.body.mileage,
    description: req.body.description,
    color: req.body.color,
    price: req.body.price,
    condition: req.body.condition,
    status: req.body.status,
    VINCode: req.body.VINCode
  });

  // Save Database 
  Product.find(function(err, result){
     if(err) {
        res.status(500).send("500 Internal Server Error"); 
        return; 
     }
      product.save(product).then(data => {
       res.send(data);
     }).catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    })
  });
};

exports.edit = (req, res) => {
   Product.edit({id: req.params.id}, (err, result) =>
         {
            if(err) throw err;
            var data = result;
            res.send(data);
         }
      );
};
exports.update = (req, res) => {

  if (!req.body) {
    return res.status(400).send({
      message: "400 Update Error! Empty..."
    });
  }

   var body = req.body;
     Product.findOneAndUpdate({id: body.id}, {$set: { model: body.model, manufacture: body.manufacture, modelYear: body.modelYear,
    mileage: body.mileage, description: body.description, color: body.color, price: body.price, condition: body.condition, status: body.status,
    VINCode: body.VINCode } }, {upsert: true, returnNewDocument: true}, 
     (err, data) => { if(err) throw err;
     res.send(data);
    });

};

exports.find = (req, res) => {
   Product.find(function(err, product){
        if(err) return res.status(500).send({error: 'database failure'});
        res.send(product);
        console.log(product);
    })
};
exports.delete = (req, res) => {
  Product.deleteOne({VINCode:req.params.VINCode}, (err,data) => 
      {
      if(err) throw err;
       
       res.send(data + {message: "delete success!"});
   });
};
