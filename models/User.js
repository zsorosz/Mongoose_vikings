const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  //first name is a string and is required
  firstName: {
    type: String,
    required: true,
  },
  lastName: String,
  age: Number,
  //family members is an array of strings
  familyMembers: [
    {
      type: String,
    },
  ],
});

//create a model with two arguments ====> (the name of the collection, schema or shape of data)
const UserModel = model("user", userSchema);
//always make sure you export you model to use in other files
module.exports = UserModel;
