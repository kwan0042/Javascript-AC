//Lab6 - Working with the Document Object Model
// 1. Add the following text to the element with id=”mainTitle”
var mainTitle = document.querySelector('#mainTitle');
var myText = "Learning about the Document Object Model";
document.querySelector('#mainTitle').innerText = myText;

// 2. Add the attribute to centre align the element with id=”mainTitle”
mainTitle.setAttribute("align","center");

// 3. Change the title attribute on the img tag with the following text
var imgTag = document.querySelector('#image1');
imgTag.setAttribute("title", "JavaScript 1");

// 4. Add the attribute to right align the element with id=”image1”
imgTag.setAttribute("align", "right");

// 5. Append the following text as a list item so it appears as the second item in the JavaScript Version History list
var myList = document.querySelector('#list');
var newLi = document.createElement("li");
myList.appendChild(newLi);
var newAddText = document.createTextNode("August 1996");
newLi.appendChild(newAddText);
var secondItem = myList.getElementsByTagName('li')[1];
myList.insertBefore(newLi,secondItem);

//6. Append the following text as a list item so it appears as the last item in the JavaScript Version History list
var myList = document.querySelector('#list');
var newLi = document.createElement("li");
myList.appendChild(newLi);
var newAddText = document.createTextNode("1.8.2 June 22, 2009");
newLi.appendChild(newAddText);

//7. Change the list item that contains the text 1.6 November 9999 to now contain the text
var listItem = document.getElementsByTagName('li')[5];
var newItemText = "1.6 November 2005";
document.querySelectorAll('li')[5].innerText = newItemText;

//8. Using the document.write method, display the number of li tags in the web page
var lengthOfLi = document.querySelector('#lengthOfLi');
var myText = "The number of li tags is "+(document.querySelectorAll('#list li').length);
document.querySelector('#lengthOfLi').innerText = myText;
