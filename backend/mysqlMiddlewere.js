const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "users",
});

const mysqlMiddlewere = (req, res, next) => {
  connection.connect((err) => {
    if (err) {
      console.error("Error connecting to MySQL server: " + err.stack);
      return;
    }
    console.log("Connected to MySQL server as id " + connection.threadId);
    next();
  });
};

module.exports = mysqlMiddlewere;
