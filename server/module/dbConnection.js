const dbConnection = () => {
    var mysql = require('mysql');

    var con = mysql.createConnection({
        host: "localhost",
        port: "3306",
        user: "root",
        password: "root",
        database: "andrea_fesion"
    
      });
      
      con.connect(function(err) {
        if (err) throw err;
        console.log("MySQL database connected!");
      });
      
      return con
}
module.exports = {dbConnection}
