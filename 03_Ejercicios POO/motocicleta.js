"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Motocicleta = void 0;
const motorizado_1 = require("./motorizado");
class Motocicleta extends motorizado_1.Motorizado {
    constructor(marca, modelo, color, ruedas, placa) {
        super(marca, modelo, color, ruedas, placa);
        this.cilindraje = 0;
    }
}
exports.Motocicleta = Motocicleta;
