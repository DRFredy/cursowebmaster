var mysql = require('mysql');
var util = require('util');


var pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB_NAME
});

pool.query = util.promisify(pool.query);

module.exports = pool;

// NOTA: en caso de recibir el error 
// ejecutar el siguiente alter en un cliente mysql como workbench/dbeaver/phpmyadmin:
// ALTER USER 'admin'@'localhost' IDENTIFIED WITH mysql_native_password BY 'contraseña';
// No comprendo el por qué, pero funciona.
// fuente: https://stackoverflow.com/questions/52815608/er-not-supported-auth-mode-client-does-not-support-authentication-protocol-requ