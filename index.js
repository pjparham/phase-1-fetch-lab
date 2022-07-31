function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books") //sends promise and returns fetch of API data
  .then((resp) => resp.json()) //turns data into JSON
  .then((arrayOfBooks) => renderBooks(arrayOfBooks))
  
  // return resp.json()
  // .then((json) => books = json)
  // To pass the tests, don't forget to return your fetch!
  
}

function renderBooks(books) {
  // console.log(books[0])
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

// fetch notes 
// so for a fetch function, we return a fetch of an API to get the data
// use .then to go through the data after it is loaded and turn it into a json
// then we pass it into a function that does what we need to do with the data