const removeFromArray = function(array, ...numbers) {
  if (array == null || array.length == 0) return array;
  for (let i = 0; i < numbers.length; i++) {
    let removeNum = numbers[i];
    for (let j = 0; j < array.length; j++) {
      let currentNum = array[j];
      if (currentNum === removeNum) {
        array.splice(j, 1);
      }
    }
  }
  return array;
}

module.exports = removeFromArray
