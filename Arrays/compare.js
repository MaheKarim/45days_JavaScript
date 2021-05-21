var arr = [
    { name: 'Mahe' },
    { name: 'XYZ' },
    { name: 'BBC' },
];

var checkMyObj = [
    {   x: 23,
        y: 34
    },
    {
        x:16,
        y: 88
    }];
console.log(checkMyObj);
checkMyObj.sort();
console.log(checkMyObj)



function compareName(a,b) { // Actually How This Arguments Are Working
    return a.name.localeCompare(b.name);
}
console.log(arr.sort(compareName))