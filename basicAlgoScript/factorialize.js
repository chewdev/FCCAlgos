function factorialize(num) {
  //not needed on FCC, but we could check if number is a positive integer number
  if (typeof num !== "number" || num < 0 || num % 1 !== 0) {
    return "Error, num must be a positive integer";
  }
  // non-recursive solution
  let product = 1;
  while (num > 1) {
    product = product * num;
    num--;
  }

  return product;

  // recursive solution
  // if (num <= 1) {
  //   return 1;
  // }
  // return num * factorialize(num - 1);
}

console.log(factorialize(5));
