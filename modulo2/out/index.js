var _a = require('modulo'), Somador = _a.Somador, Subtrador = _a.Subtrador, Multiplicador = _a.Multiplicador, Divisor = _a.Divisor;
var somador = new Somador();
var subtrador = new Subtrador();
var multiplicador = new Multiplicador();
var divisor = new Divisor();
var a = 10;
var b = 5;
console.log("Soma: ".concat(a, " + ").concat(b, " = ").concat(somador.calcular(a, b)));
console.log("Subtra\u00E7\u00E3o: ".concat(a, " - ").concat(b, " = ").concat(subtrador.calcular(a, b)));
console.log("Multiplica\u00E7\u00E3o: ".concat(a, " * ").concat(b, " = ").concat(multiplicador.calcular(a, b)));
console.log("Divis\u00E3o: ".concat(a, " / ").concat(b, " = ").concat(divisor.calcular(a, b)));
