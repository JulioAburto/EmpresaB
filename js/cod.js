function saludo() {
	alert("Hola Alumnos");
}

let persona = {
	nombre: "Juan",
	apellido: "Perez",
	email: "jperez@gmail.com",
	edad: 28,
	nombreCompleto: function () {
		return this.nombre + " " + this.apellido + " " + this.email + "" + this.edad;
	},
};

console.log(persona.nombreCompleto());

function suma(a, b) {
	let suma = a + b;
	return suma;
}
