import { Vehiculo } from "./vehiculo.js";

export class Bicicleta extends Vehiculo {
  tipo: "urbana" | "deportiva";
  luces: boolean;

  constructor(marca: string, modelo: string, color: string, ruedas: number) {
    super(marca, modelo, color, ruedas);
    this.tipo = "urbana";
    this.luces = false;
  }
}
