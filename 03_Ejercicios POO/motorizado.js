import { Vehiculo } from "./vehiculo.js";
export class Motorizado extends Vehiculo {
    constructor(marca, modelo, color, ruedas, placa) {
        super(marca, modelo, color, ruedas);
        this.placa = placa;
    }
}
