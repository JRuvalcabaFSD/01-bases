(() => {
	const batman: string = 'Batman';
	const linternVerde: string = "Linterna's Verde";
	const volcanNegro: string = `Héroe: Volcan Negro`;
	const abc = 123;

	console.log(`I'm ${batman}`);

	console.log(batman.toUpperCase());
	console.log(batman[10]?.toLocaleUpperCase() || 'No esta presente');
})();
