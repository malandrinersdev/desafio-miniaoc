<?php

namespace App\Tests;

use App\PermutarPalabras;
use PHPUnit\Framework\TestCase;

class PermutarPalabrasTest extends TestCase {

    public function testABCCadena(){
        $permutar = new PermutarPalabras();

        // $in = 'a b c';
        $in = 'abc';
        // print($permutar->permutar($in));

        // $this->assertEquals("a b c\na c b\nb a c\nb c a\nc a b\nc b a\n",$permutar->permutar($in));
        // $salida = array(0=>'abc',1=>'acb',2=>'bac',3=>'bca',4=>'cab',5=>'cba');
        // print_r($salida);
        $salida = "abc,acb,bac,bca,cab,cba";

        
        $this->assertEquals($salida,$permutar->permutar($in));
    }


    public function testVocalesCadena(){

        //Aquí, en vez de testear el resultado, testearemos la cantidad de cadenas generadas, combinaciones de 5 elementos tomados de 5 en 5 = 120
        $permutar = new PermutarPalabras();

        // $in = 'a e i o u';
        $in = 'aeiou';

        // $partes = explode("\n",$permutar->permutar($in));

        $partes = explode(",",$permutar->permutar($in));

        // print_r($partes);

        $this->assertEquals(120,count($partes));
    }

    public function testTresPalabras(){

        //Aquí, en vez de testear el resultado, testearemos la cantidad de cadenas generadas, combinaciones de 5 elementos tomados de 5 en 5 = 120
        $permutar = new PermutarPalabras();

        // $in = 'she sells seashells';
        $in = 'she sells seashells';

        // $partes = explode("\n",$permutar->permutar($in,1));

        $partes = explode(",",$permutar->permutar($in,1));

        // print_r($partes);

        $this->assertEquals(6,count($partes));
    }

    public function testValoresIguales(){

        //Aquí, en vez de testear el resultado, testearemos la cantidad de cadenas generadas, combinaciones de 5 elementos tomados de 5 en 5 = 120
        $permutar = new PermutarPalabras();

        // $in = 'a e i o u';
        $in = 'aaa';

        $this->assertEquals('aaa',$permutar->permutar($in));
    }
    

}