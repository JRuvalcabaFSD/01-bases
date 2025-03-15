namespace Validations {
	export const validateText = (text: string): boolean => text.length > 3;
	const validateDate = (myDate: Date): boolean => !isNaN(myDate.valueOf());
}

console.log(Validations.validateText('Jesus'));
