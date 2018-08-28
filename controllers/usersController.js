const db = require("../models");


module.exports = {
  findById: function(req, res) {
    console.log('USERSCONTROLLER ', req)
    db.users
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.users
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    //console.log(req.body)
    db.users

      .findOneAndUpdate({_id: req.params.id}, { $set: { location: req.body.location, phone: req.body.phone, email: req.body.email, bio: req.body.bio, instruments: req.body.instruments, genres: req.body.genres, links: req.body.links} }, { new: true })

      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.users
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};