import { Vehiculo } from "./vehiculo";

export class Accidente {
  fecha: Date;
  descripcion: string;
  severidad: number;
  involucrados: Vehiculo;

  constructor(
    fecha: Date,
    descripcion: string,
    severidad: number,
    involucrados: Vehiculo
  ) {
    this.fecha = fecha;
    this.descripcion = descripcion;
    this.severidad = severidad;
    this.involucrados = involucrados;
  }
}
