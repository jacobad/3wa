'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* **************************************** DONNEES JEU **************************************** */
/*************************************************************************************************/
var game = {};     // VARIABLE STOCKANT TOUT MES FONCTIONS DU JEU



/*************************************************************************************************/
/* *************************************** FONCTIONS JEU *************************************** */
/*************************************************************************************************/


function initializeGame() { // FONCTION POUR METTRE EN ROUTE

	game.difficult = requestInteger("Choisir difficulté easy:1 ; medium:2 ; hard:3", 1, 3);
	 
    switch (game.difficult) {

		case 1:
	    game.HpDragon = getRandomInteger(150,200);
	    game.HpPlayer= getRandomInteger(200,250);
	    break;
	    
	    case 2:
	    game.HpDragon = getRandomInteger(200,250);
	    game.HpPlayer= getRandomInteger(200,250);
	    break;

		case 3:
	    game.HpDragon = getRandomInteger(200,250);
	    game.HpPlayer= getRandomInteger(150,200);
	    break;    
	}

	game.armor = requestInteger("Choisir armure: 1:en cuivre, 2:en fer, 3:magique ", 1, 3);

	switch (game.armor) {

		case 1:

	    game.armorRatio = 1;
	    break;
	    
	    case 2:

	    game.armorRatio = 1.25;
	    break;

		case 3:

	    game.armorRatio = 2;
	    break;    
	}

	game.weapon =requestInteger("Choisir une arme: 1: en cuivre, 2:en fer, 3: excalibur ", 1, 3);

	switch (game.weapon) {

		case 1:

	    game.weaponRatio = 0.5;
	    break;
	    
	    case 2:

	    game.weaponRatio = 1;
	    break;

		case 3:

	    game.weaponRatio = 2;
	    break;    
	}
}

/*  CORRECTION INTIALIZE GAME  


'use strict'; 

var game = {}



function initializeGame()
{
	 game.difficulty = requestInteger ( 'Niveau de difficulté ?\n' + '1. Facile - 2. Normal - 3. Difficile', 1, 3 );

	switch(game.difficulty)
    {
    	case 1:
        	game.hpDragon = getRandomInteger(150, 200);
       		game.hpPlayer = getRandomInteger(200, 250);
        break;
        
        case 2:
        	game.hpDragon = getRandomInteger(200, 25);
       		game.hpPlayer = getRandomInteger(200, 250);
        break;
        
        case 3:
        	game.hpDragon = getRandomInteger(200, 250);
       		game.hpPlayer = getRandomInteger(150, 200);
        break;
      }
      
      
      game.armor = requestInteger('Armure ?\n' + '1. Cuivre - 2. Fer - 3. Magique', 1, 3 );
      if( game.armor == 1) {
      
      	game.armorRatio = 1;
      
      } else if ( game.armor == 2) {
      	
        game.armorRatio = 1.25;
      
      } else {
      
      	 game.armorRatio = 2;
         
      }
      
      
      game.sword = requestInteger('Epée ?\n' +'1. Bois - 2. Acier - 3. Excalibur', 1, 3);
      
      
	switch(game.sword)
    {
    
    	case 1:
        	game.swordRatio = 0.5;
        break;
        
        case 2:
        	game.swordRatio = 1;
        break;
        
        case 3:
        	game.swordRatio = 2;
        break;
        
    }


}

initializeGame();

console.log(game);

*/



     function DammagePlayer()
     {   var degatPlayer;
     	switch(game.difficult){
     	    case 1: 
     	      degatPlayer = getRandomInteger(25,30)*game.weapon;
     	    break;

     	    case 2:
     	    degatPlayer = getRandomInteger(15,20)*game.weapon;
     	    break;

     	    case 3: 
     	    degatPlayer = getRandomInteger(5,10)*game.weapon;
     	}
     	return degatPlayer;
    } 	
     function DammageDragon(){

         var degatDragon;
         switch(game.difficult){
         	case 1:  
         	degatDragon = getRandomInteger(10,20)/game.armor;
     	    break;

     	    case 2: 
     	    degatDragon = getRandomInteger(20,30)/game.armor;
     	    break;

     	    case 3: 
     	    degatDragon= getRandomInteger(20,30)/game.armor;

         }

         return degatDragon;
    }   
 

/*  COORRECTION DOMMAGE DE CHAQUE JOUEUR

function computeDragonDamagePoint()
{
	var damagePoint;
	
    if (game.difficulty == 1) {
		damagePoint = getRandomInteger(10, 20);
    } else {
    	 damagePoint = getRandomInteger(30, 40);
    }
    
     return Math.round(damagePoint / game.armorRatio);
}

function computePlayerDamagePoint()
{
    var damagePoint;
    
    switch(game.difficulty)
    {
    
    	case 1:
        	damagePoint = getRandomInteger(25, 30);
        break;
        
        case 2:
        	damagePoint = getRandomInteger(15, 20);
        break;
        
        case 3:
        	damagePoint = getRandomInteger(5, 10);
        break;
        
     }
    
    return Math.round(damagePoint * game.swordRatio);
    
}
*/  




 var compt = 0
function gameLoop ()
{

	
do {
  var loop = getRandomInteger(1,2)
  
  if (loop == 1){
  	    game.HpPlayer -= DammageDragon();
  	    console.log(game.HpPlayer);

  }else{
        game.HpDragon -= DammagePlayer();
         console.log(game.HpDragon);
  } 

     console.log('hpDragon : '+ game.HpDragon +' PV');
      console.log('HpPlayer : '+ game.HpPlayer +' PV');

             compt ++;
            
} while ( game.HpDragon > 0 && game.HpPlayer > 0);

/*  CORRECTION DU GAMELOOP       
       function gameLoop()
{
	var damagePoint;
    var dragonSpeed;
    var playerSpeed;
    game.round = 1;
    
    
    while(game.hpDragon > 0 && game.hpPlayer > 0)
    {
    	dragonSpeed = getRandomInteger(10, 20);
        playerSpeed = getRandomInteger(10, 20);
        
        console.log('Tour numéro ' + game.round);

        if(dragonSpeed > playerSpeed)
        {
        	damagePoint = computeDragonDamagePoint();
			game.hpPlayer -= damagePoint;
            console.log
            (
                'Le dragon est plus rapide et vous brûle, il vous enlève ' +
                damagePoint + ' PV'
            );
        
        } else {
        	damagePoint = computePlayerDamagePoint();
            game.hpDragon -= damagePoint;
        	console.log('Vous êtes plus rapide et frappez le dragon, vous lui enlevez ' + damagePoint + ' PV');
        }

		showGameState();
        
    	game.round ++;
    
    }


}

       
}*/

function ShowWinner(){

	if ( game.HpPlayer > 0){
		document.write('<p> Vous avez terrassé le terrible Javawan the Bug et délivrez la princesse ! et il vous reste ' +game.HpPlayer+ ' de point de vie </p>');
	    document.write('<img src ="knight.jpg"');
	}else{
	    document.write ('<p> Javawan the Bug a gagné, vous avez été carbonisé ! La princesse restera sa captive pour les 1000 ans à venir il lui restait ' +game.HpDragon+ ' de point de vie </p>');
	    document.write('<img src = "dragon.jpg"');
	}



}

/* correction DU SHOWGAMESTATE.
  function showGameState()
{
    console.log
    (
        'Dragon : ' + game.hpDragon + ' PV, ' +
        'joueur : ' + game.hpPlayer + ' PV'
    );
}
/*

/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/


/* CORRECTION SHOWGAMEWINNER
 function showGameWinner()
{
	if(game.hpDragon > 0)
    {
    	document.write('<img src="images/dragon.jpg"/>');
        console.log("Le dragon a gagné, vous avez été carbonisé !");
        console.log("Il restait " + game.hpDragon + " PV au dragon");
	} else {
    	document.write('<img src="images/knight.jpg"/>');
        console.log("Vous avez gagné, vous êtes vraiment fort !");
        console.log("Il vous restait " + game.hpPlayer + " PV");
    
    }

}
*/

function startGame() {
	
    initializeGame();

    gameLoop();

    showGameWinner();
}

