const mongoose = require("mongoose");
const db = require ("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongod://localhost/listings"
);

const listingsSeed = [
    {
        title: "Need Banjo Lessons",
        description: "Experienced saxophone player wanting to learn how to play the banjo.",
        username: "DukeSilver",
        date: "2018-01-10 16:58:25:814Z"

    },
    {
        title: "Musicians Needed",
        description: "Looking to start a jam band. Looking for percussionists and additional guitars.",
        username: "GuitarGuy",
        date: "2018-12-06 16:58:25:814Z"
    },
    {
        title: "Grammy Winner wants to recruit for a new group.",
        description: "I wants to create a new pop group. Auditions will be held at the University of Minnesota on September 1st.",
        username: "AliciaKeys",
        date: "2014-04-23 16:58:25:814Z"
    },
    {
        title: "Dueling Pianos",
        description: "Starting a dueling pianos ensemble to travel around the midwest. Contact me if interested.",
        username: "Piano1234",
        date: "2011-11-15 16:58:25:814Z"
    },
    {
        title: "Musicians needed for Musical",
        description: "Looking for piano players, guitar players and violin players for a summer musical. Audtions next Sunday.",
        username: "DukeSilver",
        date: "2017-04-18 16:58:25:814Z"
    },
    {
        title: "Coffee Shop Jam Band",
        description: "Looking to jam at a coffee shop in St. Paul. Acoustic Guitar, cello and violin players wanted.",
        username: "ClassyClassical",
        date: "2012-06-23 16:58:25:814Z"
    },
];


db.tunedUp
  .remove({})
  .then(() => db.listings.collection.insertMany(listingsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
