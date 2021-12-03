# Presentacion de soluciones

Estos retos los he hecho en TypeScript, lenguaje que vengo aprendiendo desde octubre, junto con las mejoras en Javascript desde ES6.
Cada reto tiene su test para comprobar que funciona.

## Reto 1: Los hackers astutos
[[Enunciado del reto]](https://github.com/malandrinersdev/desafio-miniaoc/blob/main/reto-1.md)

La solucion a este primer reto está implementada en el archivo `findSmartHackers.ts`.

Primero se pasa el conjunto de emails por un clasificador llamado `classifySmartHackers`.

Este `classifySmartHackers`, usa el transformador `hackerClassificator`, que transforma el email en un objeto con informacion del email, y si es candidato para ser clasificado. Así `classifySmartHackers`, devuelve un conjunto de _emails-clasificados_.

Por último, la funcion `findSmartHackers` no tiene más que filtrar los candidatos, y extraer el email del conjunto filtrado, para poder devolver el resultado buscado.


## Reto 2: Malo de la Olma de la Loma Mola
[[Enunciado del reto]](https://github.com/malandrinersdev/desafio-miniaoc/blob/main/reto-2.md)

La solucion a este primer reto está implementada en el archivo `generateTrollPassword.ts`.

la funcion `generateTrollPassword`, es una funcion recursiva, la cual extrae la primera letra del texto que se le pasa y la combina con todos que devuelve la misma funcion, pero pasándole como parametro el mismo texto, pero sin la primera letra.

Así, hasta que no quedan letras que procesar en el texto.


## Reto 3: Nokia 6310
[[Enunciado del reto]](https://github.com/malandrinersdev/desafio-miniaoc/blob/main/reto-3.md)

En este reto, *comenzaré por la segunda parte*, ya que la primera parte utiliza el código implementado para la solución de la primera.

### Reto 3.2: Combinación de libretilla
El archivo `nokiaKeyboard` contiene:
* La clase `NokiaKeyboard`, la cual se encarga, básicamente, de traducir pulsaciones a text y texto a pulsaciones.
* La clase `Button`, la cual utiliza `NokiaKeyboard`, que contiene la definición del numero y las letras asociadas a cada boton. Se encarga de traducir pulsaciones a texto y texto a pulsaciones.

La solución a esta parte de este reto, la proporciona direcamente el método `getSecuence` de la clase `NokiaKeyboard`.

### Reto 3.1: Combinaciones de letras
La funcion `letterCombinations`, obtiene la serie de teclas que van a ser pulsadas, y cada tacla la transforma, apoyandose en la clase `NokiaKeyboard`, en el conjunto de letras correspondientes a la tecla, con lo que obtenemos un conjunto de conjuntos de letras.

Éste último conjunto de conjuntos de letras se pasa como argumento a una función que realiza la permutación de los conjuntos, obteniendo el conjunto de resultados deseados.

Como optimización de la funcion de permutación, se le ha agregado una cache por composición, para que no tenga que repetir cálculos.



### Nota de la implementación
A pesar de no ser relevante el número de pulsaciones, se ha intentado dar una solución que lo tenga en cuenta. Sin embargo, para que pudiera realizarse sin errores, habría que separar de alguna forma las secuencias. En éste ejemplo se ve la necesidad del separador hacerlo. 
Tomeos la célebre cita de Alex Hermida `228833662777706666622244337777062555266377744466337777777`
```
texto que se entiende quería cifrar en Nokio: 
22 88 33 66 2 7777 0 66 666 222 44 33 7777 0 6 2 555 2 66 3 777 444 66 33 777 7777
buenas noches malandriners

texto que descifra la clase NokiaKeyboard, la cual prioríza el máximo núm de pulsaciones
22 88 33 66 2 7777 0 666 66 222 44 33 7777 0 6 2 555 2 66 3 777 444 66 33 7777 777
buenas onches malandrinesr
```
Esta implementación no afecta al resultado de las soluciones pedidos, ya que, pero es un punto a tener en cuenta si se reutiliza esta clase para otra funcionalidad. 
