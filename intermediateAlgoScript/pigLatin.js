function translatePigLatin(str) {
  // Split string into an array
  const strArr = str.split("");

  // If first letter of str is a vowel, return the string with 'way' added to the end
  if (strArr[0].match(/[aeiou]/gi)) {
    return str.concat("way");
  }

  // If there are no vowels in the str, return the string with 'ay' added to the end
  if (!str.match(/[aeiou]/gi)) {
    return str.concat("ay");
  }

  // Otherwise, loop through the string array and move each consonant to the end of the string array until it reaches a vowel
  while (!strArr[0].match(/[aeiou]/gi)) {
    strArr.push(strArr.shift());
  }

  // Join the array back into a string and add 'ay' to the end
  return strArr.join("").concat("ay");
}

console.log(translatePigLatin("consonant"));
