module.exports = mongoose => {
  var schema = mongoose.Schema(
  {  
    id: String,
    model: String,
    manufacture: String,
    modelYear: Number,
    mileage: Number,
    description: String,
    color: String,
    price: Number,
    condition: Number,
    status: Number,
    VINCode: String
  } 
   ,{
    collection: 'product'
});
  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    return object;
  });

  const product = mongoose.model("product", schema);
    return product;
};

