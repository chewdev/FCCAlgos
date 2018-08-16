function convertToRoman(num) {
  // Make a copy of num and don't alter original argument
  let numCopy = num;
  // Initialize an empty array into which roman numeral values can be pushed. Will need to join the array in order to return a string.
  let romanNum = [];

  //Check values starting from the largest roman numeral (M = 1000)
  //While numCopy is greater than respective number, push respective roman numeral and subtract it's value from numCopy
  //Continue until numCopy is 0 and return the joined array as a string
  while (numCopy >= 1000) {
    romanNum.push("M");
    numCopy -= 1000;
  }
  if (numCopy >= 900) {
    romanNum.push("C", "M");
    numCopy -= 900;
  }
  if (numCopy >= 500) {
    romanNum.push("D");
    numCopy -= 500;
  }
  if (numCopy >= 400) {
    romanNum.push("C", "D");
    numCopy -= 400;
  }
  while (numCopy >= 100) {
    romanNum.push("C");
    numCopy -= 100;
  }
  if (numCopy >= 90) {
    romanNum.push("X", "C");
    numCopy -= 90;
  }
  if (numCopy >= 50) {
    romanNum.push("L");
    numCopy -= 50;
  }
  if (numCopy >= 40) {
    romanNum.push("X", "L");
    numCopy -= 40;
  }
  while (numCopy >= 10) {
    romanNum.push("X");
    numCopy -= 10;
  }
  if (numCopy === 9) {
    romanNum.push("I", "X");
    return romanNum.join("");
  }
  if (numCopy >= 5) {
    romanNum.push("V");
    numCopy -= 5;
  }
  if (numCopy === 4) {
    romanNum.push("I", "V");
    return romanNum.join("");
  }
  while (numCopy > 0) {
    romanNum.push("I");
    numCopy -= 1;
  }
  return romanNum.join("");
}

convertToRoman(36);
