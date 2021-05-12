function countsElements(arr) {
    var elemCount = 0 ;
    arr.forEach(function () {
        elemCount++;
    });
    return elemCount;
}
countsElements(['a', 'b']);

console.log(countsElements())