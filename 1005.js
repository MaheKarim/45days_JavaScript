// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
//var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
const lines = prompt('Digi').split(' ');

const A = Number(lines[0]);
const B = Number(lines[1]);
const C = Number(lines[2]);

const media = (A * 3.5 + B * 7.5 + C * 3.0)  / 14 ;

console.log(`MEDIA = ${media.toFixed(5)}`);