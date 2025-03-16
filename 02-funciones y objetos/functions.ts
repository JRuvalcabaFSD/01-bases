(() => {
	const hero: string = 'Flash';

	function returName(): String {
		return hero;
	}

	const activateBatiSignal = (): String => {
		return 'Batiseñal acticvada';
	};

	console.log(typeof activateBatiSignal);
	const heroName = returName();
})();
