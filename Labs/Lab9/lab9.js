const header = document.querySelector('header');
const section = document.querySelector('section');

let requestURL = 'https://raw.githubusercontent.com/kwan0042/WDIP2021/main/hp.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  const harryPotter = request.response;
  populateHeader(harryPotter);
  showHP(harryPotter);
}
function populateHeader(obj) {
  const myH1 = document.createElement('h1');
  myH1.textContent = obj['name'];
  header.appendChild(myH1);

  const myPara = document.createElement('p');
  myPara.textContent =  obj['description'];
  header.appendChild(myPara);

  const myPara2 = document.createElement('p');
  myPara2.textContent = 'Author: ' + obj['author'];
  header.appendChild(myPara2);

  const myPara3 = document.createElement('p1');
  myPara3.textContent = 'About: ' + obj['about'];
  header.appendChild(myPara3);
}

function showHP(obj) {
  const books = obj['books'];

  for (let i = 0; i < books.length; i++) {
    const myArticle = document.createElement('p1');
    const myH2 = document.createElement('p');
    const myPara1 = document.createElement('p');
    const myPara2 = document.createElement('h4');

    myPara1.textContent = 'Book: ' + books[i].book;
    myPara2.textContent = 'Published: ' + books[i].published;

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    section.appendChild(myArticle);
  }
}
