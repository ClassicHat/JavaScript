//different get request links
var any5 = 'https://launchlibrary.net/1.4/launch/next/5';
var falcon5 = 'https://launchlibrary.net/1.4/launch/Falcon';
var launcherOne5 = 'https://launchlibrary.net/1.4/launch/LauncherOne';
var ariane5 = 'https://launchlibrary.net/1.4/launch/Ariane';

//Generate a http request object
var httpRequest = new XMLHttpRequest();

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

