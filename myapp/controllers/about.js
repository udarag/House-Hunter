var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('about/about');
});

router.get('/vipul', function (req, res, next) {
    res.render('about/vipul');
});

router.get('/mohan', function (req, res, next) {
    res.render('about/mohan');
});

router.get('/savan', function (req, res, next) {
    res.render('about/savan');
});

router.get('/aishwarya', function (req, res, next) {
    res.render('about/aishwarya');
});

router.get('/larry', function (req, res, next) {
    res.render('about/larry');
});

router.get('/udara', function (req, res, next) {
    res.render('about/udara');
});

module.exports = router;
