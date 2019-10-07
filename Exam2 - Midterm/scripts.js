/****[ READ ME ]*************
 * NAME: Dylan Buehler
 * DATE CREATED: 10/7/2019
 * FILENAME: scrips.js
 * PROJECT: Exam2 - Midterm
 ****************************/

 //Create a click event for the stoplight
 document.getElementById('stoplight').addEventListener('click', function(){
    //change the image to a greenlight
    document.getElementById('stoplight').src = "greenlight.png";

    document.getElementById('racer1').style.left = "0px";
    document.getElementById('racer2').style.left = "0px";

    //Create a timer to cause the racers to move
    var theTimer = setInterval(function(){
        MoveRacers(theTimer);
    }, 1000);

 })//End stoplight click event

 function MoveRacers(timer){
    //move amount in pixels
    var moveAmt1 = Math.floor(Math.random() * 150) + 1;
    var moveAmt2 = Math.floor(Math.random() * 150) + 1;

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
    CheckWin(racer1, racer2, timer);
 }

 function CheckWin(racer1, racer2, timer){
    //Shorten the typing
    var one = racer1.style.left;
    var two = racer2.style.left;

    console.log(`Racer1: ${one}`);
    console.log(`Racer2: ${two}`);

    //check if racer 1 wins
    if(parseInt(one) > parseInt(two) && parseInt(one) >= 1000){
        document.getElementById('display').innerHTML = 
            "<h1>The Grey Heli Wins</h1>";
            clearInterval(timer);
    }

    //check if racer 2 wins
    if(parseInt(two) > parseInt(one) && parseInt(two) >= 1000){
        document.getElementById('display').innerHTML = 
            "<h1>The Green Heli Wins</h1>";
            clearInterval(timer);
    }
 }