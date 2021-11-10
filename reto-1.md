# Reto 1: Los hackers astutos

Una pandilla de hackers avispados quieren acceder a la Libretilla sin pedir permiso. La Libretilla es un sistema ancestral donde se guardan los mejores tesoros de la comunidad malandriner. Datos y datos (concretamente 87) de alto valor.

El sistema que han intentado es darse de alta en un formulario que encontraron en la web con diferentes correos electrónicos. Han estado toda la noche pasada intentándolo y no han podido. Claro, la Libretilla es de máxima seguridad.

Tampoco han sido muy astutos. Han usado correos electrónicos del mismo dominio para hacer los ataques. 

Así que sabemos que el correo electrónico que más veces se repita es el de los malos.

Esta es la lista de los mails de la pasada noche:

```
'hola@somoshackersastutos.com'
'ambrosio@outlook.com'
'coco@malandriners.dev'
'hello@somoshackersastutos.com'
'ambrosio@outlook.com'
'ciao@somoshackersastutos.com'
```



### Tu reto es el siguiente:

**Crear un código que capture la información de los emails y sea capaz de devolver cuáles son los emails de los hackers.**



La entrada de datos puede ser por consola o también utilizando una función en tu código que se llame `findSmartHackers()` pasando como parámetro las direcciones de correo electrónico como un array o similar.

El resultado debe verse impreso en pantalla.



**Ejemplo**



```
// input

list = ['hola@somoshackersastutos.com',
'ambrosio@outlook.com',
'coco@malandriners.dev',
'hello@somoshackersastutos.com',
'ambrosio@outlook.com',
'ciao@somoshackersastutos.com']
findSmartHackers(list)

// ouput
> ['hola@somoshackersastutos.com', 'hello@somoshackersastutos.com', 'ciao@somoshackersastutos.com']
```



**Sugerencia de mejora:**

En vez de utilizar un bucle y ya está, ¿por qué no creas una estructura de datos o una *hash table* para extraer la información que se solicita?



### Sistema de puntos

1. Un punto por cada solución correcta.
2. Un punto más si inlcuyes test unitarios en la solución.
3. Un punto más si utilizas en la solución un lenguaje de programación desconocido para ti.

Máximo 1 solución por persona, 3 puntos por reto (salvo sorpresas).

Revisa el README de este mismo repositorio para tener todos los datos de como participar.



### Dudas y sugerencias

Ya sabes donde encontrarme, en danielprimo.io ;)
