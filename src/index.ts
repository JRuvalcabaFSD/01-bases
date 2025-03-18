import { Pokemon } from "./decorators/pokemon";

const charmander = new Pokemon("Charmander");

(Pokemon.prototype as any).customName="Pickachu"

console.log(charmander);
