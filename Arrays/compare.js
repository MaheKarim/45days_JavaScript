var arr = [
    { name: 'Mahe' },
    { name: 'XYZ' },
    { name: 'BBC' },
];
function compareName(a,b) { // Actually How This Arguments Are Working
    return a.name.localeCompare(b.name);
}
console.log(arr.sort(compareName))