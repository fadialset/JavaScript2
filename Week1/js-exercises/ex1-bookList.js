/**
  
 ** Exercise 1: The book list **

  I 'd like to display my three favorite books inside a nice webpage!

  1. Iterate through the array of books.
  2. For each book, create a `<p>`
  element with the book title and author and append it to the page.
  3. Use a `<ul>`  and `<li>` to display the books.
  4. Add an `<img>` to each book that links to a URL of the book cover.
  5. Change the style of the book depending on whether you have read it(green) or not(red).

  The end result should look something like this:
  https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

  */
    // style the h1
  const head = document.querySelector('h1');
  head.style.textAlign = 'center';

function createBookList(books) {
  // your code goes in here, return the ul element
  let booklist = document.createElement('ul');
  booklist.style.display = 'flex';
  booklist.style.listStyle = 'none';
  booklist.style.justifyContent = 'space-around';

for (let i = 0; i< books.length; i++){
  // creating the p element
  let bookAuthorAndTitle = document.createElement('p');
  bookAuthorAndTitle.textContent = books[i].title + ' by ' + books.author;

  // creat the li element 
  let bookListItems = document.createElement('li');
  bookListItems.appendChild(bookAuthorAndTitle);

  // creating the img element
  let images = document.createElement('img');
  images.src = `book${i+1}.jpg`; 
  bookListItems.appendChild(images);

  // changing the color based on the book is raed or not
  if(books[i].alreadyRead){
    bookListItems.style.backgroundColor = "green";
  }else{
    bookListItems.style.backgroundColor = "red";
  }

  //styles
  booklist.appendChild(bookListItems);
  bookListItems.style.padding = '10px';
  bookListItems.style.width = '350px';
  bookListItems.style.height = 'auto';
  images.style.width = '300px';
  images.style.height = '400px';
}
return booklist;
}

const books = [{
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    alreadyRead: true
  }
];

let ulElement = createBookList(books);

document.querySelector("#bookList").appendChild(ulElement);



