function findLongestWordLength(str) {
  const strArr = str.split(" ");
  let maxLength = 0;
  strArr.forEach(val => {
    if (val.length > maxLength) {
      maxLength = val.length;
    }
  });
  return maxLength;
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);
