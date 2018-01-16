var express = require('express');
var router = express.Router();
var listings = require('../models/Listings');
var auth = require('../middleware/auth')


router.get('/:id', function (req, res, next) {

    let id = req.params.id;
    listings.getlistingDetails(id, function (err, data) {
        if (err) {
            data = [];
        }
        res.render('search/listingDetails', {data: data});
    });

});

router.post('/:id', auth, function (req, res) {

//res.json(req.body.AgentName);

// Query: res.json(req.body.Query);

// listingId:  res.json(req.params.id);


// <%= data[i].id %>

// insert into query table

// parameters: query -- req.body.qoery
// username--
// listingid -- req.listing.id

        listings.postQuery(req.body.Query, req.body.AgentName, req.params.id, 'test' , function (err, data) {
        if (err) {
            data = [];
        }
        // res.json("Query Inserted")
        res.redirect('/fa17g02/')
        });
});

module.exports = router;
