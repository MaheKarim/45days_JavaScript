
const employeeObj = {
    employeNumber: 25,
    totalHour: 100,
    perHourSalaray: 5.50
}
 function totalCalculation(employeeObj) {
     var myAnswer = employeeObj.totalHour * employeeObj.perHourSalaray;
     console.log(`NUMBER = ${employeeObj.employeNumber}`)
     console.log(`SALARY = U$ ${myAnswer.toFixed(2)}`);
 }
 const functionResult = totalCalculation(employeeObj);

