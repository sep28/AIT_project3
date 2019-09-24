const nba = require('./nba.js');
const hoffy = require('./hoffy.js');

const myErr = function(err) {
	console.log("Error!");
}
if(process.argv[2] != null) {
	let myPath = process.argv[2];
	hoffy.myReadFile(myPath, hoffy.rowsToObjects, myErr);
}