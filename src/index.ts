import { getPoquemon } from './generics/get-pokemon';

getPoquemon(4)
	.then((pokemon) => console.log(pokemon.sprites.front_default))
	.catch(console.log)
	.finally(() => console.log('Fin del poqemon'));
