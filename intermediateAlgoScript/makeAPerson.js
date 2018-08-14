var Person = function(firstAndLast) {
  // This is a Person constructor function
  // first and last hold the first and last name of the person and is not directly accessible
  // first and last can be altered only throuh getter and setter methods

  const nameArr = firstAndLast.split(" ");
  let first = nameArr[0];
  let last = nameArr[1];
  this.getFullName = function() {
    return `${first} ${last}`;
  };
  this.getFirstName = function() {
    return first;
  };
  this.getLastName = function() {
    return last;
  };
  this.setFirstName = function(newFirst) {
    first = newFirst;
  };
  this.setLastName = function(newLast) {
    last = newLast;
  };
  this.setFullName = function(newFull) {
    const newNameArr = newFull.split(" ");
    first = newNameArr[0];
    last = newNameArr[1];
  };
};

var bob = new Person("Bob Ross");
bob.getFullName();
