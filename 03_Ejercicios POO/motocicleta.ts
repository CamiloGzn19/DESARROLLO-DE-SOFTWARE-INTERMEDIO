import { Motorizado } from "./motorizado";

export class Motocicleta extends Motorizado {
  cilindraje: number;

  constructor(marca: string, modelo: string, color: string, ruedas: number, placa: string) {
    super(marca, modelo, color, ruedas, placa);
    this.cilindraje = 0;
  }
}
