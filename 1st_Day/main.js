//console.log(1+1);
//const, let , var
// const productName = 'potato';
// const productPrice = 30;
// const productQuantity = 3;
// const productIsAvailable = 'true';

// const productInfo = ['Potato', '30', '3', 'true']

 const productInfoObj = {
   productName: 'Potato',
   productPrice: 30 ,
   productQuantity: 3 ,
   productIsAvailable: true
 }
// Accessing Obj Property 
   console.log(productInfoObj['productName']);
   console.log(productInfoObj.productPrice)
console.log(`
   productName -
       ${productInfoObj.productName}
     productPrice- 
        ${productInfoObj.productPrice}
    quantity 
     ${productInfoObj.productQuantity}
    isAvailable  
     ${productInfoObj.productIsAvailable} 
     `);