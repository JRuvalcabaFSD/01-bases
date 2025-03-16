(() => {
	class Avenger {
		constructor(public name: string, public realName: string) {
			// console.log('Contructor Avenger llamado!');
		}

		// private getFullName(): string {
		protected getFullName(): string {
			return `${this.name} ${this.realName}`;
		}
	}

	class Xmen extends Avenger {
		constructor(name: string, realName: string, public isMutan: boolean) {
			super(name, realName);
			// console.log('Constructor Xmen llamado!');
		}

		get fullName(): string {
			return `${this.name} - ${this.realName}`;
		}

		set fullName(name: string) {
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
	// console.log(wolverine.fullName);
	wolverine.fullName = 'Jesus';
	// console.log(wolverine.fullName);
	// wolverine.getFullNameDesdeXmen();
})();
