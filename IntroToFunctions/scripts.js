var myAppName = "index";
    
function myGreeting(myName = "Dylan"){
    // document.write("<h2>Greetings " + myName + " from " + myAppName + "</h2>");

    myName = document.getElementById('theGreeting').value;
    var aString = "<h2>Greetings " + myName + " from " + myAppName + "</h2>";

    document.getElementById('greet').innerHTML = aString;
}