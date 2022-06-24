do {
  var secret = 3;
  var guess = prompt("Enter a number between 1 and 10"+"");
} while( guess != secret);

document.writeln("Congratulations! The Secret is"+" "+guess);
