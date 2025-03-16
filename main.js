"use strict";
var conducirBatimovil = function (auto) {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelear();
};
var batimovil = {
    encender: false,
    velocidadMaxima: 0,
    acelear: function () {
        console.log('...... gogogo!!!');
    },
};
var guason = {
    reir: true,
    comer: true,
    llorar: false,
};
var reir = function (guason) {
    if (guason.reir) {
        console.log('JAJAJAJA');
    }
};
var ciudadGotica = function (ciudadanos) {
    return ciudadanos.length;
};
var Persona = (function () {
    function Persona(nombre, edad, sexo, estadoCivil) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.estadoCivil = estadoCivil;
    }
    Persona.prototype.imprimirBio = function () {
        console.log("Hola! soy ".concat(this.nombre, " tengo ").concat(this.edad, " a\u00F1os de tipo ").concat(this.sexo, " y estoy ").concat(this.estadoCivil));
    };
    return Persona;
}());
var jesus = new Persona('Jesus', 43, 'Masculino', 'Soltero');
jesus.imprimirBio();
(function () {
    var flash = {
        name: 'Barry Allen',
        age: 24,
        powers: [1, 2],
    };
    var superman = {
        name: 'Clark Kent',
        age: 60,
        powers: [1],
        getName: function () {
            return this.name;
        },
    };
})();
(function () {
    var Mutan = (function () {
        function Mutan(name, realName, age) {
            this.name = name;
            this.realName = realName;
            this.age = age;
        }
        Mutan.prototype.mutanPower = function (id) {
            return "".concat(this.name, " ").concat(this.realName);
        };
        return Mutan;
    }());
})();
(function () {
    var client = {
        name: 'Jesus',
        age: 43,
        address: {
            id: 125,
            zip: 'KY2 SUD',
            city: 'Ottawa',
        },
        getFullAddress: function (id) {
            return "Address: ".concat(this.address.id, ", ").concat(this.address.city, ", ").concat(this.address.zip);
        },
    };
    var client2 = {
        name: 'Melissa',
        age: 30,
        address: {
            id: 120,
            zip: 'K2S US2',
            city: 'Toronto',
        },
        getFullAddress: function (id) {
            return "Address: ".concat(this.address.id, ", ").concat(this.address.city, ", ").concat(this.address.zip);
        },
    };
})();
(function () {
    var addNumbersFunction;
    addNumbersFunction = function (a, b) {
        return 10;
    };
})();
//# sourceMappingURL=main.js.map
>>>>>>> interfaz
