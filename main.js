"use strict";
var Validations;
(function (Validations) {
    Validations.validateText = function (text) { return text.length > 3; };
    var validateDate = function (myDate) { return !isNaN(myDate.valueOf()); };
})(Validations || (Validations = {}));
console.log(Validations.validateText('Jesus'));
//# sourceMappingURL=main.js.map