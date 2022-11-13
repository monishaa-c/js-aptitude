var h = parseInt(prompt("Enter a height:"));
var r = parseInt(prompt("Enter a radius:"));
var l = Math.sqrt((h**2)+(r**2));
var surfaceArea = (22/7*r*l)+(22/7*r**2);
alert(surfaceArea);
