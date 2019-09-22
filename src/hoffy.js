// hoffy.js

function sum(...nums) {
	let sum = 0;
	if (nums.length === 0) {
		return sum;
	}
	else {
		const reduceSum = (accumulator, currentValue) => {accumulator + currentValue};
		sum = nums.reduce(reduceSum, 0);
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
	}
}





module.exports = {
	sum: sum,
	callFn: callFn,
	betterCallFn: betterCallFn,
	opposite: opposite
}