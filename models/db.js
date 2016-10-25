// ./models/db.js
'use strict';


// loads environment variables from .env
require('dotenv').config();

// knex is a database adapter for node
// npm install knex && npm install lodash
// lodash is a dependency of knex

var db = require('knex')({
	client: process.env.DB_TYPE, 
	connection: {
		host: process.env.DB_SERVER,
		user: process.env.DB_USER,
		password: process.env.DB_PWD,
		database: process.env.DB_NAME
	}
});	

module.exports = db;