'use stric';
 var choix = window.prompt('pierre feuille ciseau');
  window.prompt('vous avez choisit'+ 'choix');
  choix = string.toLowerCase();

Math.round();
var chiffre = Math.round (Math.random())* 3;

if (chiffre >= 0 && chiffre <= 1) {
			document.write('computer choose ciseau');
}
 else if (chiffre <1 &&  chiffre <=2) {
 	        document.write('computer choose papier');	        
 }
 else{
 	document.write('computer choose pierre');
 }




switch(choix)
{
	case 'ciseau':
	if (chiffre >= 0 && chiffre<=1)
	{
		document.write('egalite');
	}
	else if (chiffre <1 &&  chiffre <=2){
	     document.write('perdu');
	
	}
	else{
		document.write('gagne');
	}
	break;

    case 'papier':

    if (chiffre >= 0 && chiffre<=1)
	{
		document.write('perdu');
	}
	else if (chiffre <1 &&  chiffre <=2){

	     document.write('egalite');
	}else{
		document.write('gagne');
	}
	break;
	 

	 case 'pierre':
	if (chiffre >= 0 && chiffre<=1) {
		document.write('gagne');
	}
	else if (chiffre <1 &&  chiffre <=2)
	{
		document.write('perdu');

	} else {
		document.write('egalite');
	}
	break;
}