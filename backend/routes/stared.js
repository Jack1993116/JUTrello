var express = require('express');
var router = express.Router();
var Usercollections = require('../models/usercollections');


router.post('/', function(req, res, next) {

	//reseive the starred id and save or delete from the usercollections/starred list

	if (req.user) {
		Usercollections.findOne({userid: req.user[0]._id})
		.then(async (usercollection) => { 
			var staredlist = [...usercollection.stared];
			if (staredlist.indexOf(req.body.staredid) === (-1)) {
				usercollection.stared = [...usercollection.stared,req.body.staredid];
				await usercollection.save();

			} else {
				usercollection.stared.splice(staredlist.indexOf(req.body.staredid), 1);
				await usercollection.save();

			}
			
			// send  starred list to client
			console.log(usercollection.stared);
			res.json({ stared: usercollection.stared });

		})
	}
	
	if (!req.user) {
		res.json({message:"error"});
	}
	

});

module.exports = router;