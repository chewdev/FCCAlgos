function titleCase(str) {
  // return sentence with first letter capitalized in each word and all other letters lowercase

  // lowercase entire string of words, create an array of words with split, map through each word and capitalize the first letter, and finally join the array back into a string.
  return str
    .toLowerCase()
    .split(" ")
    .map(word =>
      word
        .slice(0, 1)
        .toUpperCase()
        .concat(word.slice(1))
    )
    .join(" ");
}

console.log(titleCase("I'm a little tea pot"));
