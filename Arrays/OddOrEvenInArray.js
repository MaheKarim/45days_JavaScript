function oddOrEven(array) {
     return array.reduce((acculamator,currentValue)=>acculamator+currentValue,0)%2==0?`${'even'}`:`${'odd'}`
}

/*
 My Solve Start: Odd or Even in a Array
 */
 let arr = [0, -1, -5]
 let arisan = 0 ;
 for(var i = 0; i < arr.length; i++) {
     arisan += arr[i]
 }
if(arisan % 2 == 0 ){
    console.log('Even')
} else {
    console.log('Odd')
}

 console.log(arisan)
/*
 My Solve End: Odd or Even in a Array
 */