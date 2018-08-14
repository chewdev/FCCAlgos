function getCharFromBinary(binary) {
  // Convert binary to decimal to use as ASCII code in String.fromCharCode()
  // binaryAgent() function is dependent upon this function. It passes a binary string and expects an english character in return

  let currSum = 0;
  let currMult = 1;
  for (let i = binary.length - 1; i >= 0; i--) {
    currSum += parseInt(binary.slice(i, i + 1)) * currMult;
    currMult *= 2;
  }

  // currSum is the decimal representation of the binary passed in, find the char code from it and return
  return String.fromCharCode(currSum);
}

function binaryAgent(str) {
  // Function takes string arguments that contain space separated binary code and returns the english character representation of the binary

  // Split the string into it's individual binary components
  const binaryArr = str.split(" ");

  // Map over each binary component of the array and retrieve the character representation using the getCharFromBinary() function
  const charsFromBin = binaryArr.map(getCharFromBinary);

  // We have an array of the characters, must join them into a string and return
  return charsFromBin.join("");
}

binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);
