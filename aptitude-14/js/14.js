var value = parseInt(prompt("Enter a price of  dozen toy: "));
var cp = value/12; // cp of one toy
var profit, sp, pp;
var sp = parseInt(prompt("Enter a SP of one toy :"));
profit = sp - cp;
pp = (profit/cp)*100;
alert(pp);
