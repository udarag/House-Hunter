var db = require('../helpers/db');
var formidable = require('formidable');

exports.postListings = function (address, city, state, zip, ImageName, price,bedrooms, bathrooms, cb) {
var sql = 'INSERT INTO listing( City,State,Zip,Image,Address,Price, Bedrooms, Bathrooms) VALUES ("'+city+'","'+state+'" ,'+zip+', "'+ImageName+'","'+address+'","'+price+'", '+bedrooms+', '+ bathrooms + ')';
db.runquery(sql,cb);
};
