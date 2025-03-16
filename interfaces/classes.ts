(() => {
	interface Xman {
		name: string;
		realName: string;
		mutanPower(id: number): string;
	}

	interface Human {
		age: number;
	}

	class Mutan implements Xman, Human {
		constructor(public name: string, public realName: string, public age: number) {}

		mutanPower(id: number): string {
			return `${this.name} ${this.realName}`;
		}
	}
})();
