function palindrome(str) {
  // Problem requests that only alphanumeric characters be checked, so remove everything else
  // Palindrome checker is also case insensitive, so convert everything to lower case

  // newStr is the original string that we will check against with only it's alphanumeric characters and all letters lowercased
  const newStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  // newStrArr will be used to determine the reversed string to compare to newStr
  // First split the string into it's characters in an array
  const newStrArr = newStr.split("");
  // Initialize it's beginning and ending parameters
  let begin = 0;
  let end = newStrArr.length - 1;
  // Loop through the character array an amount of times equal to half of the array length
  // For each step, replace the element i distance from the beginning with the element i distance away from the end
  // This is repeated until reaching the middle of the array, at which point the array will be reversed
  for (let i = 0; i < Math.floor(newStrArr.length / 2); i++) {
    [newStrArr[begin + i], newStrArr[end - i]] = [
      newStrArr[end - i],
      newStrArr[begin + i]
    ];
  }

  // Check if the string created by joining the reversed array (this is the reversed string) is equal to the original string and return true or false boolean
  return newStr === newStrArr.join("");
}

palindrome("eye");
