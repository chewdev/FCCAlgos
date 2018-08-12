function booWho(bool) {
  // only return true if bool is actually true or false boolean primitive
  if (bool === true || bool === false) {
    return true;
  }

  // else return false
  return false;
}

console.log(booWho(null));
