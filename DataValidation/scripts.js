// var myTimer = setInterval(runTimer, 3000);

// function runTimer(){
//     document.getElementById('theTimer').innerHTML = Math.ceil(Math.random() * 5);
// }

function valForm(frm){
    // alert(frm.userName.value);
    var isValid = true;

    if(frm.userName.value == ""){
        document.getElementById('err').innerHTML = 
            "Cannot be blank";

        frm.userName.style.backgroundColor = "pink";
        isValid = false;
    }

    // if(isValid)
    // {
    //     frm.submit();
    // }

    return isValid;
}

function printQuery(){
    var query = window.location.search.substring(1);
    var valPairs = query.split("&");

    for(var i = 0; i < valPairs.length; i++){
        var pair = valPairs[i].split("=");
        document.write(`${pair[0]} gets ${pair[1]}<br>`);
    }
}

//create the drop down for the quantity
document.getElementById('qty').innerHTML = createQty();

function createQty(){
    //variables
    var theString;

    for(var i = 0; i < 6; i++){
        theString += `<option value='${i}'>${i}</option>`;
    }
    
    return theString;
}

//Create the dropdown for the item to purchase
var itemArray = ['Toy Car', 'Toy Tank', 'Toy Train', 'Toy Boat', 'Toy House'];

document.getElementById('itemPurch').innerHTML = createItems();

function createItems(){
    //variables
    var theString;

    for(var i = 0; i < itemArray.length; i++)
    {
        theString += `<option value='${itemArray[i]}'>${itemArray[i]}</option>`;
    }

    return theString;
}
