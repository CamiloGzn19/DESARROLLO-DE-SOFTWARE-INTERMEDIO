import { Motorizado } from "./motorizado.js";
export class Motocicleta extends Motorizado {
    constructor(marca, modelo, color, ruedas, placa, cilindraje) {
        super(marca, modelo, color, ruedas, placa);
        this.cilindraje = cilindraje;
    }
}
