"use strict";
// Una tupla (`tuple`) es un tipo de arreglo donde los elementos pueden tener tipos diferentes y un número fijo.
// A diferencia de los arreglos comunes, las tuplas permiten almacenar valores heterogéneos en posiciones específicas.
//
// Casos de uso comunes:
// 1. **Datos heterogéneos en una estructura fija**: Como almacenar un nombre y una edad en un solo arreglo.
// 2. **Retorno múltiple de valores desde una función**: Cuando una función debe devolver varios valores de diferentes tipos.
// 3. **Coordenadas o dimensiones**: Como almacenar una coordenada (x, y) o un tamaño (alto, ancho).
(function () {
    var hero = ['Dr. Strange', 100, true];
    hero[1] = 50;
    hero[0] = 'Iron man';
    hero[2] = false;
    console.log(hero);
})();
