var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var idFuncionario = parseFloat(lines.shift());
var qtdHorastrabalhadas = parseFloat(lines.shift());
var valorHora = parseFloat(lines.shift());

var salary = qtdHorastrabalhadas * valorHora ;
console.log('NUMBER = ' + idFuncionario);
console.log('SALARAY = U$ ' + salary.toFixed(2));


 // Practice in C Programming
 
 