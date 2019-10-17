var obj = {
    movie: "hawaii 5-0",
    budget: 630000000,
    genres: {
        id: 18,
        name: "Drama"
    }
}//End obj

//Convert the javascript object to a JSON
var jasonString = JSON.stringify(obj);

//console.log(jasonString);

//Convert the JSON to a javascript object
var backToObject = JSON.parse(jasonString);

//console.log(backToObject);

//Creates an event listener that happen when the page loads
window.addEventListener('load', initializePage);

function initializePage(){
    document.getElementById('movieTitle').innerHTML = backToObject.movie;
    document.getElementById('desc').innerHTML = backToObject.genres.name;
}//End initializePage function