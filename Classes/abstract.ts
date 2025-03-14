(() => {
	abstract class Mutante {
		constructor(public name: string, public realName: string) {}
	}

	class Xmen extends Mutante {
		salvarmUNDO(): string {
			return 'Mundo a salvo';
		}
	}
	class Villan extends Mutante {
		conquistarMundo(): string {
			return 'Mundo conquistado';
		}
	}

	const wolverine = new Xmen('Wolvering', 'Logan');
	const magneto = new Villan('magneto', 'Magnus');

	// console.log(wolverine.salvarmUNDO());
	// console.log(magneto.conquistarMundo());

	const printName = (character: Mutante) => {
		console.log(character.realName);
	};

	// printName(magneto);
})();
