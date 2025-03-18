(() => {
	const addNumbers = (a: number, b: number): number => a + b;
	const greet = (nombre: string): string => `Hola: ${nombre}`;
	const saveTheWorld = () => `El mundo esta salvado!`;

	let myfunction: () => string;

	//* myfunction = 10;
	//* console.log(myfunction);

	//* myfunction = addNumbers;
	//* console.log(myfunction(1, 2));

	//? myfunction = greet;
	//? console.log(myfunction('Jesus'));

	myfunction = saveTheWorld;
	console.log(myfunction());
})();
