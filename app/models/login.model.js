module.exports = mongoose => {
    var schema = mongoose.Schema(
    	{
    		userid: String,
    		password: String,
    	}
    );
    schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    return object;
  });
  const login = mongoose.model("login", schema);
  return login;
};