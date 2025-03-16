"use strict";
// El tipo `number` en TypeScript se utiliza para representar tanto números enteros como decimales. Es uno
// de los tipos más comunes, utilizado en cálculos, operaciones aritméticas y representaciones numéricas.
//
// Casos de uso comunes:
// 1. **Cálculos matemáticos**: Para realizar operaciones matemáticas como suma, resta, multiplicación, etc.
// 2. **Contadores y acumuladores**: Como contar el número de intentos, o acumular el total de un pedido.
// 3. **Representación de cantidades**: Como almacenar la edad de un usuario, el precio de un producto, o una distancia.
(function () {
    var avenges = 10;
    console.log(avenges);
    var villians = 20;
    if (avenges < villians) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Estamos salvados');
    }
    avenges = Number('55A');
    console.log({ avenges: avenges });
})();
