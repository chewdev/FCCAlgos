function chunkArrayInGroups(arr, size) {
  // initialize start to beginning index
  let start = 0;
  const newArr = [];
  // Loop through until start index is greater than the length of the array and there are no more elements to chunk
  while (start < arr.length) {
    // push new chunk of specified size from current start index into newArr
    newArr.push(arr.slice(start, start + size));
    // increase start index by size
    start += size;
  }
  return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
