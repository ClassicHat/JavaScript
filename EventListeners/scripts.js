/****[ Greet Function ]***************
 * Expects: click event
 * Returns: nothing
 * Tasks: when clicked say hello
 *************************************/
function Greet(){
    document.getElementById("greet").innerHTML = "Hello World";
}//End Greet function

//Adds an event listener that calls a function
document.getElementById("theBtn").addEventListener('click', doSomething);

function doSomething(){
    alert("I did something");
}//End function

//Adds an event listener with an embeded function
document.getElementById("anoBtn").addEventListener('dblclick', function(){
    alert("I got double clicked");
});

function theObj(anObject){
    alert(anObject.innerHTML);
}


