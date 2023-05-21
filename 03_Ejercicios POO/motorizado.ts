import { Vehiculo } from "./vehiculo";

export class Motorizado extends Vehiculo {
  placa: string;

  constructor(marca: string, modelo: string, color: string, ruedas: number, placa: string) {
    super(marca, modelo, color, ruedas);
    this.placa = placa;
  }
}
