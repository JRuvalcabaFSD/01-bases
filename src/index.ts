import { genericFunctionArrow } from './generics/generics';
import { Hero } from './interfases/hero';
import { Villian } from './interfases/villan';

// console.log(genericFunctionArrow(3.1416).toFixed(2));
// console.log(genericFunctionArrow('Hola Mundo').toUpperCase());
// console.log(genericFunctionArrow(new Date()).getDate());
const deadpool = {
	name: 'Deadpool',
	realName: 'Wade Winston wilson',
	dangerLevel: 130,
};

console.log(genericFunctionArrow<Villian>(deadpool).daherLevel);
