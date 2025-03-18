import { getPoquemon } from './generics/get-pokemon';

getPoquemon(4)
	.then(console.log)
	.catch(console.log)
	.finally(() => console.log('Fin del poqemon'));
