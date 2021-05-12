
let valueOfArrayNew = [
    {
        x: 33,
        y: 10
    },
    {
        x: 77,
        y: 80
    }
];
function compareElements(a, b)
{
    return b.y - a.y ;
}
console.log(valueOfArrayNew)
valueOfArrayNew.sort();
console.log(valueOfArrayNew)

valueOfArrayNew.sort(compareElements)
console.log(valueOfArrayNew)



