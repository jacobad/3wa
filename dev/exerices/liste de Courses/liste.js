'use stric';


var liste;
liste =[];


var prod1;

function ajout(plus){
	var prod1 = window.prompt('vos produits?');


   liste.push(prod1);
}

function supp(moins){
	var prod2 = window.prompt('enleve un aliment');

   liste.splice(prod2);
}

liste.splice()
console.log(liste);

              /* correctittttttttioon*/



var shoppingList = new Array();

function addItem(item)
{

	shoppingList.push(item);

}

function displayShoppingList()
{

	console.log('La liste contient ' + shoppingList.length + ' produit(s).');
	console.log(shoppingList);
    
    document.write('<ul>');
    
    for (var i = 0; i < shoppingList.length; i++) {
    
    	document.write('<li>'+shoppingList[i]+'</li>')
    	
    }
    
    document.write('</ul>');
}

function removeAllItems()
{

	shoppingList = [];
    
    //shoppinglist(0, shoppingList.length -1);
    
}


function removeItem(item)
{
	var index = shoppingList.indexOf(item);
    
    if(index == -1)
	{
    	console.log("ERREUR : le produit " + item + " n'existe dans la liste de courses");

    } else {
    	shoppingList.splice(index, 1);
    }
    

}





console.clear();


addItem('Fraises');
addItem('Poulet');
addItem('Tournevis');
addItem('Artichaut');

displayShoppingList()


removeItem(window.prompt('Quel produit de la liste de courses souhaitez-vous supprimer ?'));
displayShoppingList();

removeAllItems();
displayShoppingList();