var express = require('express');
var router = express.Router();
var Collections = require('../models/collections')


router.post('/', function(req, res, next) {
	console.log("-----------passed the jwt passport for getcollection")
	console.log("-----------collectionid:"+req.collectionid)

	//get user collections from collection model
	Collections.findOne({_id:req.collectionid})
	.then(row=>{
			res.json(row);
		}
	)
	.catch(err => res.json({message: "get onecollection "}))

});

module.exports = router;