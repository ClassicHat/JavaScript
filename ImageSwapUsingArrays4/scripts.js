/**[ READ ME ]**
Name: Dylan Buehler
Date: 9/18/2019
Filename: scripts.js
Class: CIS-131-102 Web Dev II
*/

function swapPic(theElement, theSorce){
    theElement.src = theSorce.src;
}

/****[ The Big Picture ]**********************
 * Expects: The large picture to be double clicked
 * Returns: Nothing
 * Tasks: Creates an event listener that so that when
 *  the big image is double clicked the images are changed
 *  and then can be swapped between.
 *********************************************/
document.getElementById('bigPic').addEventListener('dblclick', function(){
    //Call the loadBigAndSmall function
    loadBigAndSmall(foodPictures);
})

/****[ Create all arrays ]*****/
//Create the array to hold all of my photes
var consolePictures = ["pictures/ps2.jpg", "pictures/switch.jpg", "pictures/xboxonex.jpg", "pictures/3ds.jpg"];
var foodPictures = ["pictures/cupnoodle.jpeg", "pictures/hamburger.jpg", "pictures/fries.jpg", "pictures/bev.jpg"];
var compPictures = ["pictures/turtle.jpg", "pictures/lighthouse.jpg", "pictures/deer.jpg", "pictures/bird.jpg"];
var allPictures = ["pictures/ps2.jpg", "pictures/switch.jpg", "pictures/xboxonex.jpg", "pictures/3ds.jpg",
                    "pictures/cupnoodle.jpeg", "pictures/hamburger.jpg", "pictures/fries.jpg", "pictures/bev.jpg", 
                    "pictures/turtle.jpg", "pictures/lighthouse.jpg", "pictures/deer.jpg", "pictures/bird.jpg",];

/****[ Image Swapping With Arrays And Timer ]****/

//Call the loadBigAndSmall function to load the initial page
loadBigAndSmall(compPictures);

/****[ LoadBigAndSmall ]************
 * EXPECTS: a picture array
 * RETURNS: nothing
 * TASKS: load the big and small pictures
 *  from the passed array.
 ***********************************/
function loadBigAndSmall(thePicArray){
    //Load the big picture
    document.getElementById('bigPic').src = thePicArray[0];

    //Load the small pictures
    for(var i = 0; i < thePicArray.length; i++)
    {
        //find the correct id
        document.getElementById('sm_Pic_' + (i + 1)).src = thePicArray[i];
    }//End for loop
}//End loadBigAndSmall function


//Create a timer to activate every three seconds
var increment = 0;
var myTimer = setInterval(changePic, 3000);

//Every three seconds change the big picture
function changePic(){
    document.getElementById('bigPic').src = allPictures[increment];
    increment++;
}

