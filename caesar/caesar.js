const caesar = function(word, num) {
  let decipher = '';

  if (num < 0) {
    return caesar(word, num + 26);
  }

  for (let i = 0; i < word.length; i++) {
    let asciiValue = word.charCodeAt(i);

    // Uppercase letters
    if ((/[A-Z]/).test(word.charAt(i))) {
      asciiValue = (asciiValue - 65 + num) % 26 + 65
    }
    // Lowercase letters 
    else if ((/[a-z]/).test(word.charAt(i))) {
      asciiValue = (asciiValue - 97 + num) % 26 + 97
    }
    // converts ascii code to characters
    decipher += String.fromCharCode(asciiValue);
  }

  return decipher;
}

module.exports = caesar
