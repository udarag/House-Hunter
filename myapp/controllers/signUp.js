var express = require('express');
var router = express.Router();
var auth = require('../models/authentication');
var db = require('../helpers/db');
//var expressValidator = require('express-validator);
var passport = require('passport');
var bcrypt = require('bcrypt');
const saltRounds = 10;

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('signUp');
});

router.post('/', function (req, res) {

//	var firstName = req.body.firstNname;
//  	var lastName = req.body.lastame;
//	var email = req.body.email;
//	var password = req.body.password;
//	var confirmPassword = req.body.confirmPassword;
//	var accountType = req.body.accountType;

	// Validation
//	req.checkBody('firstName', 'Name is required').notEmpty();
//        req.checkBody('lastName', 'Username is required').notEmpty();
//	req.checkBody('email', 'Email is required').notEmpty();
//	req.checkBody('email', 'Email is not valid').isEmail();
//	req.checkBody('password', 'Password is required').notEmpty();
//	req.checkBody('confirmPassword', 'Passwords do not match').equals(req.body.password);
//	req.checkBody('accountType', 'Account Type is required').notEmpty();

	bcrypt.hash(req.body.password, saltRounds, function (err, hash) { 
        auth.postUsers(req.body.firstName, req.body.lastName, req.body.email, hash, req.body.accountType, function(err, data){
        if (err) {
            data = [];
        }
	// get UserId
	auth.getUserId(function (err, results) {
	const user_id = result[0];
//	res.json(results[0]);
//	res.rediret("/fa17g02/login");
	});
  	res.json(hash);      
//	res.redirect("/fa17g02/login")
        });
     });
  });

passport.serializeUser(function(user_id, done) {
  done(null, user_id);
});

passport.deserializeUser(function(user_id, done) {
    done(null, user_id);
  });

module.exports = router;
