module.exports = mongoose => {
  var schema = mongoose.Schema(
  {  
   userid: String, 
   password: String,
   name: String,
   email: String,
   phonenumber: String,
   access: String,    //True or False
   hours: Number,
   roles: [ {type: mongoose.Schema.Types.ObjectId, ref: "role"} ]
  } 
   ,{
    timestamps: true
});
  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    return object;
  });

  const member = mongoose.model("member", schema);
    return member;
};

