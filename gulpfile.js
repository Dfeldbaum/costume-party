'use strict'

var gulp = require('gulp');
// var watch = require('gulp-watch'); // remove bc don't need
var nodemon = require('gulp-nodemon');
var db = require('./models/db');



// section to create SQL tables
// (create table parties (id into not null auto_increment...)
var SQL_TABLE_CREATE_PARTIES = "create table parties" + 
	"(id int not null auto_increment," +
	"name varchar(50) not null," +
	"host_name varchar(20)," +
	"location varchar(255) not null," +
	"primary key (id)" +
	");";
var SQL_TABLE_DROP_PARTIES = "drop table parties;";
var SQL_TABLE_SELECT_ALL_PARTIES = "select * from parties;";




gulp.task('db_create_tables', function(){
	console.log('creating database tables...');
	var tag = 'SQL'; // just for logging purposes only 
	// callback for an asynch method
	function createTableCallback(response) {
	console.log(tag + ' Table creation completed.');
	console.log(response);	
	}

	db.raw(SQL_TABLE_CREATE_PARTIES).then(createTableCallback);

});


gulp.task('db_drop_tables', function(){
	console.log('Dropping database tables...');

	function dropTableCallback(response){
		console.log(response);
	}
	db.raw(SQL_TABLE_DROP_PARTIES).then(dropTableCallback);

});


gulp.task('db_select_all_parties', function() {
	console.log('Selecting all parties');
	//callback response
	function selectAllPartiesCallback(response){
		console.log(response)
	}

	db.raw(SQL_TABLE_SELECT_ALL_PARTIES).then(selectAllPartiesCallback);

});


// section to drop SQL tables




// watch for changes!


// nodemon it up!
gulp.task('Nodemon', restartServer);

function restartServer() {
	nodemon({
		script: './bin/www', // starts server 
		ext: 'js hbs scss sql'

	});
};



gulp.task('default', ['Nodemon']);
