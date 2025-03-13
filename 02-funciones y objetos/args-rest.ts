(() => {
	const fullName = (firstName: string, ...restArgs: string[]): string => {
		return `${firstName} ${restArgs.join(' ')}`;
	};
	const superman = fullName('Clarck', 'Joseph');

	console.log({ superman });
})();
