"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
const motorizado_1 = require("./motorizado");
class Carro extends motorizado_1.Motorizado {
    constructor(marca, modelo, color, ruedas, placa) {
        super(marca, modelo, color, ruedas, placa);
        this.asientos = 0;
    }
}
exports.Carro = Carro;
