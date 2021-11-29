<?php

namespace App;

class HackeoNokia {

    protected $teclado = array(
        "2"=>array("a","b","c"),
        "3"=>array("d","e","f"),
        "4"=>array("g","h","i"),
        "5"=>array("j","k","l"),
        "6"=>array("m","n","o"),
        "7"=>array("p","q","r","s"),
        "8"=>array("t","u","v"),
        "9"=>array("w","x","y","z"),
    );

    protected $strings = array();

    private function comb($digits,&$cad=''){

        //Descomponemos los digitos que llegan (2,3,....,9)
        $set = str_split($digits,1);

        //Nos quedamos con el primero, y recorremos sus letras asociadas

        $m = $set[0];
        for ($j=0; $j < count($this->teclado[$m]); $j++) {
            //Si no hay más dígitos pulsados, devolvemos una cadena con lo que hubiera antes y cada letra asociada
            if(count($set)==1)
                array_push($this->strings,$cad.$this->teclado[$m][$j]);
            else{
                //Si hay más dígitos, buscamos recursivamente las cadenas para el resto de los dígitos, para cada letra asociada
                $s = $cad.$this->teclado[$m][$j];
                $this->comb(substr($digits,1),$s);
            }
        }

    }
    
    public function letterCombinations($digits){

        $this->strings = array();
        
        $this->comb($digits);

        // print_r( $this->strings);

        return $this->strings;
        
    }

    public function getDigits($cad){
        $set = str_split($cad,1);

        //para cada una de las letras, buscamos la tecla que la contiene
        $s = '';
        for ($i=0; $i < count($set); $i++) {
            if($set[$i]==' ')
                $s .= '0';
            else{
                foreach($this->teclado as $key =>$values){
                    if(in_array($set[$i],$values))
                        $s .= $key;
                }
            }
        }
        // echo $s;
        return $s;
    }
}