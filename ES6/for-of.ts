(() => {
	type Avenger = {
		nombre: string;
		weapon: string;
	};

	const ironman: Avenger = {
		nombre: 'Tony Stark',
		weapon: 'Armorsuit',
	};

	const capAmerica: Avenger = {
		nombre: 'Steve Rogers',
		weapon: 'Shield',
	};

	const thor: Avenger = {
		nombre: 'thor',
		weapon: 'Mjolnir',
	};

	const avengers: Avenger[] = [ironman, thor, capAmerica];

	for (const avenger of avengers) {
		console.log(avenger.nombre, avenger.weapon);
	}
})();
