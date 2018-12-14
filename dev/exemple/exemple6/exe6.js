var age;
var isThirtyYearsOld;
var isAdult;
var isNotCentennial;

age = 35;

isThirtyYearsOld = (age == 30); // false
isThirtyYearsOld = (age == 35); // true


isThirtyYearsOld = (age == 30); // false
isThirtyYearsOld = (age == 35); // true

isNotCentennial  = (age != 100); // true

age = 100;
isNotCentennial  = (age != 100); // false

age = 18;

isAdult = (age > 18); // false
isAdult = (age >= 18); // true

isAdult = (age < 18); // false
isAdult = (age <= 18); // true


var age = parseInt(window.prompt('tapez votre age'));

var firstName = 'Tom';

if (age >= 18) {

	document.write('<p>Vous êtes majeur.</p>');

} else {

	document.write('<p>Vous n\'êtes pas majeur.</p>');

}

var name = window.prompt('Name ?');

//var name = Jean;

if (name == 'Julien') {

	document.write('<p>Vous êtes Julien</p>');
    
} else if (name == 'Max') {

	document.write('<p>Vous êtes Max</p>');

} else if (name == 'Jean') {

	document.write('<p>Vous êtes Jean</p>');       
} 
else {
	
    document.write('<p>Mais vous êtes qui ?</p>');
}
