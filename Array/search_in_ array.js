

 const arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];
 const find = 2 ;
 const isFound = false ;

 for (const i = 0; i < arr.length; i++ ) {
  if (arr[i] === find ) {
     console.log('Data Found at Index ' + i );
     isFound = true ;
      break;
  }
 }
 if (!isFound) {
     console.log( 'Data Not Found');
 }