"use strict";
// El tipo `any` permite que una variable almacene cualquier tipo de valor,
// desactivando el sistema de tipado de TypeScript. Esto significa que la variable
// puede cambiar de tipo en cualquier momento sin generar errores en tiempo de compilación.
// Se usa cuando no se conoce el tipo exacto de un valor o cuando se trabaja con datos
// dinámicos. Sin embargo, su uso excesivo puede hacer que TypeScript pierda su propósito,
// ya que no proporciona verificaciones de tipo. Es recomendable usarlo solo cuando sea
// estrictamente necesario, y preferir otros tipos como `unknown` cuando sea posible.
(function () {
    var avengers = 123;
    var exist;
    var power;
    avengers = 'Dr Strange';
    // console.log(avengers.charAt(0));
    console.log(avengers.charAt(0));
    avengers = 150.2335;
    // console.log(avengers.toFixed(2));
    console.log(avengers.toFixed(2));
    console.log(exist);
    console.log(power);
})();
