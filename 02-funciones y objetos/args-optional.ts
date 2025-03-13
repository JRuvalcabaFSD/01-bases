(() => {
	const fullName = (firstName: string, Lastname?: string): string => {
		return `${firstName} ${Lastname || ''}`;
	};

	const name = fullName('Jesus');
	console.log({ name });
})();
