


    var arr = [1, 2, 3, 5, 4 ,6 , 7, 8, 9]
    var anotherArr = [];

for (var i = 0; i < arr.length; i++){ // Read Every Element From arr[]
    anotherArr.push(arr[i] * arr[i]); // Push Arry To anotherArr as arr * arr
}
console.log(anotherArr) // Finally Publish Result

/*
 Now Solving it with Map()
 */
    // Calling Array From var arr[]
    function getSquarevalue(elem) {
        return elem * elem ;
    }
    var newArray = arr.map(getSquarevalue);
    console.log(newArray)