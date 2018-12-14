'use strict';


var button  = document.getElementById('ToggleRectangle');
var ToggleRectangle = document.querySelector('.rectangle');

//associer ma classe de mon boutton avec la proprite hidden

button.addEventListener('click', myFunction);
// lorsque je clique sur mon boutton mon rectangle disparait

function myFunction() {
    ToggleRectangle.classList.toggle('hidden');
}
//ma fonction doit fonctionner

function vert(){
	ToggleRectangle.classList.toggle('good');
}
ToggleRectangle.addEventListener('click', vert);

//clique le carre passe au vert

function rouge(){
	ToggleRectangle.classList.toggle('important');
}
 ToggleRectangle.addEventListener('mouseover', rouge);

function remove(){
	ToggleRectangle.addEventListener('important , hidden, good');
}