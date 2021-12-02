<?php
/**
 * Solución al Reto 3 del miniAOC de Daniel Primo
 * Realizado por Juan Andrés Jiménez (aka PrinHelmet)
 */

 // Definimos la constante con las teclas del telefono y sus posibles valores
defined('TECLADO') || define('TECLADO',[
    '2' => ['a','b','c'],
    '3' => ['d','e','f'],
    '4' => ['g','h','i'],
    '5' => ['j','k','l'],
    '6' => ['m','n','o'],
    '7' => ['p','q','r','s'],
    '8' => ['t','u','v'],
    '9' => ['w','x','y','z'],
    '0' => [' ']
]);

/*
1. Primera parte
Dada una serie de dígitos, mostrar todas las combinaciones posibles de letras que se pueden conseguir.
    No es relevante el número de pulsaciones.
    No intervienen más teclas que el 2, 3, 4, 5, 6, 7 , 8 y 9. (Mira la imagen)
    Consideramos solo las letras que aparecen en el teclado (nos olvidamos de letras acentuadas, eñes).
    Todo en minúsculas.
*/

// Ejecución del enunciado
$digits = 234;
echo letterCombinations($digits);

/**
 * Función que devuelve una cadena de texto con las posibles cadenas obtenidas por la combinación
 */
function letterCombinations($digits){
    // Pasamos los dígitos a un array para recorrerlos facilmente
    $digits_array = str_split($digits);
    // Si está vacio devuelvo la cadena vacía
    if(empty($digits_array)) return '';
    // Inicializo el resultado como vacío
    $return = [];
    // Recorro todos los dígitos del parámetro de entrada
    foreach($digits_array as $digit){
        // Por cada dígito obtengo un array con los posibles valores de dicha tecla
        $key_letters = key_options($digit);
        // Voy haciendo llamadas iterativas con cada tecla, acumulando el resultado.
        // He externalizado el proceso a una función por claridad.
        $return = combine_arrays($return, $key_letters);
    }
    return implode(', ', $return);
}

function key_options($key){
    if(!array_key_exists($key, TECLADO))
        return [];
    return TECLADO[$key];
}

function combine_arrays($prepends, $letters){
    if(empty($prepends)){
        // Si el primer array es vacío devulevo el segundo array con las letras de la tecla dada
        return $letters;
    } else {
        // Si tengo acumulado un resultado lo combino con el nuevo array de letras
        // Utilizo una nueva variable de retorno para ir añadiendo las combinaciones obtenidas en cada iteración
        $return = [];
        foreach($prepends as $prepend){
            foreach($letters as $letter){
                // Por cada cadena previa genero una nueva cadena por cada letra de la tecla dada
                $return[] = $prepend.$letter;
            }
        }
    }
    return $return;
}

echo '<hr>';
/*
2. Segunda parte
Averiguar la combinación de teclas posible para escribir la palabra clave que abre la puerta de la Libretilla
*/

$phrase = 'malo olma loma mola';
echo nokia_decode($phrase);

function nokia_decode($phrase){
    // Genero un array con los caracteres de la cadena dada
    $chars_array = str_split($phrase);
    // Inicializo el código de respuesta
    $key_code = '';
    foreach($chars_array as $char){
        // Recorro cada letra de la cadena en busca de su tecla asociada para concatenarla al código de respuesta
        $key_code .= find_key($char);
    }
    return $key_code;
}

function find_key($char){
    // Recorro (brutalmente) todas las teclas del teclado
    foreach(TECLADO as $key => $key_letters){
        // Compruebo si la letra que busco está en la tecla actual y la devuelvo en caso afirmativo
        if(in_array($char, $key_letters))
            return $key;
    }
    // Devuelvo la cadena vacía en caso de no localizar la letra (En nuestro planteamiento pueden ser mayusculas, vocales con tildes, eñes...)
    return '';
}