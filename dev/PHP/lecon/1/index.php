<?php

$name = 'Thibaut';

var_dump($name);

for ($i = 0; $i < 6; $i++) {
	
    echo '<p>Salut '.$name.'</p>';

}


if ($name == 'Paul') {

	echo 'Tu es Paul';
    
} else {

	echo 'Tu n\' es pas Paul';

}


function addition($num1, $num2) {
	
    $result = $num1 + $num2;
    return $result;

}

$result = addition(3, 5);
$table = ['chien', 'chat', 'souris'];
echo $table[1];


$dico = [

	'name' => 'Robert',
	'age' => 23,
	'taille' => '1m85',
    'fumeur' => false
];
echo '<p>' .$dico['name'].'</p>';
array_key_exists('name', $dico) 


array_key_exists('name', $dico); // renvoie true si la clef existe ou sinon false
 
in_array(23, $dico);// renvoie true si la value existe ou sinon false

array_search('1m85', $dico); // renvoie la clef

$dico['age']; // renvoie la value

include 'exemple.phtml';
include 'footer.phtml';

?>

