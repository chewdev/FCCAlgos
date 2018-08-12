function truncateString(str, num) {
  // return string as is if num is greater than length of string
  if (num >= str.length) {
    return str;
  }
  // else truncate string and add "..." to the end
  return str.slice(0, num) + "...";
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
