const { compile } = require('ejs');
var mssql = require('mssql');

var con = mssql.createConnection({
  host: "localhost",
  user: "sa",
  database: "enfrente",
  port: 1433,
  options: {
    encrypt: false
  }
});



function dbConnect(sql, cb) {
  con.query(sql, function (err, result) {
    if (err) throw err;
    cb(result)
  });
}

module.exports = dbConnect;