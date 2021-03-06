# costume-party

## 1. SQL commands 
we create a specific user in the db for a project for security purposes

```
create database costume_party;
create user 'l33tdba'@'localhost' identified by 'yellowpencil';
grant all privileges on costume_party.* to 'l33tdba'@'localhost';
```
## 2. Environment Variables
Our environment variables are stored in .env byt may also be declared as needed

```
DB_USER=l33tdba
DB_PWD=yellowpencil
DB_NAME=costume_party
DB_TYPE=mysql
DB_SERVER=localhost
```
## 3. Database Connect
Database connection is defined inside of db.js. It contains all code needed

``` js
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
```