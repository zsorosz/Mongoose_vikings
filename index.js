//Make sure to require your model so you can connect to the DB
const { Model } = require("mongoose");
const VikingModel = require("./models/User");

//This line of code connects to the Database
require("./db");

//Iteration 2:

//Iteration 3:
const Viking1 = {
  firstName: "Dave",
  familyName: "The Brave",
  strength: 9,
  weapon: "axe",
};
// VikingModel.create(Viking1)
//   .then((newVikingInDB) => {
//     console.log("nice, u have a new viking", newVikingInDB);
//   })
//   .catch((err) => {
//     console.log("oh nooo, error", err);
//   });

// VikingModel.findByIdAndDelete("63db9c8aa1921db5a461dfcf")
//   .then((deletedViking) => {
//     console.log("nice, u deleted a viking", deletedViking);
//   })
//   .catch((err) => {
//     console.log("oh nooo, error", err);
//   });

let vikingsArr = [
  {
    firstName: "Dave",
    familyName: "The Brave",
    strength: 9,
    weapon: "axe",
  },
  {
    firstName: "Hanry",
    familyName: "The Angry",
    strength: 8,
    weapon: "hands",
  },
  {
    firstName: "Peter",
    familyName: "The Eater",
    strength: 6,
    weapon: "teeth",
  },
  {
    firstName: "Luke",
    familyName: "The Cute",
    strength: 5,
    weapon: "hugs",
  },
];

// VikingModel.insertMany(vikingsArr)
//   .then((vikingsCreated) => {
//     console.log("nice, u created a bunch of vikings", vikingsCreated);
//   })
//   .catch((err) => {
//     console.log("oh nooo, error", err);
//   });

VikingModel.findByIdAndUpdate(
  "63db9f350e97e1ed34bbeb58",
  { strength: 1000 },
  { new: true }
)
  .then((vikingUpdated) => {
    console.log("nice, u updated a viking", vikingUpdated);
  })
  .catch((err) => {
    console.log("oh nooo, error", err);
  });
