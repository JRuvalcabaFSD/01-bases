"use strict";
// El tipo `boolean` en TypeScript representa los valores `true` o `false`. Se usa para indicar
// condiciones o estados lógicos en el programa. Es comúnmente utilizado en decisiones y control de flujo,
// como en sentencias `if`, bucles, y al almacenar el estado de una variable (por ejemplo, si un proceso
// ha terminado con éxito o si una opción está activada o desactivada).
//
// Casos de uso comunes:
// 1. **Condiciones de control**: Como verificar si una operación es exitosa o si un valor es verdadero.
// 2. **Estados de UI**: Para mostrar u ocultar elementos en una interfaz según si el estado es verdadero o falso.
// 3. **Flags o indicadores**: Para representar características específicas, como si un usuario está activo o no.
(function () {
    var isSuperman = true;
    var isBatman = false;
    isSuperman = true && false;
    console.log({ isSuperman: isSuperman });
})();
