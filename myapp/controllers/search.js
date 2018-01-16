var express = require('express');
var router = express.Router();
var listings = require('../models/Listings');

router.get('/', function (req, res, next) {

    listings.getListingsBySearch(req.query.q, function (err, data) {
        if (err) {
            data = [];
        }
//	res.json({data: req.query.q});
        res.render('search/search', {data: data, qs:req.query});
    });
});

module.exports = router;
