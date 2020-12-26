const sumAll = function(num1, num2) {
  if (num1 !== parseInt(num1, 10) || num2 !== parseInt(num2, 10) || num1 < 0 || num2 < 0) {
    return "ERROR"
  }
  let lowerNum = Math.min(num1, num2);
  let higherNum = Math.max(num1, num2);
  let sum = 0;
  for (; lowerNum <= higherNum; lowerNum++){
    sum += lowerNum;
  }
  return sum;
}

module.exports = sumAll
