var express = require('express');
var router = express.Router();
var formidable = require('formidable');
var fs = require('fs');
var sell = require('../models/sell');
var db = require('../helpers/db')

var auth = require('../middleware/auth')

router.get('/', auth, function(req, res) {
	res.render('sell');
});

//router.get('/', ensureAuthenticated, function (req, res) {
//    res.render('sell');
//});



router.post('/', function (req, res) {
	var form = new formidable.IncomingForm();
    	form.parse(req, function (err, fields, files) {
	//res.send(fields.address + ',' + fields.city + ',' + fields.state + ',' + fields.zip + ',' + files.filetoupload.name + ',' + files.filetoupload.path);
	var oldpath = files.filetoupload.path;
	var newpath = "public/images/" + files.filetoupload.name;
	fs.rename(oldpath, newpath, function (err) {
        	if (err) throw err;
      	});
	//sell.postListings(fields.price, function(err, data){
	sell.postListings(fields.address, fields.city, fields.state, fields.zip, files.filetoupload.name,fields.price , fields.bedrooms, fields.bathrooms, function (err, data) {
        if (err) {
            data = [];
        }
//        res.send('Property successfully posted');
	res.redirect("/fa17g02/")
	});	
});
});
module.exports = router;
