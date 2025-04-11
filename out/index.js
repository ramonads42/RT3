"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Divisor = exports.Multiplicador = exports.Subtrador = exports.Somador = void 0;
var Somador = /** @class */ (function () {
    function Somador() {
        this.calcular = function (numero1, numero2) {
            return numero1 + numero2;
        };
    }
    return Somador;
}());
exports.Somador = Somador;
var Subtrador = /** @class */ (function () {
    function Subtrador() {
        this.calcular = function (numero1, numero2) {
            return numero1 - numero2;
        };
    }
    return Subtrador;
}());
exports.Subtrador = Subtrador;
var Multiplicador = /** @class */ (function () {
    function Multiplicador() {
        this.calcular = function (numero1, numero2) {
            return numero1 * numero2;
        };
    }
    return Multiplicador;
}());
exports.Multiplicador = Multiplicador;
var Divisor = /** @class */ (function () {
    function Divisor() {
        this.calcular = function (numero1, numero2) {
            if (numero2 === 0) {
                throw new Error("Não é possível dividir por zero.");
            }
            return numero1 / numero2;
        };
    }
    return Divisor;
}());
exports.Divisor = Divisor;
