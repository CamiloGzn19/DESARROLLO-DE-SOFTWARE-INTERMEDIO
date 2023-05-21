import { Vehiculo } from "./vehiculo.js";
export class Bicicleta extends Vehiculo {
    constructor(marca, modelo, color, ruedas, tipo, luces) {
        super(marca, modelo, color, ruedas);
        this.tipo = tipo;
        this.luces = luces;
    }
}
