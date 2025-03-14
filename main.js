"use strict";
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
//# sourceMappingURL=main.js.map