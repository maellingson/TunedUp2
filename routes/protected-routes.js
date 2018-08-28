var router = require('express').Router();
var User = require('../models/users');
var path = require("path");

//these 2 lines ensure all the routes on this router are protected. 
router.use(require('./protection'))


router.get('/home',
//ensureLoggedIn('/'),
//passport.authenticate('google', { scope: ['profile'] }, { failureRedirect: '/' }),
function (req, res) {

    console.log(req.user)
    console.log("User logged in: ", req.user[0]._id);
    res.redirect('http://'+ req.host + ':3000/')

    //res.sendFile(path.join(__dirname, "../"));
    //console.log("User Logged In. User:", req.user,"query:", req.query)
    //res.json({ success: (req.user ? "Yes" : "No"), user: req.user });
    //res.redirect('/testgoogleuser');
}
);

router.get('/info',
function(req,res) {
    res.json(req.user[0])
})


// router.route("/info")
//     .get(  (req,res) => res.json(req.user[0]) )
//     .post( (req,res) => res.json(req.user[0]) )
const api = require("./api/index.js");
router.use("/api", api);


module.exports = router

    //google routes
