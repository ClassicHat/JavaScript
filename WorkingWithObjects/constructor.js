/****[ Order Constructor ]*********
 * EXPECTS: an item name, the amount of the item
 *  to buy and the price of the item.
 * RETURNS: Nothing
 * TASKS: Create an instance of the Order
 **********************************/
function Order(item, qty, price){
    this.item = item;
    this.qty = qty;
    this.price = price;

    this.displayOrder = function(){
        var subTotal = this.price * this.qty;
        return `The item ${this.item} has a total of ${subTotal}`;
    }//End display order function
}//End Order Constructor

//Create an instance of the order class
const order1 = new Order('XBOX1X', 1, 199.99);

//Create an instance of the order class
const order2 = new Order('PS4PRO', 1, 299.99);

//Add the orders to the order array
var aryOrders = [order1, order2];

//Loop through the array of orders
for(var i = 0; i < aryOrders.length; i++){
    //console.log(aryOrders[i].displayOrder());
}//End for loop

/****[ Print Items]****************
 * EXPECTS: a click event
 * RETURNS: Nothing
 * TASKS: add the contents of the aryOrders
 *  to a formatted myList and then display
 *  on the index.html page.
 **********************************/
document.querySelector('h4').addEventListener('click', function(){
    var myList = "";
    //Loop through aryOrders and add it to myList with formatting
    for(var i = 0; i < aryOrders.length; i++){
        myList += `<li id=${i}>${aryOrders[i].item}</li>`
    }//End for loop

    //Add the contents of the myList to the innerHTML of the id orders
    document.getElementById('orders').innerHTML = myList;
})//End function

/****[ Display Item Info]************
 * EXPECTS: A list item to be clicked
 * RETURNS: Nothing
 * TASKS: wait for a click on a list item
 *  then call the display order function
 *  to display the items contents on the html page.
 ************************************/
document.getElementById('orders').addEventListener('click', function(el){
    //Display to the index.html page
    document.querySelector('h3').innerHTML = aryOrders[el.target.id].displayOrder();
})//End function