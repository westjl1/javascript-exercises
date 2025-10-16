//reverseString('hello there') // returns 'ereht olleh'

const reverseString = function (inString) {
  let retString = "";
  for (let i = inString.length; i >= 0; i--) {
    retString += inString.charAt(i);
  }
  return retString;
};

// Do not edit below this line
module.exports = reverseString;
