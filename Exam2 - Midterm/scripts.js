/****[ READ ME ]*************
 * NAME: Dylan Buehler
 * DATE CREATED: 10/7/2019
 * FILENAME: scripts.js
 * PROJECT: Exam2 - Midterm
 ****************************/

/****[ StopLight ]*****************
 * EXPECTS: The stoplight to be clicked
 * RETURNS: Nothing
 * TASKS: Manage the setup of the race,
 *  by calling nessisary functions.
 **********************************/
document.getElementById('stoplight').addEventListener('click', function(){
    //change the image to a greenlight
    document.getElementById('stoplight').src = "greenlight.png";

    //resets the location of the racers
    document.getElementById('racer1').style.left = "0px";
    document.getElementById('racer2').style.left = "0px";

    //Create arrays to hold the speed of the racers
    var racer1speedarray = [];
    var racer2speedarray = [];

    //Create a timer to cause the racers to move
    var theTimer = setInterval(function(){
        MoveRacers(theTimer, racer1speedarray, racer2speedarray);
    }, 1000);

})//End stoplight click event

/****[ MoveRacers ]********************
 * EXPECTS: The timer, and two arrays for speed
 * RETURNS: Nothing
 * TASKS: Using a random num gen move the racers
 *  toward their goal of 1000px
 **************************************/
function MoveRacers(timer, r1array, r2array){
    //move amount in pixels
    var moveAmt1 = Math.floor(Math.random() * 150) + 1;
    var moveAmt2 = Math.floor(Math.random() * 150) + 1;

    //calc the speed
    var racer1speed = GetAvgSpeed(moveAmt1, r1array);
    var racer2speed = GetAvgSpeed(moveAmt2, r2array);

    //Get the img elements for both racers
    var racer1 = document.getElementById('racer1');
    var racer2 = document.getElementById('racer2');

    //Get the values for the racers left style
    var leftNum1 = parseInt(racer1.style.left);
    var leftNum2 = parseInt(racer2.style.left);

    //Move Racer
    racer1.style.left = (leftNum1 + moveAmt1) + "px";
    racer2.style.left = (leftNum2 + moveAmt2) + "px";

    //Check for winner
    CheckWin(racer1, racer2, timer, racer1speed, racer2speed);
}

/****[ CheckWin ]******************
 * EXPECTS: The racer1 and 2 object elements,
 *  the timer, and the speed of racer1 and 2.
 * RETURNS: Nothing
 * TASKS: Check for a winner based on their goal
 *  of 1000px. Handle presentation of winner.
 **********************************/
function CheckWin(racer1, racer2, timer, r1Speed, r2Speed){
    //Shorten the typing
    var one = racer1.style.left;
    var two = racer2.style.left;

    //Left here for validation through the console
    console.log(`Racer1: ${one}`);
    console.log(`Racer2: ${two}`);

    //check if racer 1 wins
    if(parseInt(one) > parseInt(two) && parseInt(one) >= 1000){
        document.getElementById('display').innerHTML = 
            "<h1>The Grey Heli Wins</h1>";
            //stop the timer
            clearInterval(timer);

        //Add the winner to the display div
        document.getElementById('display').innerHTML +=
            `<img src='heli1.png' alt='racer 1' id='winner1'>
             <h1>Grey Racer Avg Speed: ${parseInt(r1Speed)}</h1>
             <h1>Green Racer Ave Speed: ${parseInt(r2Speed)}</h1>`

        //Remove the winner from the race track
        document.getElementById('divracer1').innerHTML = "";

        ResetRacer1(racer2);

    }//End if

    //check if racer 2 wins
    if(parseInt(two) > parseInt(one) && parseInt(two) >= 1000){
        document.getElementById('display').innerHTML = 
            "<h1>The Green Heli Wins</h1>";
            //stop the timer
            clearInterval(timer);

        //Add the winner to the display div
        document.getElementById('display').innerHTML +=
            `<img src='heli2.png' alt='racer 2' id='winner2'>
             <h1>Green Racer Avg Speed: ${parseInt(r2Speed)}</h1>
             <h1>Gray Racer Ave Speed: ${parseInt(r1Speed)}</h1>`

        //Remove the winner from the race track
        document.getElementById('divracer2').innerHTML = "";

        ResetRacer2(racer1);
    }//End if
}//End CheckWin

/****[ ResetRacer1 ]***************
 * EXPECTS: racer2 object element
 * RETURNS: Nothing
 * TASKS: Handle the reset of the web page
 *  for another race.
 **********************************/
function ResetRacer1(racer2){
    //Creates the click event for racer1 - (grey heli)
    document.getElementById('winner1').addEventListener('click', function(){
        //get the stoplight element id and set it to the red light
        document.getElementById('stoplight').src = "redlight.png";

        //reset the racers
        document.getElementById('divracer1').innerHTML = 
            "<img src='heli1.png' alt='racer 1' id='racer1'>";

        racer2.style.left = "0px";

        //Remove the winner info in the display div
        document.getElementById('display').innerHTML = "";
    })//End click event
}//End ResetRacer1

/****[ ResetRacer2 ]***************
 * EXPECTS: racer1 object element
 * RETURNS: Nothing
 * TASKS: Handle the reset of the web page
 *  for another race.
 **********************************/
function ResetRacer2(racer1){
    //Creates the click event for racer2 - (green heli)
    document.getElementById('winner2').addEventListener('click', function(){
        //get the stoplight element id and set it to the red light
        document.getElementById('stoplight').src = "redlight.png";

        //reset the racers
        document.getElementById('divracer2').innerHTML = 
            "<img src='heli2.png' alt='racer 2' id='racer2'>";

        racer1.style.left = "0px";

        //Remove the winner info in the display div
        document.getElementById('display').innerHTML = "";
    })//End Click event
}//End ResetRacer2

/****[ GetAvgSpeed ]****************
 * EXPECTS: The move amount and the speed array
 * RETURNS: The average speed
 * TASKS: Using the passed move speed calculate
 *  an average and return it.
 ***********************************/
function GetAvgSpeed(moveAmt, speedArray){
    //Add moveAmt to the array
    speedArray.push(moveAmt);

    //Calculate the average
    var count = 0;
    for(var i = 0; i < speedArray.length; i++){
        count += speedArray[i];
    }

    return count / speedArray.length;
}//End GetAvgSpeed