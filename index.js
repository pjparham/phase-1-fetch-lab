function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books") //sends promise
  .then((resp) => resp.json()) //turns data into JSON
  .then((arrayOfBooks) => renderBooks(arrayOfBooks))
  
  // return resp.json()
  // .then((json) => books = json)
  // To pass the tests, don't forget to return your fetch!
  
}

function renderBooks(books) {
  console.log(books[0])
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
