const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((currentSum, num) => {
    return currentSum + num;
  }, 0);
};

const multiply = function (arr) {
  return arr.reduce((product, current) => product * current);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a) {
  let product = 1;
  for (let i = a; i > 0; i--) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
