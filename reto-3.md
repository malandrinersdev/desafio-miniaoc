
Hemos descubierto que entre los hackers astutos hay un "pre-milenial" que está utilizando una tecnología de su época pensando que así podría colarse en la sede de la Libretilla.

Gracias a un Nokia 6310 que alguien guardó en un cajón hemos descubierto su treta.

Están intentando atacar a la Libretilla, desesperados, usando un móvil de “última generación”, un Nokia 6310. 

Las marcaciones de teclado han sido claves en todo esto. Este era un móvil en el que había que pulsar varias veces los dígitos del 2 al 9 para conseguir letras. Una vez al 2 era una A, tres veces al 3 era una F. ([Mira la imagen](https://en.wikipedia.org/wiki/Nokia_6310i#/media/File:N6310i_gross.jpg))

Golpeando a la nube sofisticada a base de SMS con códigos extraños… Pobres.


### Tu reto es el siguiente:

Tienes dos partes, que hay que resolver de forma separada.

**1. Primera parte**

**Dada una serie de dígitos, mostrar todas las combinaciones posibles de letras que se pueden conseguir.**

- No es relevante el número de pulsaciones.
- No intervienen más teclas que el 2, 3, 4, 5, 6, 7 , 8 y 9. ([Mira la imagen](https://en.wikipedia.org/wiki/Nokia_6310i#/media/File:N6310i_gross.jpg))
- Consideramos solo las letras que aparecen en el teclado (nos olvidamos de letras acentuadas, eñes).
- Todo en minúsculas.

**Ejemplo:**

````
// input

digits = 6
letterCombinations(digits)

// output

> m, n, o


// input

digits = 234
letterCombinations(digits)

// output
> adg, adh, adi, aeg, aeh, aei, afg, afh, afi, bdg, bdh, bdi, beg, beh, bei, bfg, bfh, bfi, cdg, cdh, cdi, ceg, ceh, cei, cfg, cfh, cfi
````

(Lo de arriba un ejemplo, la solución del reto debe ser genérica.)


**2. Segunda parte**

**Averiguar la combinación de teclas posible para escribir la palabra clave que abre la puerta de la Libretilla**

La frase es:

`malo olma loma mola`

- Minúsculas
- El espacio es una pulsación en ‘0’

Puedes hacerlo como quieras:

1. Poniendo las teclas tal cual en una función (aunque no tenga ninguna gracia).
2. Usando la función de la primera parte.
3. Usando las combinaciones del reto 2 (las 4 palabras son un anagrama) y lo que has trabajado en el reto 3.
4. Estilo libre o _free style_ que dicen los modernos.


Hackers astutos, cuánto tenéis que agradecer a los malandriners… :)


### Sistema de puntos

1. Un punto por cada solución correcta.
2. Un punto más si inlcuyes test unitarios en la solución.
3. Un punto más si utilizas en la solución un lenguaje de programación desconocido para ti.
4. Dos puntos más si presentas una de las soluciones en directo en la Gala miniAOC del 2 de Diciembre.

Máximo 1 solución por persona, 3 puntos por reto. 2 puntos más (máximo) si presentas una de las soluciones en directo.
