(() => {
	// const number: (string | number | boolean)[] = [1, 2, 3, 4, 5, '6', 7, 8, 9, 10];
	const number: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	console.table({ number });

	const villan = ['Omega Rojo', 'Dormamu', 'Duende verde'];
	villan.forEach((v) => console.log(v.toLocaleUpperCase()));
})();
