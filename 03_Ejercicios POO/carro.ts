import { Motorizado } from "./motorizado";

export class Carro extends Motorizado {
  asientos: number;

  constructor(marca: string, modelo: string, color: string, ruedas: number, placa: string) {
    super(marca, modelo, color, ruedas, placa);
    this.asientos = 0;
  }
}
