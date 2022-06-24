class book {
  constructor(title,author,genre){
    this.title = title;
    this.author = author;
    this.genre = genre;
  }
  displayBookInfo(){
    var title_line = "<strong>Title: </strong>"+this.title+"<br>\n";
    var author_line = "<strong>Author: </strong>"+this.author+"<br>\n";
    var genre_line = "<strong>Genre: </strong>"+this.genre+"<hr>\n";
    return(title_line+author_line+genre_line);
  }
}

function addBook(){
  let title = prompt("Please enter a new book title");
  let author = prompt("Please enter a new book author");
  let genre = prompt("Please enter a new book genre");
  return new book(title,author,genre)
}


var bookArray = [];
bookArray[0] = new book(
                    "Harry Potter",
                    "J.K.Rowling",
                    "Fantasy");

bookArray[1] = new book(
                    "Avengers",
                    "Stan Lee",
                    "Fantasy");

bookArray[2] = new book(
                    "The Martian: A Novel",
                    "Andy Weir",
                    "Fantasy");

while(true){
  let b = addBook();
  bookArray.push(b);
  var exit = prompt("Please enter 'e' to exit entering book info."+"\n"+"Or Press any keys to continue entering.");
  if(exit==='e')
    break;
}

for(let book of bookArray){
  document.write(book.displayBookInfo());
}
document.querySelector('p').textContent="You have " + bookArray.length + " books, please see details below:"
