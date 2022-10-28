// require mongoose and destructor Schema and model from it
const { Schema, model } = require("mongoose");
//Create a viking schema here
//<================Schema=====================>
const vikingSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  familyName: {
    type: String,
    required: true,
  },
  strength: Number,
  weapon: [String],
});

//create a model with two arguments ====> (the name of the collection, schema or shape of data)
const VikingModel = model("fallenViking", vikingSchema);
//always make sure you export you model to use in other files
module.exports = VikingModel;
