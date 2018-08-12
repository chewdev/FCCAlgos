function convertToF(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}
let c = 30;
let f = convertToF(c);
console.log(`${c} degress Celsius is ${f} degrees Fahrenheit`);
