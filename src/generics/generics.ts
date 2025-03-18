export const printObject = (arg: any) => {
	console.log(arg);
};

export function genericFunction<T>(args: T) {
	return args;
}

export const genericFunctionArrow = <T>(arg: T) => arg;
