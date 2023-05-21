import { Motorizado } from "./motorizado.js";

export class Motocicleta extends Motorizado {
  cilindraje: number;

  constructor(marca: string, modelo: string, color: string, ruedas: number, placa: string, cilindraje: number) {
    super(marca, modelo, color, ruedas, placa);
    this.cilindraje = cilindraje;
  }
}
