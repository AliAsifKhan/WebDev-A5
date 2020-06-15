//Mohammad Ali Asif Khan <aliasifkhan@live.com, 03005006940>
//Roll# WM5498
//Assignment# 5

// Chapter - 1

// Task#1

alert('Hello World');

// Task#2

alert('Error! Please enter a valid password.');

// Task#3

alert('Welcome to JS Land... \r\nHappy Coding');

// Task#4

alert('Welcome to JS Land...');
alert('Happy Coding!');

// Task#5

console.log('Hello... I can run JS through my web browser\'s console');

// Task#6

alert('Welcome to Earth!')

//Task#7

{/* <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <script src="app.js"></script> -->
    <title>Assignment#5</title>
</head>
<body>
    <!-- <script src="app.js"></script> -->
    <h1>Assignment#5</h1>
    <!-- <script src="app.js"></script> -->
    <p>Hello World!</p>
</body>
<script src="app.js"></script>
</html> */}

// **************************

// Chapter - 2


// Task#1

var username;

// Task#2

var myName = 'Mohammad Ali Asif Khan';

// Task#3

var message;
message = 'Hello World';
alert(message)

// Task#4

var name1 = 'Jhone Doe';
var age1 = '15 years old';
var course1 = 'Certified Mobile Application Developement';

alert(name1);
alert(age1);
alert(course1);

// Task#5

var p = 'PIZZA\r\nPIZZ\r\nPIZ\r\nPI\r\nP';
alert(p);

// Task#6

var email = 'aliasifkhan@live.com';
alert('My email address is '+ email);

// Task#7

var book = 'A smarter way to learn JavaScript';
alert('I am trying to learn from the Book '+ book);

//Task#8

document.write('Yah! I can write HTML content through JavaScript');

//Task#9

var endDesign = '▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬';
alert(endDesign)

// **************************

// Chapter - 3


// Task#1

var age = "30";
alert('I am ' + age + ' years old');

//Task#2

var visitCount = 0;
alert('You have visited this site ' + visitCount + ' times');
visitCount++;

//Task3

var birthYear = '1990';
document.write('My birth year is'+birthYear+'<br>');
document.write('Data type of my declared variable is number');

//Task4

var cName = 'John Doe';
var qty = 5;
var prod = 'T-shirt';
document.write(cName+'ordered'+qty+' '+prod+'(s) on XYZ Clothing store');

// **************************

// Chapter - 4

//Task#1

var a,b,c;

//Task#2

var d,e,f,g,h; //legal
var 9abc, void, var, do, try; //illegal

//Task#3

document.write('<h1>Rules for naming JS variables</h1>');
document.write('Variable names can only contain letters, numbers, underscores, and dollar signs. For example $my_1stVariable');
document.write('<br>Variables must begin with a letter, underscores or dollar signs. For example $name, _name or name');
document.write('<br>Variable names are case sensitive');
document.write('<br>Variable names should not be JS keywords');

// **************************

// Chapter - 5

//Task#1

var a1 = 3;
var a2 = 5;
var a3 = a1 + a2;
document.write('Sum of '+a1+' and '+a2+' is '+a3);

//Task#2

var b1 = 3;
var b2 = 5;
var b3 = b1 - b2;
document.write('Subtraction of '+b1+' and '+b2+' is '+b3);
var b4 = b1 * b2;
document.write('<br>Product of '+b1+' and '+b2+' is '+b4);
var b5 = b1 / b2;
document.write('<br>Division of '+b1+' and '+b2+' is '+b5);
var b6 = b1%b2;
document.write('<br>Modulus of '+b1+' and '+b2+' is '+b6);

//Task#3

var aa;
document.write('Value after variable declaration is: '+aa);
aa=5;
document.write('<br>Initial value: '+aa);
aa++;
document.write('<br>Value after increment is: '+aa);
aa += 7;
document.write('<br>Value after addition is: '+aa);
aa--;
document.write('<br>Value after decrement is: '+aa);
aa=aa%3;
document.write('<br>Value after remainder is: '+aa);

//Task#4

var ticketCost = 600;
ticketCost *= 5;
document.write('Total cost to buy 5 tickets to a movie is '+ticketCost+'PKR');

//Task#5

var c1 = 4
document.write('Table of '+c1);
var c2 = 1;
var c3 = c1 * c2;
document.write('<br>'+c1+'x'+c2+'='+c3);
c2++;
c3 = c1 * c2;
document.write('<br>'+c1+'x'+c2+'='+c3);
c2++;
c3 = c1 * c2;
document.write('<br>'+c1+'x'+c2+'='+c3);
c2++;
c3 = c1 * c2;
document.write('<br>'+c1+'x'+c2+'='+c3);
c2++;
c3 = c1 * c2;
document.write('<br>'+c1+'x'+c2+'='+c3);
c2++;
c3 = c1 * c2;
document.write('<br>'+c1+'x'+c2+'='+c3);
c2++;
c3 = c1 * c2;
document.write('<br>'+c1+'x'+c2+'='+c3);
c2++;
c3 = c1 * c2;
document.write('<br>'+c1+'x'+c2+'='+c3);
c2++;
c3 = c1 * c2;
document.write('<br>'+c1+'x'+c2+'='+c3);
c2++;
c3 = c1 * c2;
document.write('<br>'+c1+'x'+c2+'='+c3);

//Task#6

var tempC = 30;
var tempF = (tempC * 9/5) + 32;
document.write(tempC+'°C is '+tempF+' °F');

var tempF = 90;
var tempC = (tempF - 32) * 5/9;
document.write('<br>'+tempF+'°F is '+tempC+' °C');

//Task#7

var item1Price = 650;
var item2Price = 100;
var item1Qty = 3;
var item2Qty = 7;
var shipping = 100;

document.write('Price of item 1 is '+item1Price);
document.write('<br>'+'Quantity of item 1 is '+item1Qty);
document.write('<br>'+'Price of item 2 is '+item2Price);
document.write('<br>'+'Quantity of item 2 is '+item2Qty);
document.write('<br>'+'Shipping charges '+shipping);

var totalCost = (item1Price*item1Qty)+(item2Price*item2Qty)+shipping;

document.write('<br><br>'+'Total cost of your order is '+totalCost);

//Task#8

var marksTotal = 100;
var marksStudent = 60;
var percentage = marksStudent/marksTotal*100;

document.write('<h1>Marks Sheet</h1>')
document.write('<br>'+'Total marks: '+marksTotal);
document.write('<br>'+'Marks obtained: '+marksStudent);
document.write('<br>'+'Percentage: '+percentage+'%');

//Task#9

var usd = 10;
var sr = 25;
var pkr = (usd*104.8)+(sr*28);

document.write('<h1>Currency in PKR</h1>')
document.write('<br>'+'Total Currency in PKR: '+pkr);

//Task#10

var num1 = 99;
num1=((num1 + 5)*10)/2;

//Task#11

var year = 2020;
var birth = 1990;
var age1 = year-birth;

document.write('<h1>Age Calculator</h1>')
document.write('<br>'+'Current Year: '+year);
document.write('<br>'+'Birth Year: '+birth);
document.write('<br>'+'Your Age: '+age1);

//Task#12

var rad = 4;
var circum = 2*Math.PI*rad;
var area = Math.PI*(rad**2);
document.write('<h1>The Geometrizer</h1>')
document.write('<br>The circumfrence is '+circum);
document.write('<br>The area is '+area);

//Task#13

var snack = 'Bounty';
var age2 = 25;
var ageMax = 85;
var daily = 2;
var totalQty = ((ageMax-age2)*365.25)*2;

document.write('<h1>The Lifetime Supply Calculator</h1>')
document.write('<br>Favourite Snack: '+snack);
document.write('<br>Current age: '+age2);
document.write('<br>Estimated Maximum Age: '+ageMax);
document.write('<br>Amount of snacks per day: '+daily);
document.write('<br>You will need '+totalQty+' '+snack+' to last you until the ripe old age of '+ageMax);
