"use strict";
(() => {
    const fullName = (firstName, Lastname) => {
        return `${firstName} ${Lastname}`;
    };
    const name = fullName('Jesus', 'Ruvalcaba');
    console.log({ name });
})();
