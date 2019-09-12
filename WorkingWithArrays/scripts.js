// Call backs
// any function that uses a fuction as an argument

function greeting(great){
    console.log(great);
}

function createGreeting(fname, functionName){
    var myGreeting = "Hello " + fname;
    // greeting(myGreeting);
    // var functionName = greeting;
    functionName(myGreeting);
}

createGreeting('Picard', greeting);
/********************************************/

/****[ Timers ]******************************/

var myTimer = setInterval(aFunction, 3000);

function aFunction(){
    // alert("working");
}

document.getElementById('stop').addEventListener('click', function(){
    clearInterval(myTimer);
})

/*********************************************/

/****[ Arrays ]*******************************/
myDiv = document.getElementById('ary');

var movies = ["Lilo and Stich", "Hawaii 5-0", "Jurassic Park"];

myDiv.innerHTML = movies.length;

myString = "<select id='movie'>";

// for(var i = 0; i < movies.length; i++)
// {
//     myString += "<option>" + movies[i] + "</option>";
// }

movies.forEach(function(el)
{
    // myString += "<option>" + el + "</option>";
    myString += `<option>${el}</option>`;
})

myString += "</select>";

myDiv.innerHTML = myString;

document.getElementById('getIt').addEventListener('click', function(){
    alert(document.getElementById('movie').value);
})

/****[ Manipulating an Array ]*********************/

//add to an array
movies.push("Jumangi");
console.log(movies);

//get the last element in the array
var last = movies.length -1;
console.log(movies[last]);

//add an element to the beggining unshift
movies.unshift("50 first dates");
console.log(movies);

//remove an element from the end
var aVar = movies.pop();
console.log(`${aVar}: ${movies}`);

//splice (index to start, number of elements to remove)
movies.splice(1,2); //removes 2 elements starting at position 1;
console.log(movies);