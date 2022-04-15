const mysql = require('mysql2');

const is_heroku = process.env.IS_HEROKU || false;

//mysql://b6fb24cb4c8c37:702be0f5@us-cdbr-east-03.cleardb.com/heroku_a79dfbc72e06757?reconnect=true
const dbConfigHeroku = {
	host: "ckshdphy86qnz0bj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
	user: "ehbx8x9q9lbchsfq",
	password: "dl10ejdt5t45uqge",
	database: "z0juvy6zgas4mid0",
	multipleStatements: false
};

const dbConfigLocal = {
	host: "localhost",
	user: "root",
	password: "R751956r",
	database: "lab",
	multipleStatements: false
};

if (is_heroku) {
	var database = mysql.createPool(dbConfigHeroku);
}
else {
	var database = mysql.createPool(dbConfigLocal);
}

module.exports = database;
		