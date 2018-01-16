var express = require('express');
var router = express.Router();
var listings = require('../models/Listings');
var auth = require('../middleware/auth')


router.get('/', auth, function (req, res, next) {

    listings.getQuery( function (err, data) {
        if (err) {
            data = [];
        }
//      res.json({data: req.query.q});
        res.render('agent', {data: data});
    });
});

//router.get('/', function (req, res, next) {
//	res.render('agent');

//    res.send('respond with a resource');

//    listings.getAllListings(function (err, data) {
//        if (err) {
//            data = [];
//        }
//        res.render('index', {data: data});
//    });
//});

module.exports = router;
