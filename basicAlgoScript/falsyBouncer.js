function bouncer(arr) {
  //filter out elements that are falsy (return truthy values)
  return arr.filter(val => !!val);
}

bouncer([7, "ate", "", false, 9]);
