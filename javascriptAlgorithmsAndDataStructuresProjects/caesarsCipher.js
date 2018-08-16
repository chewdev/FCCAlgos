function rot13(str) {
  // implement right 13 shift caesar cipher

  // initialize currCode and newCode
  // currCode will hold the current character code at the current character in the string while looping through the string
  // newCode will hold the shifted character code for all letter characters. Non-letter characters are not to be shifted
  let currCode = 0;
  let newCode = 0;

  // Loop through the string and check character code at each character. If the character is a capital letter (character codes 65 to 90)
  // shift the character 13 to the right
  for (let i = 0; i < str.length; i++) {
    // Grab char code of current character in string
    currCode = str.charCodeAt(i);

    // Check that character code is a capital letter. Do nothing if it isn't.
    if (currCode >= 65 && currCode <= 90) {
      // shift code 13 to the right
      newCode = currCode + 13;
      // If char code is shifted past the max letter (Z at 90), find how much above 90 the new code is and
      // add that difference to the lowest character code (65);
      // Character code 91 is the first one past Z, which means it should wrap back around and become A
      // Thus we want character code 91 to become 65 --> newCode - 91 + 65 = 65
      if (newCode > 90) {
        newCode = newCode - 91 + 65;
      }
      // String does not have a splice method, so we slice up until the current character, concatenate the new shifted character and slice everything after the current character and concatenate it onto the end.
      str = str
        .slice(0, i)
        .concat(String.fromCharCode(newCode))
        .concat(str.slice(i + 1));
    }
  }
  return str;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
