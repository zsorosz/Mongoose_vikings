//Make sure to require your model so you can connect to the DB
//<========Model of viking to connect the backend to the DB
const { default: mongoose } = require("mongoose");
const VikingModel = require("./models/User");
//This line of code connects to the Database
require("./db");

//Iteration 2:
//create a user as an object
const Ragnar = {
  firstName: "Ragnar",
  familyName: "Lothbrok",
  strength: 100,
  weapons: ["Long Sword", "Intelligence", "Battle Axe"],
};
//array of vikings to insert
const arrayOfVikings = [
  {
    firstName: "Ragnar",
    familyName: "Lothbrok",
    strength: 100,
    weapons: ["Long Sword", "Intelligence", "Battle Axe"],
  },
  {
    firstName: "Floki",
    familyName: "Unknown",
    strength: 50,
    weapons: ["Intelligence", "Boat Building"],
  },
  {
    firstName: "Bjorn",
    familyName: "Lothbrok",
    strength: 150,
    weapons: ["Long Sword", "Aggression", "Battle Axe"],
  },
];

//Iteration 3:
//Insert the new user that you created into the Database
VikingModel.create(Ragnar)
  .then((vikingInDB) => {
    console.log("Your viking was allowed to enter Valhalla", vikingInDB);
    return VikingModel.deleteOne({ firstName: "Ragnar" });
  })
  .then(() => {
    console.log("You kicked one viking out of Valhalla");
    //inserting many vikings into the DB
    return VikingModel.insertMany(arrayOfVikings);
  })
  .then((arrayOfVikingsInDB) => {
    console.log(
      "Now many viking warriors are in Valhalla!",
      arrayOfVikingsInDB
    );
    //updated viking to 10000 strength, he is now Odin
    return VikingModel.findOneAndUpdate(
      { firstName: "Ragnar" },
      { strength: 10000 },
      { new: true }
    );
  })
  .then((updatedViking) => {
    console.log("A viking was updated", updatedViking);
    //Note: Make sure to close your DB connection afterwards
    return mongoose.connection.close();
  })
  .then(() => {
    console.log("The connection is now closed :)");
  })
  .catch((err) => console.log(err));
