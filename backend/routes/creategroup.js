var express = require('express');
var router = express.Router();
var Usercollections = require('../models/usercollections');
var Groups = require('../models/groups');


router.post('/', function(req, res, next) {
	console.log("-----------passed the jwt passport")
	console.log("-----------header:"+req.headers.authorization)
	console.log("-----------USER:" + req.user[0]._id);
	console.log(req.body.createinfo)
	
	var newgroup = new Groups({name: req.body.createinfo.title, members: [req.user[0]._id]});
	newgroup.save()
	.then(col => {
		Usercollections.findOne({userid: req.user[0]._id})
		.then(usercol => {

			var id = col._id;
			usercol.groups = [...usercol.groups,id];

			usercol.save();

		});

		console.log(col);
		res.json({group: col});
	})

});

module.exports = router;