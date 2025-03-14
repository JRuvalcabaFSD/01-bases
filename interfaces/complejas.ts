(() => {
	interface Client {
		name: string;
		age?: number;
		address: Address;
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
	};

	const client2: Client = {
		name: 'Melissa',
		age: 30,
		address: {
			id: 120,
			zip: 'K2S US2',
			city: 'Toronto',
		},
	};
})();
