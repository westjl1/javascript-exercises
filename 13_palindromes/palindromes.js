const reverseString = require("../07_reverseString/reverseString.js");

const palindromes = function (checkStr) {
  //A car, a man, a maraca.
  //.acaram a ,nam a ,rac A

  const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";

  // Convert to lowercase, split to array of individual characters,
  // filter only valid characters, then rejoin as new string
  const cleanedCheckStr = checkStr
    .toLowerCase()
    .split("")
    .filter((character) => alphanumerical.includes(character))
    .join("");

  return cleanedCheckStr === reverseString(cleanedCheckStr);
};

// Do not edit below this line
module.exports = palindromes;
