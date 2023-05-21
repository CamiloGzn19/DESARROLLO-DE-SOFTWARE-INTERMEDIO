import { Accidente } from "./accidente.js";

export class Vehiculo {
  marca: string;
  modelo: string;
  color: string;
  ruedas: number;
  reportes: Accidente[];

  constructor(marca: string, modelo: string, color: string, ruedas: number) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.ruedas = ruedas;
    this.reportes = [];
  }
}
