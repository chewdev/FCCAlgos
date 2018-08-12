function pairElement(str) {
  // Create an array of initial DNA to be paired with corresponding element
  let dnaArr = str.split("");

  // Map over initial array and create a sub array for each element, pushing in the corresponding pair before returning the sub array
  dnaArr = dnaArr.map(char => {
    const subArr = [char];
    switch (char) {
      case "A":
        subArr.push("T");
        break;
      case "T":
        subArr.push("A");
        break;
      case "C":
        subArr.push("G");
        break;
      case "G":
        subArr.push("C");
        break;
      default:
        throw error(dnaArr[i] + " is not a proper DNA character");
    }
    return subArr;
  });

  return dnaArr;
}

console.log(pairElement("GCG"));
