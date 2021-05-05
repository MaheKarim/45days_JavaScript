// Define a Object
const productInfoObj = {
    productName: 'Potato',
    productPrice: 30, 
    productQuantity: 12,
    productIsAvailable: true
}

/* Print Object Value
* console.log(productInfoObj['productName']);
* console.log(productInfoObj.productName); // Dot Notation
*/

// Print With Template String Help
console.log(`
    Product Name- ${productInfoObj.productName} Product Price- ${productInfoObj.productPrice} Product Quantity- ${productInfoObj.productQuantity} Product Availability- ${productInfoObj.productIsAvailable}
   `);
   

  