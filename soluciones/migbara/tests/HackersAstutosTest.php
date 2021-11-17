<?php

namespace App\Tests;

use App\HackersAstutos;
use PHPUnit\Framework\TestCase;

class HackersAstutosTest extends TestCase {

    public function testDiceNoHayElementosDeEntrada(){
        $hackersAstutos = new HackersAstutos();

        $in = array();
        $this->assertEquals("No hay elementos de entrada",$hackersAstutos->revisaDominios($in));
    }

    public function testDiceNoHayCorreosElectronicos(){
        $hackersAstutos = new HackersAstutos();

        $in = array("salamanca","bilbao","valladolid","alicante","murcia");
        $this->assertEquals("No hay correos electrónicos",$hackersAstutos->revisaDominios($in));
    }
    
    public function testDiceNoHayCorreosElectronicos2(){
        $hackersAstutos = new HackersAstutos();

        $in = array("zamora@zam","bilbao","valladolid","alicante","murcia");
        $this->assertEquals("No hay correos electrónicos",$hackersAstutos->revisaDominios($in));
    }

    public function testEncuentraDominioQueSeRepiteUnaVez(){
        $hackersAstutos = new HackersAstutos();

        $in = array("pepe@pepephone.es","a@PEPE.es");
        $this->assertEquals("Se repiten 1 vez: \r\npepephone.es\r\npepe.es\r\n",$hackersAstutos->revisaDominios($in));
    }

    public function testEncuentraDominioQueSeRepiteDosVeces(){
        $hackersAstutos = new HackersAstutos();

        $in = array("pepe@pepephone.es","arnaldo@pepe.es","malandriner@webReactiva.es","jejeje@pepephone.es","a@PEPETE.es");
        $this->assertEquals("Se repiten 2 veces: \r\npepephone.es\r\n",$hackersAstutos->revisaDominios($in));
    }
}