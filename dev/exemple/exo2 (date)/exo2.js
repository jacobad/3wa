
 
 var date = new Date(); 

var jour = [];

jour[1] = 'Lundi';
jour[2] = 'Mardi';
jour[3] = 'Mercredi';
jour[4] = 'Jeudi';
jour[5] = 'Vendredi';
jour[6] = 'Samedi';
jour[0] = 'Dimanche';

var mois= [];
mois[0] = 'jan';
mois[1] = 'fev';
mois[2] = 'mars';
mois[3] = 'avril';
mois[4] = 'mai';
mois[5] = 'juin';
mois[6] = 'juillet';
mois[7] = 'aout';
mois[8] = 'sep';
mois[9] = 'oct';
mois[10] = 'nov';
mois[11] = 'dec';

var jour = jour[date.getDay()];
var mois= mois[date.getMonth()];
var chiffre= date.getDate();
var annee = date.getFullYear();



document.write ( 'nous sommes le '+jour+' '+mois+' '+chiffre+' '+annee+''); 
