"use strict";
// El tipo `void` en TypeScript se utiliza principalmente para indicar que una función no retorna ningún valor.
// Se usa como tipo de retorno en funciones que no necesitan devolver nada, como aquellas que solo realizan efectos secundarios.
//
// Casos de uso comunes:
// 1. **Funciones sin valor de retorno**: Como funciones que solo realizan acciones, como modificar el estado de una variable o imprimir un mensaje.
// 2. **Funciones de evento**: En manejadores de eventos o callbacks que no devuelven información, solo ejecutan una acción.
// 3. **Funciones con efectos secundarios**: Para representar funciones que modifican el estado o realizan tareas sin necesidad de devolver un resultado.
(function () {
    function callBatman() {
        return;
    }
    var callSuperman = function () { };
    var a = callBatman();
    console.log(a);
})();
