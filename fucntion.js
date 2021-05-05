 
 // Define a Object
const productInfoObj = {
    productName: 'Potato',
    productPrice: 30, 
    productQuantity: 12,
    productIsAvailable: true
}

function showProductInfo()
{
 console.log(`
 Product Name- ${productInfoObj.productName} Product Price- ${productInfoObj.productPrice} Product Quantity- ${productInfoObj.productQuantity} Product Availability- ${productInfoObj.productIsAvailable}
`);
}