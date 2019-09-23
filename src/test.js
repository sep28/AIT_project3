function sum(...nums) {
	let sum = 0;
	if (nums.length === 0) {
		return sum;
	}
	else {
		const reduceSum = (accumulator, currentValue) => { return (accumulator + currentValue); };
		sum = nums.reduce(reduceSum, 0);
		return sum;
	}
}

let myArr = [1,2,3];
let mySum = sum(myArr);
console.log(mySum);