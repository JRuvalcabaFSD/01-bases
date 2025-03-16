'use strict';
(() => {
	class Mutante {
		constructor(name, realName) {
			this.name = name;
			this.realName = realName;
		}
	}
	class Xmen extends Mutante {
		salvarmUNDO() {
			return 'Mundo a salvo';
		}
	}
	class Villan extends Mutante {
		conquistarMundo() {
			return 'Mundo conquistado';
		}
	}
	const wolverine = new Xmen('Wolvering', 'Logan');
	const magneto = new Villan('magneto', 'Magnus');
	const printName = (character) => {
		console.log(character.realName);
	};
})();
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
})();
(() => {
	class Avenger {
		constructor(name, realName) {
			this.name = name;
			this.realName = realName;
		}
		getFullName() {
			return `${this.name} ${this.realName}`;
		}
	}
	class Xmen extends Avenger {
		constructor(name, realName, isMutan) {
			super(name, realName);
			this.isMutan = isMutan;
		}
		get fullName() {
			return `${this.name} - ${this.realName}`;
		}
		set fullName(name) {
			if (name.length < 3) {
				throw new Error('El nombre debe ser mayor de 3 letras');
			}
			this.name = name;
		}
		getFullNameDesdeXmen() {
			console.log(super.getFullName());
		}
	}
	const wolverine = new Xmen('Wolverine', 'logan', true);
	wolverine.fullName = 'Jesus';
})();
(() => {
	class Apocalipsis {
		constructor(name) {
			this.name = name;
		}
		static callApocalipsis() {
			if (!Apocalipsis.instance) {
				Apocalipsis.instance = new Apocalipsis('Soy apocalipsis el uinico');
			}
			return Apocalipsis.instance;
		}
		changeMame(newName) {
			this.name = newName;
		}
	}
	const apocalipsis = Apocalipsis.callApocalipsis();
	const apocalipsis2 = Apocalipsis.callApocalipsis();
	const apocalipsis3 = Apocalipsis.callApocalipsis();
	apocalipsis.changeMame('Xavier');
	console.log(apocalipsis, apocalipsis2, apocalipsis3);
})();
//# sourceMappingURL=main.js.map
