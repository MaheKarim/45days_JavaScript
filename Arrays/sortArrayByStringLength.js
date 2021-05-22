
var arr = ["A", "XY", "CHEC", "MNO", 'Telescope'];
//
// function sortByLength (array) {
//     // Return an array containing the same strings, ordered from shortest to longest
//     return [...array].sort((a,b) => a.length-b.length);
// };
// 1 Line Solution
let sortByLength = arr => arr.sort((a,b)=> a.length-b.length)
console.log(sortByLength(arr))

