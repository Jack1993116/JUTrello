var express = require('express');
var router = express.Router();
var passport = require('passport');
var Usercollections = require('../models/usercollections');
var Collections = require('../models/collections');
var Groups = require('../models/groups');


var getcollectionByColId = require('../mymodules/getcollection');


router.post('/', function(req, res, next) {
	console.log("-----------passed the jwt passport")
	console.log("-----------header:"+req.headers.authorization)
	console.log("-----------USER:" + req.user[0]._id);
	

	//get user collection array, group array from usercollection model

	Usercollections.findOne({userid: req.user[0]._id})
	.then(async usercollection => { 
		var dd = await getcollectionByColId(usercollection.collections)
		console.log("3------"+dd)
		// const collections = usercollection.collections;
		// const groups = usercollection.groups;
		})

	if (req.user) {
		res.json(req.user);
	}
	

});

module.exports = router;