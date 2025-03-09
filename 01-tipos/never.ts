// El tipo `never` en TypeScript representa valores que nunca ocurren. Se usa en situaciones donde
// una función nunca debería retornar, como cuando lanza una excepción o entra en un bucle infinito.
//
// Casos de uso comunes:
// 1. **Lanzamiento de errores**: Funciones que siempre lanzan una excepción y no devuelven un valor.
// 2. **Bucle infinito**: Funciones que entran en un ciclo sin fin, como un servidor que siempre está escuchando.
// 3. **Definir casos en un switch**: En un `switch` o estructura similar donde se asegura que no haya valores no manejados.

(() => {
	const error = (message: string): never => {
		throw new Error(message);
	};

	error('Auxilio');
})();
