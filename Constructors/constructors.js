/***[ Warm Up ]****/
const dog = {
    name: "Bella",
    breed: "Pug",
    birthday: new Date(),

    speak(sound){
        console.log(sound);
    },

    setDate(birthday){
        this.birthday = new Date(birthday);
    }
}

dog.speak("woof woof");

// var d = new Date();
// console.log(d);
// d = new Date('2018-05-01');
// console.log(d);

// aryMonth = ['Jan','Feb','March','April','May','June','July','Aug','Sep','Oct','Nov','Dec'];
// console.log(aryMonth[dog.birthday.getMonth()]);

// dog.setDate('2018-01-17');

// console.log(dog.birthday);

/****[ Constructor Functions ]*****/
function order(item, qty, price, purchaseDate){
    this.orderItem = item;
    this.orderQty = qty;
    this.orderPrice = price;
    this.orderDate = new Date(purchaseDate);

    this.displayOrder = function(){
        var subTotal = this.orderQty * this.orderPrice;
        return `${this.orderItem} and total is ${subTotal}`;
    }

    this.setQty = function(theQty){
        this.orderQty = theQty;
    }
}

const order1 = new order('DVD', 1, 10.99, Date.now());
console.log(order1);

for(items in order1){
    //console.log(items);
    console.log(order1[items]);
}

console.log(order1.displayOrder());

order1.setQty(5);

console.log(order1.displayOrder());

const order2 = new order('PC', 1, 1499.99, Date.now());
console.log(order2.displayOrder());

const order3 = new order(dog, 1, 100.00, Date.now());

console.log(order3.orderItem.name);

