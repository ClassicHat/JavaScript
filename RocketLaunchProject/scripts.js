/****[ README ]**********
 * Name: Dylan Buehler
 * Date: 10/22/2019
 * Filename: scripts.js
 ************************/

//Global Variables
var countdown;

//different get request links
var any5 = 'https://launchlibrary.net/1.4/launch?next=5';
var falcon5 = 'https://launchlibrary.net/1.4/launch?next=5&name=Falcon';
var launcherOne5 = 'https://launchlibrary.net/1.4/launch?next=5&name=LauncherOne';
var ariane5 = 'https://launchlibrary.net/1.4/launch?next=5&name=Ariane';

//Generate a http request object
var httpRequest = new XMLHttpRequest();

//Fill the page with the general information by default
window.addEventListener('load', function(){
        //Generate an http request
        httpRequest.open('get', any5);
        httpRequest.send(null);
        httpRequest.onreadystatechange = displayLaunches;

        countdown = this.setInterval(updateCountdown, 1000);
})//End Default load

//Create a click event for each of the links
document.getElementById('next5Launches').addEventListener('click', function(){
    //Generate an http request
    httpRequest.open('get', any5);
    httpRequest.send(null);
    httpRequest.onreadystatechange = displayLaunches;
})//End click event
document.getElementById('falcon').addEventListener('click', function(){
    //Generate an http request
    httpRequest.open('get', falcon5);
    httpRequest.send(null);
    httpRequest.onreadystatechange = displayLaunches;
})//End click event
document.getElementById('launcherOne').addEventListener('click', function(){
    //Generate an http request
    httpRequest.open('get', launcherOne5);
    httpRequest.send(null);
    httpRequest.onreadystatechange = displayLaunches;
})//End click event
document.getElementById('ariane').addEventListener('click', function(){
    //Generate an http request
    httpRequest.open('get', ariane5);
    httpRequest.send(null);
    httpRequest.onreadystatechange = displayLaunches;
})//End click event

function displayLaunches(){
    if(httpRequest.readyState == 4 && httpRequest.status == 200){
        //variable to hold the response
        var theLaunches = httpRequest.responseText;

        //variable to hold the JSON
        var jsObject = JSON.parse(theLaunches);
        console.log(jsObject);

        //Clear the div and establish a variable for later use
        var launchDiv = document.getElementById('launchDiv');
        launchDiv.innerHTML = "";

        for(var i = 0; i < 5; i++){
            //Create a container for each launch
            var sec = document.createElement('section');
            //Create a container for the name and date
            var nameDate = document.createElement('h3');

            //Creates the launch info and puts it in the nameDate holder
            nameDate.innerHTML = `Launch Name: ${jsObject.launches[i].name} ---- Launch Date: ${jsObject.launches[i].windowstart}`;

            //adds the launch info to the section
            sec.appendChild(nameDate);

            //adds the section to the div
            launchDiv.appendChild(sec);
        }//End for loop
    }//End if statement
}//End function

function updateCountdown(){
    var dateToday = new Date();
    var dateFrom = Date.UTC(dateToday.getFullYear(),
        dateToday.getMonth(), dateToday.getDate(),
        dateToday.getHours(), dateToday.getMinutes(),
        dateToday.getSeconds());

    //Get the date portion of the first launch
    //variable to hold the response
    var theLaunches = httpRequest.responseText;

    //variable to hold the JSON
    var jsObject = JSON.parse(theLaunches);
    console.log(jsObject);

    var dateObject = new Date(jsObject.launches[0].net);

    var dateTo = Date.UTC(dateObject.getFullYear(),
        dateObject.getMonth(), dateObject.getDate(),
        19, 0, 0); //all launches at 8:00 pm UTC

    //Days
    var daysUntill = Math.floor((dateTo - dateFrom) / 86400000);
    document.getElementById('countdown').innerHTML = 'Time Untill Launch - ' + daysUntill;

    //Hours
    var fractionalDay = (dateTo - dateFrom) % 86400000;
    var hoursUntill = Math.floor(fractionalDay / 3600000);
    if(hoursUntill < 10){
        hoursUntill = "0" + hoursUntill;
    }//End if
    document.getElementById('countdown').innerHTML += ':' + hoursUntill;

    //Minutes
    var fractionalHour = fractionalDay % 3600000;
    var minutesUntill = Math.floor(fractionalHour / 60000);
    if(minutesUntill < 10){
        minutesUntill = "0" + minutesUntill;
    }

    document.getElementById('countdown').innerHTML += ':' + minutesUntill;

    //Seconds
    var fractionalMinute = fractionalHour % 60000;
    var secondsUntill = Math.floor(fractionalMinute / 1000);
    if(secondsUntill < 10){
        secondsUntill = '0' + secondsUntill;
    }

    document.getElementById('countdown').innerHTML += ':' + secondsUntill;

    if(parseInt(daysUntill) < 0){
        document.getElementById('countdown').innerHTML = "Rocket Already Launched";
    }
}