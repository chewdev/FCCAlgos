function spinalCase(str) {
  // If a capital letter is preceded by an alphanumeric character, seperate them with a '-'
  str = str.replace(/([A-Za-z0-9])([A-Z])/g, "$1-$2");
  // Now that we used the capital letters in the original str as needed, lowercase entire string and replace any non-alphanumeric characters with a '-'
  return str.toLowerCase().replace(/[^A-Za-z0-9\-]/g, "-");
}

console.log(spinalCase("This Is Spinal Tap"));
