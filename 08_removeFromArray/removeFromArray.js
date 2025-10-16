const removeFromArray = function (numbers, ...removes) {
  return numbers.filter((num) => !removes.includes(num));
};

// Do not edit below this line
module.exports = removeFromArray;
