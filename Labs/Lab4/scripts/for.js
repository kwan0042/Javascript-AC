function setForLoopValues(){
    var minimum = Number(prompt("Enter a number for minimum","")); //1
    var maximum = Number(prompt("Enter a number for maximum",""));  //10
    var increase = Number(prompt("Enter a number for increase","")); //2

    for (index = minimum;index <= maximum;index += increase) {
      document.writeln("value of the index is"+" "+index+"<br>");
    }
}setForLoopValues();
