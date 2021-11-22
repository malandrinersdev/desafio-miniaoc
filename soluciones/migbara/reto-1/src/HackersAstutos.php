<?php

namespace App;

class HackersAstutos {

    //Toma un conjunto de direcciones de correo y las va guardando en un array por dominio (lo que esté a la derecha de la @)
    //Hay que crear una estructura con los dominios encontrados y el número de emails que hay de cada uno de ellos
    //Devolverá el dominio que más se repite


    function clasificaDominios($in){
        $dominios = array();
        $max = 0;
        if(count($in)){
            foreach ($in as $email) {
        
                //Descomponemos el email para encontrar su dominio
                $partes = explode("@",$email);
    
                if(filter_var($email, FILTER_VALIDATE_EMAIL)){//} && count($partes)>1){
        
                    $dominio = strtolower($partes[1]);
            
                    if($dominio){
            
                        if(!array_key_exists($dominio,$dominios)){
                            $dominios[$dominio]=1;
                        }
                        else{
                            $dominios[$dominio] = $dominios[$dominio] + 1;
                        }
                        if($dominios[$dominio] > $max )
                            $max = $dominios[$dominio];
            
                    }
                }
            }
        }
        return array("dominios"=>$dominios,"max"=>$max);
    }

    function dominioQueMasSeRepite($domainStructure){
        $out = array();
    
        $dominios = $domainStructure["dominios"];
        $max = $domainStructure["max"];
    
        foreach($dominios as $dom => $rep){
            if($rep == $max){
                array_push($out,$dom);
            }
        }
        return $out;
    }

    function revisaDominios($in){

        $mensaje = '';
    
        if(count($in)){
    
            $estructuraDominios = $this->clasificaDominios($in);
    
            // print_r($estructuraDominios["dominios"]);
            // print("MAX: ".$estructuraDominios["max"]);
    
            if($estructuraDominios["max"] && count($estructuraDominios["dominios"])){
    
                $out = $this->dominioQueMasSeRepite($estructuraDominios);
    
                $msg = "Se repiten 1 vez: ";
                if($estructuraDominios["max"]>1)
                    $msg = "Se repiten ".$estructuraDominios["max"]." veces: ";
                
                $mensaje = $msg."\r\n";
                foreach ($out as $dominio){
                    $mensaje .= $dominio."\r\n";
                }
            }
            else{
                $mensaje = "No hay correos electrónicos";
            }
    
        }
        else{
            $mensaje = "No hay elementos de entrada";
        }
    
        return $mensaje;
    }
}