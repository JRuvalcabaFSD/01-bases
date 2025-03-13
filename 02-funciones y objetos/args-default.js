"use strict";
(() => {
    const fullName = (firstName, Lastname, upper = false) => {
        if (upper)
            return `${firstName} ${Lastname || ''}`.toUpperCase();
        return `${firstName} ${Lastname || ''}`;
    };
    const name = fullName('Jesus', 'Ruvalcaba', true);
    console.log({ name });
})();
