 var numbers = [11, 2 ,5 , 1, 89];
function sumTwoSmallestNumbers(numbers) {
   // let a=numbers
    var check = numbers.sort((a,b)=>a-b) // Have TO Know Sort Func
    return check[0]+check[1];

} console.log(sumTwoSmallestNumbers(numbers))