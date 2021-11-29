<?php

namespace App\Tests;

use App\HackeoNokia;
use PHPUnit\Framework\TestCase;

class HackeoNokiaTest extends TestCase {

    public function testPulsamos6(){
        $nokia = new HackeoNokia();

        $this->assertEquals(array('m','n','o'),$nokia->letterCombinations('6'));
    }

    public function testPulsamos23(){
        $nokia = new HackeoNokia();

        $this->assertEquals(array('ad','ae','af','bd','be','bf','cd','ce','cf'),$nokia->letterCombinations('23'));
    }
    
    public function testPulsamos747(){
        $nokia = new HackeoNokia();

        $this->assertEquals(48,count($nokia->letterCombinations('747')));
    }

    public function testPulsamos74793(){
        $nokia = new HackeoNokia();

        $this->assertEquals(576,count($nokia->letterCombinations('74793')));
    }


    public function testQuePulsoMalo(){
        $nokia = new HackeoNokia();

        $this->assertEquals('6256',$nokia->getDigits('malo'));
    }

    public function testQuePulsoMaloOlmaLomaMola(){
        $nokia = new HackeoNokia();

        $this->assertEquals('6256065620566206652',$nokia->getDigits('malo olma loma mola'));
    }
}