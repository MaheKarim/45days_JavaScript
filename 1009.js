var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var firstName = lines.shift();
var salary = lines.shift();
var soldValue = lines.shift();

var comission = soldValue * 0.15;

var totalSalary = salary + comission ;

console.log(`TOTAL = R$ ${totalSalary.toFixed(2)}`);