// var router = require('express').Router()
// var path = require("path");
// const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn

// module.exports = function (passport) {
//     router.route("/")
//         .get((req, res) => res.redirect('/login/google'))

//     router.route("/login/google")
//         .get((req, res) => passport.authenticate('google', { scope: ['profile'] }),
//             function (req, res) {
//                 res.redirect('/home');
//             }
//         )

//     router.route("/login/google/cb")
//         .get((req, res) => passport.authenticate('google', { scope: ['profile'] }),
//             function (req, res) {
//                 res.redirect('/home');
//             }
//         );
//     return router;
// }

//module.exports = router;



// module.exports = function (passport) {

//     //google routes
//     router.get("/", function (req, res) {
//         console.log("In /:");
//         res.send();
//     })

//     router.get('/login/google',
//         passport.authenticate('google', { scope: ['profile'] }),
//         function (req, res) {
//             res.redirect('/home');
//         }
//     );

//     router.get('/login/google/cb',
//         passport.authenticate('google', { scope: ['profile'] }),
//         function (req, res) {
//             res.redirect('/home');
//         }
//     );
//     return router;
// }