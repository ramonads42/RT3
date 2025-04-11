const { Somador, Subtrador, Multiplicador, Divisor } = require('modulo');
const somador = new Somador();
const subtrador = new Subtrador();
const multiplicador = new Multiplicador();
const divisor = new Divisor();

const a = 10;
const b = 5;

console.log(`Soma: ${a} + ${b} = ${somador.calcular(a, b)}`);
console.log(`Subtração: ${a} - ${b} = ${subtrador.calcular(a, b)}`);
console.log(`Multiplicação: ${a} * ${b} = ${multiplicador.calcular(a, b)}`);
console.log(`Divisão: ${a} / ${b} = ${divisor.calcular(a, b)}`);