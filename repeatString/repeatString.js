const repeatString = function(str, counter) {
  if (counter < 0) {
    return 'ERROR';
  }
  answer = '';
  for (let i = 0; i < counter; i++) {
    answer += str;
  }
  return answer;
}

module.exports = repeatString
