"use strict";
(() => {
    let avenges = 10;
    console.log(avenges);
    const villians = 20;
    if (avenges < villians) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Estamos salvados');
    }
    avenges = Number('55A');
    console.log({ avenges });
})();
