var length = parseInt(prompt("Enter a length:"));
var breadth = parseInt(prompt("Enter a breadth:"));
var height = parseInt(prompt("Enter a height:"));
var volume = length*breadth*height;
var space = parseInt(prompt("Enter a space occupied by each person:"));
var total = volume/space;
alert(total);
