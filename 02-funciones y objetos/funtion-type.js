"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (nombre) => `Hola: ${nombre}`;
    const saveTheWorld = () => `El mundo esta salvado!`;
    let myfunction;
    //* myfunction = 10;
    //* console.log(myfunction);
    //* myfunction = addNumbers;
    //* console.log(myfunction(1, 2));
    //? myfunction = greet;
    //? console.log(myfunction('Jesus'));
    myfunction = saveTheWorld;
    console.log(myfunction());
})();
