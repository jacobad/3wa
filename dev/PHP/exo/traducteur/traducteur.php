<?php

	$dico = [
	'chien' => 'dog',
	'chat' => 'cat',
	'voiture' => 'car',
    'velo' => 'bike'
];

function translate($dico,$word) {
	if(array_key_exists($word, $dico) == true){

	}else if (in_array($word,$dico) == true){
    
 



if(array_key_exists('word', $_POST) == true)
 {
	$word =  strtolower($_POST['word']);
    var_dump($word);   
   
   translate($word , $dico);
}
var_dump($dico);


include "ficher.phtml";
?>