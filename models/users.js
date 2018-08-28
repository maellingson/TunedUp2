// Require mongoose
var mongoose = require("mongoose");
const findOrCreate = require('mongoose-find-or-create')

// Get a reference to the mongoose Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new ExampleSchema object
// This is similar to a Sequelize model
var UserSchema = new Schema({
  
  googleid: {
    type: String,
    trim: true,
    required: true,
    unique: true
  },
  username: {
    type: String
  },
  image: {
    type: String
  },
  email: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    default: "new@new.com"
  },
  genres: {
    type: String,
    default: "elevator"
  },
  instruments: {
    type: String,
    default: "sackbut"
  },
  location: {
    type: String,
    default: "Saint Paul, MN"
  },
  bio: {
    type: String,
    default: "Kenny G is my homeboy."
  },
  links: {
    type: String,
    default: "wickerpedia.org"
  },
  phone: {
    type: String,
    default: "772-257-4501"
  }
});
UserSchema.plugin(findOrCreate)

// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("User", UserSchema);


// User.prototype.validPassword = function(password) {
  
//   console.log("Password from the DB:" , this.password)
//   console.log("Password from the Client :" , password)
//   return (this.password === password)
// }

// Syncs with DB
//User.sync();

// Export the Example model
module.exports = User;