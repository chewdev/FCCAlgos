function repeatStringNumTimes(str, num) {
  let repeated = "";
  for (let i = 0; i < num; i++) {
    repeated = repeated.concat(str);
  }
  return repeated;
}

console.log(repeatStringNumTimes("abc", 3));
