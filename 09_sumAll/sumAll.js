const sumAll = function (a, b) {
  let retVal = 0;

  if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
    return "ERROR";
  }

  if (a < b) {
    for (let i = a; i <= b; i++) {
      retVal += i;
    }
  } else if (a > b) {
    for (let i = b; i <= a; i++) {
      retVal += i;
    }
  } else {
    retVal = a + b;
  }
  return retVal;
};

// Do not edit below this line
module.exports = sumAll;
