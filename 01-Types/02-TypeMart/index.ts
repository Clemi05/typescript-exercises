import products from "./products";

// Variables
const productName: string = "tote bag";
let shipping: number = 0;
const shippingAddress: string = "336-7281 454 W 22nd St New York, New York(NY), 10011";
let taxPercent: number;
let taxTotal: number;
let total: number;

const product = products.filter((product) => product.name === productName)[0];

if (product.preOrder === 'true') {
  console.log('An email will be send to you when your command is on the way.');
} else {
  console.log('Not on pre-order.');
}

if (Number(product.price) >= 25) {
  console.log(`Free shipping for the product: ${product.name}.`);
} else if (Number(product.price) < 25) {
  shipping = 5;
  console.log(`You have a shipping fee of ${shipping}$ for the product: ${product.name}.`);
}

if (shippingAddress.match("New York")) {
  taxPercent = 0.1;
  console.log(`Your tax percentage is at ${taxPercent * 100}%.`)
} else {
  taxPercent = 0.05;
  console.log(`Your tax percentage is at ${taxPercent * 100}%.`)
}

taxTotal = Number(product.price) * taxPercent;
total = Number(product.price) + taxTotal + shipping;

console.log(`Purchase Details`);
console.log(`----------------`);
console.log(`Product Name: ${product.name}`);
console.log(`Shipping Address: ${shippingAddress}`);
console.log(`----------------`);
console.log(`Price of the product: ${product.price}$`);
console.log(`Tax total: ${taxTotal}$`);
console.log(`Shipping fee: ${shipping}$`);
console.log(`Total of purchase: ${total}$`);
console.log(`----------------`);
