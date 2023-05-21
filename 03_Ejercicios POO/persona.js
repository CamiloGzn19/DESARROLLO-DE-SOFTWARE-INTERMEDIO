export class Persona {
    constructor(nombre, cedula, telefono, edad, licenciaConduccion) {
        this.nombre = nombre;
        this.cedula = cedula;
        this.telefono = telefono;
        this.edad = edad;
        this.licenciaConduccion = licenciaConduccion;
        this.vehiculos = [];
    }
}
