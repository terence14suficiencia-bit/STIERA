const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Terence031404", 
  database:"stiera_lms",
});

module.exports = db;
