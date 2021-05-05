
 /* Need To Learn :
  * Array Declaration - 43v
  * Array Traversing - 44v
  * Insert Remove & Replace
  * Search Value in Array
  * Multidimensional Array
  * Reverse an Array
  * Array Methods
  */

 const arr = [1, 2, 3, 4, 5];
 console.log(arr);

 // Array Length
 console.log(arr.length);

 // Array Indexing
 console.log(arr[3]);

 // Add in Array
 //arr[5] = 6 ;
 // console.log(arr);

 // Update in Array
 arr[0] = '0';
 console.log(arr);

 // Traverse an Array && Increase Array Value
 for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + 2 ;
     console.log(arr[i]);
 }

 // Print even number in array
 for (var i = 0; i < arr.length ; i++) {
    if(arr[i] % 2 === 0 ) {
        console.log(arr[i])
    }
 }
