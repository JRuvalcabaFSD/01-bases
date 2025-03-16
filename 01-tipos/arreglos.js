"use strict";
// Los arreglos en TypeScript son útiles en varios casos, algunos de los más comunes son:
//
// 1. **Almacenar listas de datos homogéneos**: Se usa cuando se necesita manejar colecciones
//    de elementos del mismo tipo, como una lista de números o nombres.
// 2. **Iterar sobre elementos**: Los arreglos permiten usar ciclos como `for` o `forEach`
//    para recorrer sus elementos y realizar operaciones en cada uno.
// 3. **Procesar datos de una API**: Muchas veces, los datos que recibimos de una API
//    llegan en forma de un arreglo, por lo que los arreglos nos permiten manipular,
//    filtrar o modificar esa información fácilmente.
// 4. **Almacenar resultados temporales**: Cuando se necesita guardar datos que serán
//    procesados o utilizados en múltiples pasos, como en algoritmos de búsqueda o clasificación.
//
// Los arreglos ofrecen un enfoque eficiente y seguro para trabajar con datos agrupados en TypeScript.
(function () {
    // const number: (string | number | boolean)[] = [1, 2, 3, 4, 5, '6', 7, 8, 9, 10];
    var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.table({ number: number });
    var villan = ['Omega Rojo', 'Dormamu', 'Duende verde'];
    villan.forEach(function (v) { return console.log(v.toLocaleUpperCase()); });
})();
