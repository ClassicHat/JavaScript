/****[ READ ME ]********************
 * NAME: Dylan Buehler
 * DATE: 9/5/2019
 * FILENAME: scrips.js
 * CLASS: CIS-131-102
 ***********************************/

/****[ DisplayInfo ]****************
 * EXPECTS: Nothing
 * RETURNS: Nothing
 * TASKS: Using information gathered from the form
 *  text box inputs, display the entered information
 *  back to the user on the webpage.
 ***********************************/ 
function displayInfo(){
    // Variables
    var theFName = document.getElementById("theFirstName").value;
    var theLName = document.getElementById("theLastName").value;
    var thePrefCon = document.getElementById("thePrefCon").value;

    //Get the ShowInput div and display the users answers
    document.getElementById("showInput").innerHTML =
        "<p>First Name: " + theFName +"</p>" +
        "<p>Last Name: " + theLName + "</p>" +
        "<p>Prefered Contact: " + thePrefCon + "</p>";
}//End DisplayInfo function