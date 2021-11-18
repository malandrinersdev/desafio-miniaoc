# Reto 2: Malo de la Olma de la Loma Mola

Los hackers avispados, tras ser descubiertos en el reto 1, han vuelto.

Siguen demostrando una astucia difícil de encontrar en el sector. Estoy llamando a Google para presentar a estas joyas del cracking.

Ahora andan probando combinaciones de palabras para reventar la contraseña de la Libretilla. ¡¿Pero no saben ni donde está?!

El caso es que quiero ayudarles porque he visto que no son capaces de generar palabras más largas de 3 caracteres.

Esto es lo que andan probando los pobres: `ama, aam, maa, elo, eol, leo…`

Son peor que el Malo de la Olma de la Loma Mola :) 



### Tu reto es el siguiente:

**Crear un código que al pasarle una cadena de letras sea capaz de generar todas las permutaciones cambiándolas de posición.**

La entrada de datos puede ser por consola o cualquier otra forma de generar un input (un formulario). El código debe contener una función `generateTrollPassword(input)` que sea la responsable de generar las permutaciones.

Cada una de las permutaciones debe tener el mismo número de caracteres que el input o palabra de entrada original.

La función debe admitir caracteres alfabéticos (letras mayúsculas y minúsculas del alfabeto).

La salida de la función puede ser una lista separada por comas o un array.

No hay límite de caracteres, pero tampoco hace falta que tumbes tu procesador con 42 caracteres :).

**Ejemplo:**

```
// input

word = 'mola'

// ouput
> almo,alom,amlo,amol,aolm,mola,loma,ma[la lista continua],olma,omal,omla
```

**Lo de arriba un ejemplo, la solución del reto debe ser genérica.

**Sugerencia:**

¿Y si utilizas una llamada recursiva para resolverlo? 



### Sistema de puntos

1. Un punto por cada solución correcta.
2. Un punto más si inlcuyes test unitarios en la solución.
3. Un punto más si utilizas en la solución un lenguaje de programación desconocido para ti.

Máximo 1 solución por persona, 3 puntos por reto (salvo sorpresas).

Revisa el README de este mismo repositorio para tener todos los datos de como participar.



### Dudas y sugerencias

Ya sabes donde encontrarme, en danielprimo.io ;)
