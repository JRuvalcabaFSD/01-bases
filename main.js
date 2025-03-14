"use strict";
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
    Avenger.avgAge = 35;
    const antMan = new Avenger('Antman', 'Capitan', 'Scott Lang');
    console.log(antMan);
})();
//# sourceMappingURL=main.js.map