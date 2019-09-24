// hoffy.js
const fs = require('fs');

function sum(...nums) {
	let sum = 0;
	if (nums.length === 0) {
		return sum;
	}
	else {
		//const reduceSum = (accumulator, currentValue) => {accumulator + currentValue};
		sum = nums.reduce(function(sum, currentNum) { return sum + currentNum;}, 0);
		return sum;
	}
}


function callFn(fn, n, arg) {
	if (n === 0) {
		return;
	}

	else {
		fn(arg);
		callFn(fn, n-1, arg);
	}
}


function betterCallFn(fn, n, ...argsn) {
	if (n === 0) {
		return;
	}
	else {
		fn(...argsn);
		betterCallFn(fn, n-1, ...argsn);
	}
}


function opposite(oldFn) {
	return function(arg1) {
		const current = oldFn(arg1);
		return (!current);
	};
}


function bucket(arr, fn) {
	let passArray = [];
	let failArray = [];
	const arrLength = arr.length;
	let recursive1 = function(arr, n) {
		if (n === arrLength) {
			return;
		}
		else {
			if (fn(arr[n])) {
				passArray.push(arr[n]);
			}
			else {
				failArray.push(arr[n]);
			}
			return (recursive1(arr, n+1));
		}
	};
	recursive1(arr, 0);
	const finalArray = [passArray, failArray];
	return finalArray;
}


function addPermissions(oldFn) {
	return function(...allArgs) {
		if (allArgs[0] === null || allArgs[0] === undefined) {
			return undefined;
		}
		else if (allArgs[0].hasOwnProperty("admin") && allArgs[0].admin === true) {
			return oldFn(...allArgs.slice(1));
		}
		else {
			return undefined;
		}
	};
}

function myReadFile(fileName, succesFn, errorFn) {
	fs.readFile(fileName, 'utf-8', (err, data) => {
		if (err) {
			errorFn(err);
			return;
		}
		succesFn(data);
	});
	return;
}

function readAndExtractWith(extractor) {
	return function(fileName, succesFn, errorFn) {
		fs.readFile(fileName, 'utf-8', (err, data) => {
			if (err) {
				errorFn(err);
				return;
			}
			let newData = extractor(data);
			succesFn(newData);
		});
	};
}

function rowsToObjects(data) {
	const headerArr = data.headers; //array of header titles
	const headerCount = headerArr.length; //number of headers
	const n = data.rows.length; //number of objects
	//console.log("data.rows[0][0] :  ", data.rows[0][0]);
	let returnArray = new Array(n);
	//returnArray = returnArray.fill({});
	for(let i = 0; i < n; i++) {
		returnArray[i] = {};
	}
	let fillFn = function(count, headerArray, hCount) {
		//console.log("Our return array: ", returnArray, "\n");
		if (count >= n) {
			return;
		}
		else if (hCount >= headerCount) {
			fillFn(count+1, headerArray, 0);
			return;
		}
		else {
			//console.log("pushing to array in obj: ",count, ", for this key: ", headerArray[hCount], "this value: ", data.rows[count][hCount], "\n");
			returnArray[count][headerArray[hCount]] = data.rows[count][hCount];
			fillFn(count, headerArray, hCount + 1);
			return;
		}
	};
	//console.log("Our return array: ", returnArray);
	fillFn(0, headerArr, 0);
	return returnArray;
}



module.exports = {
	sum: sum,
	callFn: callFn,
	betterCallFn: betterCallFn,
	opposite: opposite,
	bucket: bucket,
	addPermissions: addPermissions,
	myReadFile: myReadFile,
	readAndExtractWith: readAndExtractWith,
	rowsToObjects: rowsToObjects
};