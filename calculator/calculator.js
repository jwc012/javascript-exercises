function add (numOne, numTwo) {
	return numOne + numTwo;
}

function subtract (numOne, numTwo) {
	return numOne - numTwo;
}

function sum (nums) {
	let sum = 0;
	nums.forEach(num => {
		sum += num;
	});

	return sum;
}

function multiply (nums) {
	let total = 1;
	nums.forEach(num => {
		total *= num;
	});

	return total;
}

function power(numOne, numTwo) {
	return Math.pow(numOne, numTwo);
}

function factorial(num) {
	if (num == 0) return 1;

	return num * factorial(num - 1);
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}