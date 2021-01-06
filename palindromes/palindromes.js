const palindromes = function(word) {
  if (word == null || word.length == 0) return true;
  let start = 0; 
  let end = word.length - 1; 
  while (start < end) {
    while (start < end && !(/[a-zA-Z]/).test(word.charAt(start))) start++;
    while (start < end && !(/[a-zA-Z]/).test(word.charAt(end))) end--;
    if (word.charAt(start).toLowerCase() != word.charAt(end).toLowerCase()) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}

module.exports = palindromes
