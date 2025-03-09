"use strict";
// El tipo `string` se utiliza para representar secuencias de caracteres (cadenas de texto). Es utilizado en
// todo tipo de programación para manejar y manipular texto, como nombres, descripciones, mensajes, etc.
//
// Casos de uso comunes:
// 1. **Texto en la interfaz de usuario**: Como mensajes de bienvenida, errores o cualquier otra información visible.
// 2. **Entradas de usuario**: Para recoger datos como nombres, correos electrónicos o contraseñas.
// 3. **Concatenación y manipulación de texto**: Como formar direcciones de correo o URLs dinámicas.
(function () {
    var _a;
    var batman = 'Batman';
    var linternVerde = "Linterna's Verde";
    var volcanNegro = "H\u00E9roe: Volcan Negro";
    var abc = 123;
    console.log("I'm ".concat(batman));
    console.log(batman.toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toLocaleUpperCase()) || 'No esta presente');
})();
