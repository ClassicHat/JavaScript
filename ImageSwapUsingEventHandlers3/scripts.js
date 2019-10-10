/**[ READ ME ]**
Name: Dylan Buehler
Date: 9/9/2019
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
    //get the id for each small pic and change the photos, would be great if I could use an array here ;)

    //These are placeholder photos so i can see if the code works
    // replace the src links with new photos.
    document.getElementById('bigPic').src = 'pictures/cupnoodle.jpeg';
    document.getElementById('sm_Pic_1').src = 'pictures/cupnoodle.jpeg';
    document.getElementById('sm_Pic_2').src = 'pictures/hamburger.jpg';
    document.getElementById('sm_Pic_3').src = 'pictures/fries.jpg';
    document.getElementById('sm_Pic_4').src = 'pictures/bev.jpg';
})