"use strict";
(() => {
    let myCustomVariable = 'Jesus';
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Jesus',
        age: 43,
        powers: [10],
    };
    console.log(typeof myCustomVariable);
})();
