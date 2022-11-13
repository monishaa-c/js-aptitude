var radius = parseInt(prompt("Enter a radius:"));
var volumeHemisphere = 2/3*22/7*radius*radius*radius;
var surfaceHemisphere = 3*22/7*radius*radius;
var ratio = volumeHemisphere/surfaceHemisphere;
alert(ratio);