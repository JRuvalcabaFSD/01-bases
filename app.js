"use strict";
// Funciones Básicas
const sumar = (a, b) => {
    return a + b;
};
const contar = (heroes) => {
    return heroes.length;
};
const superHeroes = ['Flash', 'Arrow', 'Superman', 'Linterna Verde'];
contar(superHeroes);
//Parametros por defecto
const llamarBatman = (llamar = true) => {
    if (llamar) {
        console.log('Batiseñal activada');
    }
};
llamarBatman();
//! Error1
// Rest?
const unirheroes = (...personas) => {
    return personas.join(', ');
};
//! Error 2
// Tipo funcion
const noHaceNada = (numero, texto, booleano, arreglo) => { };
//! Error 3
// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
