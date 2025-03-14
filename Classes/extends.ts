(() => {
	class Avenger {
		constructor(public name: string, public realName: string) {
			console.log('Contructor Avenger llamado!');
		}

		// private getFullName(): string {
		protected getFullName(): string {
			return `${this.name} ${this.realName}`;
		}
	}

	class Xmen extends Avenger {
		constructor(name: string, realName: string, public isMutan: boolean) {
			super(name, realName);
			console.log('Constructor Xmen llamado!');
		}

		getFullNameDesdeXmen() {
			console.log(super.getFullName());
		}
	}

	const wolverine = new Xmen('Wolverine', 'logan', true);
	console.log(wolverine);
	wolverine.getFullNameDesdeXmen();
})();
