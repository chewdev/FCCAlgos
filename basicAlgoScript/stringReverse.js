function reverseString(str) {
  // Easy way
  // return str.split('').reverse().join('');

  // More difficult way without using .reverse() method
  let strArr = str.split("");
  let half = Math.floor(strArr.length / 2);
  let begin = 0;
  let end = strArr.length - 1;
  for (let i = 0; i < half; i++) {
    [strArr[begin + i], strArr[end - i]] = [strArr[end - i], strArr[begin + i]];
  }
  return strArr.join("");
}

console.log(reverseString("hello"));
