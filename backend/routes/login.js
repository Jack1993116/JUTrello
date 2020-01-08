var Users = require('../models/users');
var bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

var express = require('express');
var router = express.Router();

/* login  */
router.post('/', function(req, res, next) {
	var useremail = req.body.loginEmail;
	var userpassword = req.body.loginPassword;
	// Find user by email
	Users.findOne({ email: useremail }).then(user => {
	    // Check if user exists
	    if (!user) {
	    	console.log("email not found");
	      	return res.status(404).json({ state: "Email not found" });
	    }

	    // Check password
	    bcrypt.compare(userpassword, user.password).then(isMatch => {
	      if (isMatch) {
	        // User matched
	        // Create JWT Payload
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
	          	// console.log(token);

	            res.json({
	              success: true,
	              token: "Bearer " + token
	            });
	            
	          }
	        );
	      } else {
	      	console.log("Password incorrect");
	        return res
	          .status(400)
	          .json({ passwordincorrect: "Password incorrect" });

	      }
	    });
	});
	
});

module.exports = router;
