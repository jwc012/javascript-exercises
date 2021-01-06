let getTheTitles = require('./getTheTitles')

describe('getTheTitles', function() {
    const books = [
      {
        title: 'Book',
        author: 'Name'
      },
      {
        title: 'Book2',
        author: 'Name2'
      }
    ]
    let movies = [
      {
        title: 'The Dark Knight Rises',
        director: 'Christopher Nolan'
      },
      {
        title: 'Host',
        director: 'Rob Savage'
      },
      {
        title: 'Wonder Woman 1984',
        director: 'Patty Jenkins'
      }
    ]

  it('gets titles', function() {
    expect(getTheTitles(books)).toEqual(['Book','Book2']);
  });
  it('gets titles2', function() {
    expect(getTheTitles(movies)).toEqual(['The Dark Knight Rises','Host', 'Wonder Woman 1984'])
  })

});
