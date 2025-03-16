(() => {
	type Avengers = {
		nick: string;
		ironman: string;
		vision: string;
		activos: boolean;
		poder: number;
	};

	const avengers: Avengers = {
		nick: 'Samuel L. Jackons',
		ironman: 'Robert Downey Jr.',
		vision: 'Paul Bettany',
		activos: true,
		poder: 1500.128456,
	};

	// const { poder, vision } = avengers;
	// console.log(poder.toFixed(2), vision.toUpperCase());

	const printAventer = ({ ironman, ...resto }: Avengers) => {
		console.log(ironman, resto);
	};

	// printAventer(avengers);

	const avengersArr: [string, boolean, number] = ['Cap. America', true, 150.15];

	const [cap, ironman, seriaunnumero] = avengersArr;
	// console.log({ ironman, cap });
})();
