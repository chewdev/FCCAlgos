function fearNotLetter(str) {
  // Find char code of first letter in string
  let last = str.charCodeAt(0);

  // For each letter after the first in the string, check that the charCode is 1 more than the previous letter
  for (let i = 1; i < str.length; i++) {
    // If the current charCode isn't 1 higher than the last, the missing character is the character at the last charCode + 1, return this character
    if (str.charCodeAt(i) - last !== 1) {
      return String.fromCharCode(last + 1);
    }
    // Set last to the new char code which must be 1 greater than the previous
    last++;
  }
  return undefined;
}

fearNotLetter("abce");
