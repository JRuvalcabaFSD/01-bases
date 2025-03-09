// El tipo `string` se utiliza para representar secuencias de caracteres (cadenas de texto). Es utilizado en
// todo tipo de programación para manejar y manipular texto, como nombres, descripciones, mensajes, etc.
//
// Casos de uso comunes:
// 1. **Texto en la interfaz de usuario**: Como mensajes de bienvenida, errores o cualquier otra información visible.
// 2. **Entradas de usuario**: Para recoger datos como nombres, correos electrónicos o contraseñas.
// 3. **Concatenación y manipulación de texto**: Como formar direcciones de correo o URLs dinámicas.

(() => {
	const batman: string = 'Batman';
	const linternVerde: string = "Linterna's Verde";
	const volcanNegro: string = `Héroe: Volcan Negro`;
	const abc = 123;

	console.log(`I'm ${batman}`);

	console.log(batman.toUpperCase());
	console.log(batman[10]?.toLocaleUpperCase() || 'No esta presente');
})();
