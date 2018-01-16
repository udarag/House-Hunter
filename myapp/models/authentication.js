var db = require('../helpers/db');

//Insert into user

exports.postUsers = function (firstName, lastName, email, password, accountType, cb) {
var sql = 'INSERT INTO user( FirstName, LastName, Email, Password, Role) VALUES ("'+firstName+'","'+lastName+'" ,"'+email+'", "'+password+'","'+accountType+'")';
db.runquery(sql,cb);
};

// Get user_id
exports.getUserId = function (cb) {
    var sql = "SELECT LAST_INSERT_ID() as user_id FROM user ";
    db.runquery(sql, cb);
};
