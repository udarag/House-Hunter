var mysql = require('mysql');
//var fs = require("fs");

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'fa17g02',
    password: 'csc648fa17g02',
    database: 'fa17g02'
});

exports.runquery = function (sql, cb) {
    connection.query(sql, function (err, rows, fields) {
        cb(err, rows);
    });
};
