
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var idEmployee = lines.shift();
var workedHours = lines.shift();
var receivedHour = lines.shift();

var salary = workedHours * receivedHour ;
console.log("NUMBER = " + idEmployee);
console.log("SALARAY = U$ " + salary.toFixed(2));