// INSTRUCTIONS
//Given the array and chunk size, divide the array into multiple subarrays where each is of similar length
// EXAMPLES
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chunked = []

  // loop through given array
  for (let element of array) {
    //get the last element chunked
    const last = chunked[chunked.length - 1]
    // if the last element does not exist, or if its length is equal to chunk size
    if (!last || last.length === size) {
      // push new chunk with current element
      chunked.push([element])
    } else {
      // push current element into chunk
      last.push(element)
    }
  }

  return chunked
}

//using slice
const chunkSlice = (array, size) => {
  const chunked = []
  let index = 0

  while (index < array.length) {
    //push chunked array to chunked
    chunked.push(array.slice(index, index + size))
    //increase index by size
    index += size
  }
  return chunked
}

module.exports = {
  chunk,
  chunkSlice,
}
