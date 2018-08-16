function telephoneCheck(str) {
  // check that phone number string (str) matches any of the allowed formats represented by this regex
  const regex = /^[1]?[\s]?([\(]\d{3}[\)]|\d{3})\s?[\-]?\d{3}\s?[\-]?\d{4}$/;
  // If it matches, return true, else return false
  return str.match(regex) ? true : false;
}

telephoneCheck("555-555-5555");
