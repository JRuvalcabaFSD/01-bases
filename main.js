"use strict";
<<<<<<< HEAD
(() => {
    const batimovil = {
        carroceria: 'Negra',
        modelo: '6x6',
        antibalas: true,
        pasajeros: 4,
    };
    const bumblebee = {
        carroceria: 'Amarillo con negro',
        modelo: '4x2',
        antibalas: true,
        pasajeros: 4,
        disparar() {
            console.log('Disparando');
        },
    };
    const villanos = [
        {
            nombre: 'Lex Luthor',
            edad: 54,
            mutante: false,
        },
        {
            nombre: 'Erik Magnus Lehnsherr',
            edad: 49,
            mutante: true,
        },
        {
            nombre: 'James Logan',
            edad: undefined,
            mutante: true,
        },
    ];
    const charles = {
        poder: 'psiquico',
        estatura: 1.78,
    };
    console.log('Pasa por aqui');
    const apocalipsis = {
        lider: true,
        miembros: ['Magneto', 'Tormenta', 'Psylocke', 'Angel'],
    };
    console.log({ apocalipsis });
    let mystique;
    mystique = charles;
    mystique = apocalipsis;
=======
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(function () {
    var avengers = {
        nick: 'Samuel L. Jackons',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activos: true,
        poder: 1500.128456,
    };
    var printAventer = function (_a) {
        var ironman = _a.ironman, resto = __rest(_a, ["ironman"]);
        console.log(ironman, resto);
    };
    var avengersArr = ['Cap. America', true, 150.15];
    var cap = avengersArr[0], ironman = avengersArr[1], seriaunnumero = avengersArr[2];
})();
(function () {
    var ironman = {
        nombre: 'Tony Stark',
        weapon: 'Armorsuit',
    };
    var capAmerica = {
        nombre: 'Steve Rogers',
        weapon: 'Shield',
    };
    var thor = {
        nombre: 'thor',
        weapon: 'Mjolnir',
    };
    var avengers = [ironman, thor, capAmerica];
    for (var _i = 0, avengers_1 = avengers; _i < avengers_1.length; _i++) {
        var avenger = avengers_1[_i];
        console.log(avenger.nombre, avenger.weapon);
    }
})();
(function () {
    var getName = function () { return console.log('Viejo getName'); };
>>>>>>> Caracteristicas-ES6
})();
//# sourceMappingURL=main.js.map