(() => {
	const fullName = (firstName: string, Lastname?: string, upper: boolean = false): string => {
		if (upper) return `${firstName} ${Lastname || ''}`.toUpperCase();
		return `${firstName} ${Lastname || ''}`;
	};

	const name = fullName('Jesus', 'Ruvalcaba', true);
	console.log({ name });
})();
