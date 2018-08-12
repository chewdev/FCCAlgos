function whatIsInAName(collection, source) {
  // Put keys of source object into an array
  const keys = Object.keys(source);

  // filter collection array of objects into those that have same keys and values that are in the source object

  const filtered = collection.filter(obj => {
    // Loop over each key and check if value of the key is the same for both the source object and current object of collection
    // return false if any key-value pair does not match
    for (var i = 0; i < keys.length; i++) {
      let key = keys[i];
      if (obj[key] !== source[key]) {
        console.log("false returned");
        return false;
      }
    }

    // if all key-value pairs matched, return true and keep object in collection
    return true;
  });

  return filtered;
}

console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" }
    ],
    { last: "Capulet" }
  )
);
