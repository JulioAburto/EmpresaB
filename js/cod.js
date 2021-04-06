function saludo() {
	alert("Hola Alumnos");
}

let persona = {
	nombre: "Juan",
	apellido: "Perez",
	email: "jperez@gmail.com",
	edad: 28,
	nombreCompleto: function () {
		return this.nombre + " "+  this.apellido;
	},
};

console.log(persona.nombreCompleto());