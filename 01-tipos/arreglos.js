"use strict";
(function () {
    // const number: (string | number | boolean)[] = [1, 2, 3, 4, 5, '6', 7, 8, 9, 10];
    var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.table({ number: number });
    var villan = ['Omega Rojo', 'Dormamu', 'Duende verde'];
    villan.forEach(function (v) { return console.log(v.toLocaleUpperCase()); });
})();
