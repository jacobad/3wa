'use stric';

/*function sayHello()
{
	document.write('<p>Bonjour à toutes et à tous !</p>');
	document.write('<p>Coucou</p>');
	document.write('<p>salut toi ca va tu fais quoi ce soir?</p>')
}
sayHello();

sayHello();

sayHello();

sayHello();

function sayHelloByName(firstName, lastName)
{
    document.write('<p>Bonjour ' + firstName + ' ' + lastName + ' !</p>');
}

sayHelloByName('Marie', 'MAYERS');

sayHelloByName('Thib', 'Monesma');

var firstName = window.prompt('firstName ?');

var lastName = window.prompt('laststName ?');

sayHelloByName(firstName,lastName);*/

function sayHello()
{
    return 'Bonjour à toutes et à tous !';
}

var message = sayHello();
document.write('<h2>' + message + '</h2>');


function addition(num1, num2) {
	var result = num1 + num2;
    
    return result;
}
var test = addition(3, 5);



var tab = ['canard', 'chien', 'chat'];
console.log(tab);

tab.push('souris');
tab.push('oie');

console.log(tab);

tab.indexOf('chien')
tab.indexOf('poule') //-1 car pas dans le dans le tableau.

console.log(tab);
tab.splice (2,1);
console.log(tab);