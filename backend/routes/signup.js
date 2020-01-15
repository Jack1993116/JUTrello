
var Users = require('../models/users');
var UserCollections = require('../models/usercollections');
const jwt = require("jsonwebtoken");

var express = require('express');
var bcrypt = require('bcryptjs');
var router = express.Router();

/* GET signup listing. */
router.post('/', function(req, res, next) {
	// get data from req
	var useremail = req.body.signEmail;
	var userpassword = req.body.signPassword;
	// check database if exists email 
	Users.findOne({email: useremail}).then(user=>{
		if (user) {
			return res.status(400).json({ email: "Email already exists" });
		}else{
			// Hash password before saving in database
		      bcrypt.genSalt(10, (err, salt) => {
		        bcrypt.hash(userpassword, salt, (err, hash) => {
		          	if (err) throw err;
		          	userpassword = hash;

		     		// save new user info

		          	var newuser = new Users({email: useremail, password: userpassword});
					newuser.save()
					.then( (user) => {

						// create new usercolleciton model
						new UserCollections({
							userid: user._id,
							collections: [],
							groups: []
						}).save();
						
						const payload = {
				          	id: user.id,
				          	email: user.email
				        };

				        // Sign token
				        jwt.sign(
				          	payload,
				          	"secret",
				          	{
				            	expiresIn: 31556926 // 1 year in seconds
				          	},
				          	(err, token) => {
				          		console.log(token);
				            	res.json({
					             	success: true,
					              	token: "Bearer " + token
				            	});
				          	}
				        );

					})
					.catch((err)=>console.log("error"));
		          	console.log(userpassword);
			          
		        });
	      	})
		}
	})

});

module.exports = router;
