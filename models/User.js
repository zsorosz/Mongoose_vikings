const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  //Iteration 1:
  //Define the Schema (shape) of the information for your collection
});

const UserModel = model("user", userSchema);
module.exports = UserModel;
