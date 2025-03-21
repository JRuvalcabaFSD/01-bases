(() => {
	class Apocalipsis {
		static instance: Apocalipsis;

		private constructor(public name: string) {}

		static callApocalipsis(): Apocalipsis {
			if (!Apocalipsis.instance) {
				Apocalipsis.instance = new Apocalipsis('Soy apocalipsis el uinico');
			}

			return Apocalipsis.instance;
		}

		changeMame(newName: string): void {
			this.name = newName;
		}
	}

	// const apocalipsis = new Apocalipsis('Soy Apocalipsis ...el unico');
	// const apocalipsis2 = new Apocalipsis('Soy Apocalipsis ...el unico');
	// const apocalipsis3 = new Apocalipsis('Soy Apocalipsis ...el unico');

	const apocalipsis = Apocalipsis.callApocalipsis();
	const apocalipsis2 = Apocalipsis.callApocalipsis();
	const apocalipsis3 = Apocalipsis.callApocalipsis();

	apocalipsis.changeMame('Xavier');

	console.log(apocalipsis, apocalipsis2, apocalipsis3);
})();
