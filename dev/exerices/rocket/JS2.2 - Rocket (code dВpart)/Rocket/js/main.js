'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/
var time = document.querySelector('#billboard span');
var button = document.getElementById('firingButton');
var rocket= document.getElementById('rocket');
var comptage = 5;
var timer;
var buttonStop = document.getElementById('stopButton');
var stopTime;
/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/
function pushTime (){
	timer=window.setInterval(compte,1000);
}
function compte(){
   comptage--;
	time.textContent = comptage;
	rocket.src = 'images/rocket2.gif';
	if( comptage == 0){
		window.clearInterval(timer);
		rocket.src = 'images/rocket3.gif';
		rocket.classList.add('tookOff');
	}
}

/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/
button.addEventListener('click', pushTime);
buttonStop.removeEventListener('click', pushTime);