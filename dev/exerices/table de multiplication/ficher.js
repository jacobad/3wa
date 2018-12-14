/*creation de 3 varaibles pour definir les lignes
et colonnes ainsi que la taille.*/

var row;
var col;

/*cree une boucle de do while pour verifier que chaque
nombre inscrit par l'user sera un nombre*/

do{

    var	size = parseFloat(window.prompt('saissiez votre nombre'));

} while (isNaN(size)==true);

/* creation d'un tableau avec les balises  <table> et
d'une boucle pour remplir les lignes*/
document.write('<table>');
 for (row = 1 ; row <= size; row++) {
 	document.write('<tr>');
	for (col = 1 ; col <= size; col++){
     	var result = row*col;
        if(row==col){
        	document.write('<td class= color>');

        }
        else {
        	document.write('<td>');
        }
     	document.write(result);
     	document.write('</td>');
}
    document.write('</tr>');
 }
document.write('</table>');