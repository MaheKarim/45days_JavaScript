
let myMoney = [12, 34, 10, 5, 1];
let yourMoney = [3, 5, 8, 19];

let combined = myMoney.concat(yourMoney);
console.log(combined)

function sortTheArray(combined) {
    let a = combined.sort((a,b)=>a-b)
    return a[0]+a[1];
}
let finalResult = sortTheArray(combined)
console.log(finalResult);