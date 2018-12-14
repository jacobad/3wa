'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/
/*var toolbar = document.getElementById('toolbar-toggle');
var nav = document.querySelector('.toolbar ul')
var pict = document.querySelector('#slider img');
var next = document.getElementById('slider-next');
var photos = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg', 'images/5.jpg', 'images/6.jpg'];
var previous = document.getElementById('slider-previous');
var index = 0;
var timer;
var start = document.getElementById('slider-toggle');
var random = document.getElementById('slider-random');

/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/

/*function showNavbar() {
	nav.classList.toggle('hide');
}

function goToNext() {
	if (index >= photos.length - 1) {
		index = 0;
	} else {
		index++;
	}
	
	pict.src = photos[index];

}
function goToPrevious (){
	if (index <= photos.length -5) {
		index = 5;
	}else{
		index--;
	}
	pict.src = photos[index];

}

function play() {
	index =0;
    pict.src = photos[index];
    index++;
    setInterval(photos,2000);
 }

function getRandomInteger(min, max)
{
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function goToRandom() {
	index = getRandomInteger(0, photos.length -1 );
    
    pict.src = photos[index].pict;
}

function goToPlay() {
	if (isPlaying == false) {
    
    	timer = window.setInterval(goToNext, 2000);
        isPlaying = true;
        
    } else {
    	window.clearInterval(timer);
        isPlaying = false;

    }

/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/

/*pict.src = photos[index];
toolbar.addEventListener('click', showNavbar);
next.addEventListener('click', goToNext);
previous.addEventListener('click', goToPrevious);
*/





var toolbar = document.getElementById('toolbar-toggle');

var nav = document.querySelector('.toolbar ul');
var icon = document.querySelector('#toolbar-toggle i');
var next = document.getElementById('slider-next');
var prev = document.getElementById('slider-previous');
var random = document.getElementById('slider-random');
var play = document.getElementById('slider-toggle');

var pict = document.querySelector('#slider img');
var fig = document.querySelector('#slider figcaption');

var index = 0;
var isPlaying = false;
var timer;

var slides =
[
    { image: 'images/1.jpg', legend: 'Street Art'          },
    { image: 'images/2.jpg', legend: 'Fast Lane'           },
    { image: 'images/3.jpg', legend: 'Colorful Building'   },
    { image: 'images/4.jpg', legend: 'Skyscrapers'         },
    { image: 'images/5.jpg', legend: 'City by night'       },
    { image: 'images/6.jpg', legend: 'Tour Eiffel la nuit' }
];

function onToolbarToggle(){


	nav.classList.toggle('hide');
    icon.classList.toggle('fa-arrow-down');
    icon.classList.toggle('fa-arrow-right');
}

function goToNext() {

	if (index >= slides.length - 1 ) {
    
    	index = 0;
    
    } else {
    
    	index++;    
    }
    
    pict.src = slides[index].image;
	fig.textContent = slides[index].legend;   

}


function goToPrev() {
	
    if (index <= 0 ) {
    
    	index = slides.length - 1 ;
    
    } else {
    
    	index--;
    }
    
    pict.src = slides[index].image;
	fig.textContent = slides[index].legend;   

}

function goToRandom() {

	index = getRandomInteger(0, slides.length -1 );
    
    pict.src = slides[index].image;
	fig.textContent = slides[index].legend;   

}

function goToPlay() {
	if (isPlaying == false) {
    
    	timer = window.setInterval(goToNext, 100);
        isPlaying = true;
        
    } else {
    	window.clearInterval(timer);
        isPlaying = false;

    }
    
    var faPlay = document.querySelector('#slider-toggle i');
    faPlay.classList.toggle('fa-play');
    faPlay.classList.toggle('fa-pause');

}
function myFunction (event) {
	console.log(event.keyCode);
	if (event.keyCode == 39) {
	     goToNext();
	}else if (event.keyCode == 37) {
	     goToPrev();
	}else if (event.keyCode == 38) {
		goToPlay();
	}else if (event.keyCode == 40 ) {
		goToRandomm();
	}
}


pict.src = slides[index].image;
fig.textContent = slides[index].legend;

toolbar.addEventListener('click', onToolbarToggle);
next.addEventListener('click', goToNext);
prev.addEventListener('click', goToPrev);
random.addEventListener('click', goToRandom);
play.addEventListener('click', goToPlay);
document.addEventListener('keyup', myFunction);
