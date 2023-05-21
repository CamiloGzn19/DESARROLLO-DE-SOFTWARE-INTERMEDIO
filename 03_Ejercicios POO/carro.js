import { Motorizado } from "./motorizado.js";
export class Carro extends Motorizado {
    constructor(marca, modelo, color, ruedas, placa, asientos) {
        super(marca, modelo, color, ruedas, placa);
        this.asientos = asientos;
    }
}
