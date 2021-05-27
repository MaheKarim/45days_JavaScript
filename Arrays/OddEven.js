/*
        Minimal Solution:
            -> Make Sum Of Given Array Elements = 15 OK
            -> Check Array ? Even : Odd
            -> Console / Print
  */


  /*
     Standadrd Sol:
       -> Function > Method
   */
  function oddOrEven(arr) {
   return  arr.reduce((startValue, nextValue) => startValue+nextValue, 0) % 2 == 0 ? `${'Even'}`:`${'Odd'}`
  }



