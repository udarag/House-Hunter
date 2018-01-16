var express = require('express');
var router = express.Router();
var listings = require('../models/Listings');

router.get('/', function (req, res, next) {
    listings.getAllListings(function (err, data) {
        if (err) {
            data = [];
        }
        res.render('index', {data: data});
    });
});

module.exports = router;
