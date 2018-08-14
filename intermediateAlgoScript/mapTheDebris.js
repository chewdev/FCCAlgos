function orbitalPeriod(arr) {
  // This function takes an array of objects and replaces each objects avgAlt (average altitude) key with an orbital period key calculate from it

  // standard gravitational parameter - given constant
  const GM = 398600.4418;
  // earth's radius - given constant
  const earthRadius = 6367.4447;

  // Map over each object, calculate it's orbital period (T) and remove avgAlt and replace with oritalPeriod
  const newArr = arr.map(obj => {
    // a is the orbit's semi-major axis
    const a = obj.avgAlt + earthRadius;

    // orbital period is calculated as T = 2 * pi * (a^3 / GM)^0.5
    const T = 2 * Math.PI * Math.sqrt(Math.pow(a, 3) / GM);
    // delete avgAlt key/value
    delete obj.avgAlt;
    // replace with newly calculated orbital period rounded to nearest whole number
    obj.orbitalPeriod = Math.round(T);
    return obj;
  });

  return newArr;
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
