'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* *********************************** FONCTIONS UTILITAIRES *********************************** */
/*************************************************************************************************/


 


 /*function getRandomInteger (min, max)
 {

	return (Math.random() * (max - min + 1) + min);
 }

 function request Integer('message min max'){

    do{
    	var valide = window.prompt(message)


    }while(IsNaN(valide)== true1|| 2|| 3)

}    ce que j'ai fait          */








function getRandomInteger(min, max)
{

	return Math.floor(Math.random() * (max - min + 1)) + min;
}


function requestInteger(message, min, max)
{
	var integer;
    
    do
    {
    	integer = parseInt(window.prompt(message));
    
    }while(isNaN(integer) == true || integer < min || integer > max);
    
    return integer;
}



