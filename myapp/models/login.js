var db = require('../helpers/db');
const bcrypt = require('bcrypt');

exports.getUser1 = function(email, cb){
var sql = 'SELECT id FROM user where Email = "'+email+'" ;';
db.runquery(sql,cb);
};
