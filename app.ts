//! Error 2 - Nombres de tipos en Mayusculas
// Objetos

type superVehicles = {
	carroceria: string;
	modelo: string;
	antibalas: boolean;
	pasajeros: number;
	disparar?: () => void;
};

const batimovil: superVehicles = {
	carroceria: 'Negra',
	modelo: '6x6',
	antibalas: true,
	pasajeros: 4,
};

const bumblebee: superVehicles = {
	carroceria: 'Amarillo con negro',
	modelo: '4x2',
	antibalas: true,
	pasajeros: 4,
	disparar() {
		// El metodo disparar es opcional
		console.log('Disparando');
	},
};

// Villanos debe de ser un arreglo de objetos personalizados
type hero = {
	nombre: string;
	// edad: number | undefined;
	edad?: number;
	mutante: boolean;
};

const villanos: hero[] = [
	{
		nombre: 'Lex Luthor',
		edad: 54,
		mutante: false,
	},
	{
		nombre: 'Erik Magnus Lehnsherr',
		edad: 49,
		mutante: true,
	},
	{
		nombre: 'James Logan',
		edad: undefined,
		mutante: true,
	},
];

// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis
type superLeader = {
	poder: string;
	estatura: number;
};

type villianTeem = {
	lider: boolean;
	miembros: string[];
};

//! Error 1 - no puse el tipo
const charles: superLeader = {
	poder: 'psiquico',
	estatura: 1.78,
};
console.log('Pasa por aqui');
const apocalipsis: villianTeem = {
	lider: true,
	miembros: ['Magneto', 'Tormenta', 'Psylocke', 'Angel'],
};

console.log({ apocalipsis });

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique: superLeader | villianTeem;

mystique = charles;
mystique = apocalipsis;
