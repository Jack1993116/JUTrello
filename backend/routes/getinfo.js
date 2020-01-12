var express = require('express');
var router = express.Router();
var Usercollections = require('../models/usercollections');


// require getcollection and getgroup module 
var getcollectionByColId = require('../mymodules/getcollection');
var getgroupsByGrpId = require('../mymodules/getgroups');


router.post('/', function(req, res, next) {
	console.log("-----------passed the jwt passport")
	console.log("-----------header:"+req.headers.authorization)
	console.log("-----------USER:" + req.user[0]._id);
	

	//get user collection array, group array from usercollection model
	if (req.user) {
		Usercollections.findOne({userid: req.user[0]._id})
		.then(async (usercollection) => { 

			// get collections of request user
			const usercollections = await getcollectionByColId(usercollection.collections)

			//get groups of request user
			const usergroups = await getgroupsByGrpId(usercollection.groups)

			// send collections and groups to client
			res.json({collections:usercollections, groups:usergroups})

		})
	}
	
	if (!req.user) {
		res.json({message:"error"});
	}
	

});

module.exports = router;