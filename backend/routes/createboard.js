var express = require('express');
var router = express.Router();
var Usercollections = require('../models/usercollections');
var Collections = require('../models/collections');
var Groups = require('../models/groups');


router.post('/', function(req, res, next) {
	console.log("-----------passed the jwt passport")
	console.log("-----------header:"+req.headers.authorization)
	console.log("-----------USER:" + req.user[0]._id);
	console.log(req.body.createinfo)
	
	// create new collection from req data and then save it in usercolloetions.collections
	var color = "rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")";
	var newcol = new Collections({title: req.body.createinfo.title, imgurl: req.body.createinfo.imgurl,color: color,contents:{}});
	newcol.save()
	.then(col => {
		Usercollections.findOne({userid: req.user[0]._id})
		.then(usercol => {
			console.log(col._id)
			var id = col._id
			usercol.collections = [...usercol.collections,id];

			usercol.save();
		})
	})




	if ( req.body.createinfo.group == "" ) {
		usercol.groups
	}

	// req group control not finished
	

	res.send('success')
	

});

module.exports = router;