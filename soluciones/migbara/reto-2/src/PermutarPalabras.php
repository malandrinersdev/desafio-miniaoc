<?php

namespace App;

class PermutarPalabras {

    //Toma un conjunto de cadenas de un array y devuelve un array con todas sus posibles combinaciones

    //Visto en https://www.oreilly.com/library/view/php-cookbook/1565926811/ch04s26.html
    //Aquí vienen esta y otras muchas soluciones https://stackoverflow.com/questions/10222835/get-all-permutations-of-a-php-array

    //Para hacer los test, me ayudó mucho las pruebas que tengo en S:\Miguel\Proyectos\Programacion\pruebas_phpunit
    // y el video https://www.youtube.com/playlist?list=PL0m0TPnF-iCGkpyJP6_uNaWU2xSy6a3I2 


    function pc_next_permutation($p, $size) {
        // slide down the array looking for where we're smaller than the next guy
        for ($i = $size - 1; $p[$i] >= $p[$i+1]; --$i) {
            //Le añado esto porque me estaba dando error por acceder a un array con -1
            if($i == 0)
               return false;
        }
    
        // Con lo que esta parte no se va a dar nunca
        // if this doesn't occur, we've finished our permutations
        // the array is reversed: (1, 2, 3, 4) => (4, 3, 2, 1)
        if ($i == -1) { return false; }
    
        // slide down the array looking for a bigger number than what we found before
        for ($j = $size; $p[$j] <= $p[$i]; --$j) { }
    
        // swap them
        $tmp = $p[$i]; $p[$i] = $p[$j]; $p[$j] = $tmp;
    
        // now reverse the elements in between by swapping the ends
        for (++$i, $j = $size; $i < $j; ++$i, --$j) {
             $tmp = $p[$i]; $p[$i] = $p[$j]; $p[$j] = $tmp;
        }
    
        return $p;
    }

    function permutar($cadena,$modo=0){
        $out = '';
        // $out=array();
        // $set = split(' ', 'she sells seashells'); // like array('she', 'sells', 'seashells')
        
        //En este modo, permutaremos las palabras dadas separadas por un espacio en blanco
        if($modo==1)
            $set = explode(' ', $cadena); //Suponemos que llega una cadena con palabras separadas por blancos
        else
            $set = str_split($cadena,1); //Por defecto, permutaremos las letras de la cadena dada

        // print_r($set);
        $size = count($set) - 1;
        $perm = range(0, $size);
        $j = 0;
        
        do { 
            foreach ($perm as $i) { $perms[$j][] = $set[$i]; }
        } while ($perm = $this->pc_next_permutation($perm, $size) and ++$j);
        
        // foreach ($perms as $p) {
        //     $out .= join(' ', $p) . "\n";
        // }

        $words = array();

        foreach ($perms as $p){
            $word = join($p);
            array_push($words,$word);
        }

        $words = array_unique($words);

        // print_r($words);

        $out = implode(",",$words);

        return $out;
    }
    
    
}