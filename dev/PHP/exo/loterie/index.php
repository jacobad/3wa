<?php

$min = 1;
$max = 49;
$random = rand($min , $max);
$loto; // variable bouton

// generer un nombre entre 1 et 49;


$suite = [];

for ($i = 0; $i < 6; $i++){ // boucle pour sortir 6 chiffre
      do{
      	$nombre =rand(1,49);
      }while(in_array($nombre,$suite) == true); // boucle qui verifie que la valeur est bien dans le tab.
           
      array_push($suite, $nombre);
      
      sort($suite);
      };

    include 'loterie.phtml';

?>