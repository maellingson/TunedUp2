let Strategy = require('passport-google-oauth20').Strategy;
require('dotenv').config();
let User = require('../models/users');

//A strategy is the way we are authenticating.
//This file sets up the github strategy. 
//github uses oath2 to authenticate, so most other 3rd party auths (facebook, google, etc) will be similar


console.log("Google app Client ID: ", process.env.CLIENT_ID); //test that we got our env setup right
const cbUrl = (process.env.NODE_ENV === "production" ? '/login/google/cb' : 'http://localhost:3001/login/google/cb')

const strategy = new Strategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: cbUrl
},
  function (accessToken, refreshToken, profile, cb) {
    // In this example, the user's Github profile is supplied as the user
    // record.  In a production-quality application, the Github profile should
    // be associated with a user record in the application's database, which
    // allows for account linking and authentication with other identity
    // providers.

    console.log("Successfully logged in: ", profile);

    console.log(`THE PHOTO URL: ${profile.photos[0].value}`)
    User.findOrCreate({ googleid: profile.id }, { googleid: profile.id, username: profile.displayName, image: profile.photos[0].value }, (err, result) => {
      console.log("This is what we got from the db ", result)
      if (err) return cb(err, false);
      else if (!result) return cb("User created? not in DB. THis should never happen: " + profile.id, false);
      else return cb(null, result);
    })
    // .then(DBuser => cb(null, DBuser))
    // .catch()
    // User.findOrCreate({
    //   where :{
    //     google_id: profile.id
    //   }, 
    //   defaults: {username: profile.username}
    // })
    // .then(DBuser => cb (null, DBuser))

    // .catch()

    // get rid of this when you get mongo set up
  });

module.exports = strategy;




