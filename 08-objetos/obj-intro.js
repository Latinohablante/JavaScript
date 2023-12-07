const persona = {
    nombre: 'Dani',
    edad: 30,
    esTrabajador: True,
    familia: ["Miguel", "Maria"],
    direccion: {
        calle: 'Calle de la piruleta',
        numero: 13,
        ciudad: 'Barcelona'
    },
    caminar: function() {
        console.log('Estoy caminando');
    }
};

console.log(persona);
console.log(persona.nombre);
persona.caminar();

persona.nombre = "Daniela";
console.log(persona.nombre);
persona.caminar();

const cadPersona = JSON.stringify(persona);
console.log(cadPersona);

const objPersona = JSON.parse(cadPersona);
console.log(objPersona)