import axios from 'axios';

export const getPoquemon = async (id: number) => {
	const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
	console.log(resp);

	return 1;
};
