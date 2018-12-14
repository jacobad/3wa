var num1 = parseFloat(window.prompt('tapez votre nombre?'));
var num2 = parseFloat(window.prompt('tapez votre nombre?'));
var operation = window.prompt('quel operation ?'));

var resultat= document.write('votre resultat est');

 if (isNaN(num1) == false && (isNaN(num2) == false)) {



switch (operation){

	case'+':
	case'addition':
	result = num1+num2;
    document.write(''+result+'');
    break;

    case'-':
	case'soustraction':
	result = num1 - num2;
    document.write(''+result+'');
    break;

    case'*':
	case'multiplication':
	result = num1 * num2;
    document.write(''+result+'');
    break;

    case'/':
	case'division':
	result= num1 / num2;
	if (num2 ==0) {
	document.write('impossible');
	} else{
		document.write(''+result+'');
	}
    break;

    case'^':
    case'puissance':
    result= num1**num2;
    document.write(''+result+'');
    break;
}
}

number1   = parseFloat(window.prompt('Saisissez un premier nombre :'));
number2   = parseFloat(window.prompt('Saisissez un deuxième nombre :'));
operation = window.prompt('Quelle opération mathématique souhaitez-vous effectuer ?');


switch(operation)
{
	case '+':
	case 'addition':
    result = number1 + number2;
    break;
    
    case '-':
    case 'soustraction':
    result = number1 - number2;
    break;
    
    case '*':
    case 'multiplication':
    result = number1 * number2;
    break;
    
    case '/':
    case 'division':
    
    if(number2 == 0)
   	{
       document.write('<p>Erreur : vous ne pouvez pas diviser un nombre par 0 !</p>');

       break;
   	}
    
    result = number1 / number2;
    
    case '^':
    case 'puissance':
    result = number1 ** number2;
    break;

    default:
    document.write("<p>Erreur : vous avez indiqué une opération inconnue !</p>");
    break;

}

if(isNaN(result) == true)
{
	document.write("<p>Vous n'avez pas saisi deux nombres !</p>");
	result = undefined;

}

if(result != undefined)
{
    document.write("<p>Le résultat de l'opération est <strong>" + result + '</strong>.</p>');
}
