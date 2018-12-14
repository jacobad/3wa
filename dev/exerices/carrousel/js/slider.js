'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/
//var Barre = document.getElementById('toolbar-toggle');
//var liste = document.querySelector('ul');
//var photo =['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg'];
//var titre = ['photo1','photo2','photo3','photo4','photo5','photo6'];
//var compt;
/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/
//function hide(){
//	liste.classList.toggle('hide');
//}
//function picture(){
  //compt++;
  //slider.src = photo[compt];
   //if (compt > 5);
   //silder.src = titre
//}


/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/

var photo =['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg'];
var titre = ['photo1','photo2','photo3','photo4','photo5','photo6'];
var toolbar = document.getElementById('toolbar-toggle');
var nav = document.querySelector('.toolbar ul');
var icon = document.querySelector('#toolbar-toggle i');
var slider= document.getElementById('slider-previous');
var compt = 0;


function onToolbarToggle(){

	nav.classList.toggle('hide');
    icon.classList.toggle('fa-arrow-down');
    icon.classList.toggle('fa-arrow-right');
}

function picture(){
  compt++;
  slider.src = photo[compt];


}

toolbar.addEventListener('click', onToolbarToggle)
