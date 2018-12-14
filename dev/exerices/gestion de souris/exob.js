'use strict';


/* ce que j'ai fait
var max = 100;   // total à atteindre
var depart = 0;  // valeur de depart
var barre = 0; 

function progression()
{
  if(depart >= max) 
  {   	
    return;
  }
  var progressnum = document.getElementById("bar");
  var indicator = document.getElementById("fill");
  max += 1;	
  indicator.style.width= depart + "px";
  progressnum.percent = depart;   
}
 */

var fill = document.getElementById("fill");
var percent = document.getElementById("percent");
var size = 0;
var timer;

function interval()
{
	size += 2;
    fill.style.width=size+"%";
	percent.textContent = size+"%";
    
    if(size >= 100) {
    
    	window.clearInterval(timer);
  
    }
}


timer = window.setInterval(interval,50)