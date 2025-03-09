// El tipo `null` en TypeScript se utiliza para representar la ausencia explícita de un valor.
// Es asignado a una variable cuando se desea indicar que la variable no tiene un valor asignado en ese momento.
//
// Casos de uso comunes:
// 1. **Inicialización de variables**: Asignar `null` a una variable para indicar que aún no tiene un valor válido.
// 2. **Representar la ausencia de un objeto**: Usado en estructuras de datos o funciones para señalar que un valor no está presente.
// 3. **Respuestas vacías o nulas**: Para indicar que una función no tiene un valor útil para devolver, como cuando no se encuentra un resultado.

// El tipo `undefined` en TypeScript se utiliza para representar un valor que no ha sido inicializado.
// Es asignado automáticamente a las variables que se declaran pero no se les asigna un valor,
// o cuando una función no devuelve explícitamente un valor.
//
// Casos de uso comunes:
// 1. **Inicialización de variables sin valor**: Cuando una variable se declara pero aún no tiene un valor asignado.
// 2. **Parámetros opcionales**: Se usa para parámetros de función que no se proporcionan al llamarla, lo que indica que no se les ha asignado un valor.
// 3. **Funciones que no retornan un valor explícito**: Cuando una función no tiene una declar

(() => {
	let isActive: boolean | undefined = undefined;

	console.log(isActive);
})();
