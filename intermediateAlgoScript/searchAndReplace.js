function myReplace(str, before, after) {
  // Extract the first letter from before and after
  const beforeFirst = before.slice(0, 1);
  const afterFirst = after.slice(0, 1);

  // If first letter of before is uppercase and first letter of after is not, replace the first letter of after with the uppercase letter
  if (
    beforeFirst === beforeFirst.toUpperCase() &&
    afterFirst !== afterFirst.toUpperCase()
  ) {
    var newAfter = after.split("");
    newAfter.splice(0, 1, afterFirst.toUpperCase());
    newAfter = newAfter.join("");
  }

  // If first letter of before is lowercase and first letter of after is not, replace the first letter of after with the lowercase letter
  else if (
    beforeFirst === beforeFirst.toLowerCase() &&
    afterFirst !== afterFirst.toLowerCase()
  ) {
    var newAfter = after.split("");
    newAfter.splice(0, 1, afterFirst.toLowerCase());
    newAfter = newAfter.join("");
  }
  // If the cases are already the same, just set after to the newAfter var
  else {
    var newAfter = after;
  }

  // Replace the before with the newAfter in the string
  return str.replace(before, newAfter);
}

console.log(
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
);
