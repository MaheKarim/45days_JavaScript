var arr = [
    { name: 'Tarzan' },
    { name: 'MaheKar' },
    { name: 'Ari' },
];
function compareName(a,b) {
    return a.name.localeCompare(b.name);
}
console.log(arr.sort(compareName))