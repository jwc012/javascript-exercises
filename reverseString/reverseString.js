const reverseString = function(str) {
  if (str.length < 2) return str;
  let answer = "";
  for (let lastIndex = str.length - 1; lastIndex >= 0; lastIndex--) {
    answer += str.charAt(lastIndex);
  }
  return answer;
}

module.exports = reverseString
