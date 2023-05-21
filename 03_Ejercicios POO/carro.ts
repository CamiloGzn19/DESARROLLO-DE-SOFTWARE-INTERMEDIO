import { Motorizado } from "./motorizado.js";

export class Carro extends Motorizado {
  asientos: number;

  constructor(marca: string, modelo: string, color: string, ruedas: number, placa: string, asientos: number) {
    super(marca, modelo, color, ruedas, placa);
    this.asientos = asientos;
  }
}
