function truthCheck(collection, pre) {
  // Check that every element of collection has a truthy value for the key represented by the argument (pre)
  return collection.every(val => (val[pre] ? true : false));
}

truthCheck(
  [
    { user: "Tinky-Winky", sex: "male" },
    { user: "Dipsy", sex: "male" },
    { user: "Laa-Laa", sex: "female" },
    { user: "Po", sex: "female" }
  ],
  "sex"
);
