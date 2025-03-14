"use strict";
(() => {
    class Avenger {
        static getAvgAge() {
            return this.name;
        }
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    Avenger.avgAge = 35;
    const antMan = new Avenger('Antman', 'Capitan', 'Scott Lang');
    console.log(antMan);
})();
//# sourceMappingURL=main.js.map