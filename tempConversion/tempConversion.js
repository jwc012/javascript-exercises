const ftoc = function(fahrenheit) {
  let celsius = (fahrenheit - 32) * (5/9);
  if (celsius % 1 === 0) {
    return celsius;
  }
  return +celsius.toFixed(1);
}

const ctof = function(celsius) {
  let fahrenheit = celsius * 1.8 + 32;
  if (fahrenheit % 1 === 0) {
    return fahrenheit;
  }
  // utilizing + unary to convert string into number
  return +fahrenheit.toFixed(1);
}

module.exports = {
  ftoc,
  ctof
}
