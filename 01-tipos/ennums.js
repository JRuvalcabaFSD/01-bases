"use strict";
// El tipo `enum` en TypeScript se utiliza para definir un conjunto de valores constantes con nombres legibles,
// lo que facilita la gestión de valores fijos en lugar de usar números o cadenas mágicas.
//
// Casos de uso comunes:
// 1. **Representar estados o condiciones**: Como los días de la semana, meses del año o estados de un proceso.
// 2. **Opciones limitadas**: Como valores fijos para un sistema de clasificación, niveles de acceso o tipos de vehículos.
// 3. **Mejorar la legibilidad del código**: Usar `enum` en lugar de números mágicos o cadenas para mejorar la claridad.
(function () {
    var AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["medium2"] = 3] = "medium2";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    var currentAudio = 10;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
