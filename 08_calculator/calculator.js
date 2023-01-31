const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
	if (!arr) return 0;
  if (arr.length == 1) return arr[0];

  let sum = 0;
  
  for (const num of arr) {
    sum += num;
  }
  
  return sum;
};

const multiply = function(arr) {
  let product = 1;
  
  for (const num of arr) {
    product *= num;
  }

  return product;
};

const power = function(base, power) {
	return Math.pow(base, power);
};

const factorial = function(num) {
  if (num == 0) return 1;

	let fact = num;
  
  for (let i = num - 1; i >= 1; i--) {
    fact *= i;
  }

  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
