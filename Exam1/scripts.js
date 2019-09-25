/****[ READ ME]*********************
 * Name: Dylan Buehler
 * Date: 9/25/2019
 * Filename: scripts.js
 * Section: CIS-131-102
 ***********************************/

/****[ Fill Qty ]********************
 * Expects: Nothing
 * Returns: Nothing
 * Tasks: Get the select box element,
 *  use that element to fill with nubers
 *  using a loop through 1-10.
 ************************************/

//Grab the select box by its id
var theQty = document.getElementById('pizzaQty');

//Fill the select box with values
for(var i = 1; i <= 10; i++){
    theQty.innerHTML += `<option value=${i}>${i}</option>`;
}//End the for loop

/****[ End Fill Qty ]****************/

/****[ Fill Pizza Options ]**********
 * Expects: Nothing
 * Returns: Nothing
 * Tasks: Get the select box element,
 *  use that element to fill with pizza
 *  options from an array.
 ************************************/

//Create an array of pizza options
var pizzaOptions = ['Cheese', 'Pepperoni', 'Sausage', 'DoubleCheese', 'ItalianSausage', 'BlackOlive', 'Salami'];

//Grab the select box by its id
var theOption = document.getElementById('pizzaOptions');

//Fill the select box with values
pizzaOptions.forEach(function(pizzaOption){
    theOption.innerHTML += `<option value=${pizzaOption}>${pizzaOption}</option>`;
})//End the foreach loop

/****[ End Fill Pizza Options ]******/

//Create an event listener for the place order button
document.getElementById('placeOrder').addEventListener('click', function(){
    if(ValidateForm() == true)
    {
        Output();
    }
})//End Event Listener

function ValidateForm(){
    //Variables
    var isValid = true;
    var theFrm = document.getElementById('theForm');
    var defColor = "white";
    var errColor = "red";

    //Set background colors to default
    theFrm.name.style.backgroundColor = defColor;
    theFrm.phoneNum.style.backgroundColor = defColor;

    //Regex for the users name
    var nameRegex = /[A-Za-zs]+/
    if(nameRegex.test(theFrm.name.value) == false){
        theFrm.name.style.backgroundColor = errColor;
        isValid = false;
    }//End if

    //Regex for the users phone number
    var phoneRegex = /\d{3}[-.]\d{3}[-.]\d{4}/;
    if(phoneRegex.test(theFrm.phoneNum.value) == false){
        theFrm.phoneNum.style.backgroundColor = errColor;
        isValid = false;
    }//End if

    return isValid;
}//End ValidateForm

function Output(){
    //Variables
    var TAXRATE = 0.076;

    //Get all elements of the form
    var theFrm = document.getElementById('theForm');

    //Calculate the subtotal
    var subTotal = theFrm.pizzaQty.value * 10; //10 being the price for each pizza before tax

    //Calculate the final total with tax
    var finalTotal = subTotal + (subTotal * TAXRATE);

    //Get the output div id
    var theOutput = document.getElementById('output');

    //Print the values back to the user
    theOutput.innerHTML = `<p><b>Name:</b> ${theFrm.name.value}</p>
                            <p><b>Phone:</b> ${theFrm.phoneNum.value}</p>
                            <p><b>Number Of Pizzas:</b> ${theFrm.pizzaQty.value}</p>
                            <p><b>Type Of Pizza:</b> ${theFrm.pizzaOptions.value}</p>
                            <p><b>Subtotal:</b> $${subTotal}</p>
                            <p><b>Taxrate:</b> ${TAXRATE}</p>
                            <p><b>Final Total:</b> $${finalTotal}</p>`
}

