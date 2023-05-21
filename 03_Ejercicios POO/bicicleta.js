"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bicicleta = void 0;
const vehiculo_js_1 = require("./vehiculo.js");
class Bicicleta extends vehiculo_js_1.Vehiculo {
    constructor(marca, modelo, color, ruedas) {
        super(marca, modelo, color, ruedas);
        this.tipo = "urbana";
        this.luces = false;
    }
}
exports.Bicicleta = Bicicleta;
