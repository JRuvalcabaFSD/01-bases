(() => {
	interface Client {
		name: string;
		age?: number;
		address: Address;
		getFullAddress(id: string): string;
	}

	interface Address {
		id: number;
		zip: string;
		city: string;
	}

	const client: Client = {
		name: 'Jesus',
		age: 43,
		address: {
			id: 125,
			zip: 'KY2 SUD',
			city: 'Ottawa',
		},
		getFullAddress(id: string) {
			return `Address: ${this.address.id}, ${this.address.city}, ${this.address.zip}`;
		},
	};

	const client2: Client = {
		name: 'Melissa',
		age: 30,
		address: {
			id: 120,
			zip: 'K2S US2',
			city: 'Toronto',
		},
		getFullAddress(id: string) {
			return `Address: ${this.address.id}, ${this.address.city}, ${this.address.zip}`;
		},
	};
})();
