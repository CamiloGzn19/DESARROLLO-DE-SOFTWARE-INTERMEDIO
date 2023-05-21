import { LicenciaConduccion } from "./licenciaConduccion.js";
import { Vehiculo } from "./vehiculo.js";

export class Persona {
  nombre: string;
  cedula: string;
  telefono: string;
  edad: number;
  licenciaConduccion: LicenciaConduccion;
  vehiculos: Vehiculo[];

  constructor(
    nombre: string,
    cedula: string,
    telefono: string,
    edad: number,
    licenciaConduccion: LicenciaConduccion
  ) {
    this.nombre = nombre;
    this.cedula = cedula;
    this.telefono = telefono;
    this.edad = edad;
    this.licenciaConduccion = licenciaConduccion;
    this.vehiculos = [];
  }
}
