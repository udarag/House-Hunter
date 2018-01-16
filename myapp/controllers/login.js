var express = require('express');
var router = express.Router();
//var passport = require('passport');
//var LocalStrategy = require('passport-local').Strategy;
var login = require('../models/login');
//var formidable = require('formidable');
var bcrypt = require('bcrypt');
var auth1 = require('../models/login');
var db = require('../helpers/db');
var session = require('express-session');
const saltRounds = 10;

// router.use(session({
//   cookieName: 'househunter',
//   secret: 'dsbfsdkfbsdfdshfsdhbfsdb',
//   resave: true,
//   saveUninitialized = true
// }));

/* GET users listing. */
router.get('/', function (req, res, next) {
	
    res.render('login');
});





router.post('/', function(req, res){	
		auth1.getUser1(req.body.email, function(err, data)
		{
		if (err)
		{
		res.json("Error Occured")
		}
		userID = data[0];
		//res.json(userID["id"]);
		UID = userID["id"];
		req.session.uid = UID;
		//		req.session.UID = UID;
		res.redirect('/fa17g02/');
});	
});

router.get('/logout', function(req, res){
	req.session.destroy();
	res.redirect('login');
})
module.exports = router;
