const { compile } = require('ejs');
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "ENFRENTE"
  });
  


function dbConnect(sql, cb){
        con.query(sql, function (err, result) {
            if (err) throw err;
            cb(result)
    });
}

module.exports = dbConnect;