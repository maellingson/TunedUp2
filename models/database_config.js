const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/tunedUp"
  );

module.exports = mongoose;