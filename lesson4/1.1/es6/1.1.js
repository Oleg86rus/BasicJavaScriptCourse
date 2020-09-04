"use strict"
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    make25PercentDiscount(){
        this.priceDiscount = this.price - (this.price * 25 / 100);
    };
}
const product1 = new Product("Товар 1", 100);
product1.make25PercentDiscount();
console.log(product1);