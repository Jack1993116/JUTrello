var express = require('express');
var router = express.Router();
var passport = require('passport');

router.post('/', function(req, res, next) {
	console.log("passed the jwt passport")

	passport.authenticate('jwt', {session: false}, (err, user) => {console.log("user")})
	console.log(req.headers.authorization)
	console.log(req.body)
	res.send('pass the jwt passport')
});

module.exports = router;