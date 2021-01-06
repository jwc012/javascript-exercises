const getTheTitles = function(books) {
  answer = []
  books.forEach(book => {
    answer.push(book.title);
  });
  return answer;
}

module.exports = getTheTitles;
