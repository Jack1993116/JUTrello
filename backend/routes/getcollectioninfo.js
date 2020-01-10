var express = require('express');
var router = express.Router();
var passport = require('passport');


router.post('/', function(req, res, next) {
	console.log("-----------passed the jwt passport for getcollection")
	console.log("-----------collectionid:"+req.collectionid)

	//get user collections from collection model
	if (req.user) {
		res.json(req.user);
	}
	

});

module.exports = router;