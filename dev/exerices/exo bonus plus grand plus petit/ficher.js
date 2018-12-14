'use stric';


var user;
var pc;
var result = 0;
 
 function ale(min, max) {

	return Math.floor(Math.random() * (max - min + 1) + min);

}
 pc = ale(1,1000);
do {
	   result++;
       user = parseFloat(window.prompt('Entrez votre chiffre'));
       if (user < pc) {
       window.alert('chiffre plus grand');
       
       }else if (user > pc){
       	window.alert('chiffre plus petit');
       
       }else{
        alert('trouvé');
       } 

  }while (user != pc);
document.write('tu as trouve le bon nombre en '+result+'');