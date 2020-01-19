var express = require("express");
var router = express.Router();
var Collections = require("../models/collections");


router.post("/", function(req, res, next) {
	console.log("-----------passed the jwt passport for getcollection")

	//get user collections from collection model
	Collections.findOne({_id:req.body.id})
	.then(row=>{
			Object.keys(req.body.collection).map(key => {
				row[key] = req.body.collection[key];
			});

			row.save()
			.then(result => {
				res.json({collection: result});
			})
		}
	)

});

module.exports = router;