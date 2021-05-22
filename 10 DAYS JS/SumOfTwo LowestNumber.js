  // let numbers = [19, 5, 42, 2, 77]
function sumTwoSmallestNumbers(numbers) {
      // Code Start Here
   let a = numbers.sort((a,b)=>a-b)

    return a[0] + a[1];
    // 2 + 5 = 7
  } let finalOutput = sumTwoSmallestNumbers(numbers);
  console.log(finalOutput);