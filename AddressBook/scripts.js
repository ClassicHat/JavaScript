/****[ README ]******************
 * NAME: Dylan Buehler
 * DATE: 10/16/2019
 * FILENAME: scripts.js
 * CLASS: CIS-131
 ********************************/


/****[ Create Contact ]*****************
 * EXPECTS: A first and last name, phone num, email
 *  and an image source.
 * RETURNS: Nohting
 * TASKS: Create a contact given the information.
 ***************************************/
function aContact(fName, lName, phone, email, image){
    this.fName = fName;
    this.lName = lName;
    this.phone = phone;
    this.email = email;
    this.image = image;
    
    this.displayContact = function(){
        var displayStr = "";

        displayStr += `<img src="${this.image}" alt="profile picture" width='250px'>
                       <p>Name: ${this.fName} ${this.lName}</p>
                       <p>Phone Number: ${this.phone}</p>
                       <p>Email: ${this.email}</p>`;

        return displayStr;
    }
}//End aContact contructor

//Array for holding all contacts
var addressBook = [];

const contact1 = new aContact(
    'Dylan', 
    'Buehler', 
    '123-456-7890', 
    'dylanbuehler@email.com', 
    'pictures/pic1.png');
//End contact1

const contact2 = new aContact(
    'Jeremy', 
    'Wheatly', 
    '123-683-9572', 
    'jeremywheatly@email.com', 
    'pictures/pic2.jpg');
//End contact2

const contact3 = new aContact(
    'Chris', 
    'Maples', 
    '123-948-2817', 
    'chrismaples@email.com', 
    'pictures/pic3.png');
//End contact3

const contact4 = new aContact(
    'Tim', 
    'Jinx', 
    '123-039-5847', 
    'timjinx@email.com', 
    'pictures/pic4.png');
//End contact4

const contact5 = new aContact(
    'Kelly', 
    'Lee', 
    '123-496-1124', 
    'kellylee@email.com', 
    'pictures/pic5.png');
//End contact5

//Add contacts to the array
addressBook.push(contact1);
addressBook.push(contact2);
addressBook.push(contact3);
addressBook.push(contact4);
addressBook.push(contact5);

//Get a reference to the contacts div
var contactDiv = document.getElementById('contacts');

//fill the contacts part of the html div
for(var i = 0; i < addressBook.length; i++)
{
    contactDiv.innerHTML +=
    `<h4 id=${i}>${addressBook[i].fName} ${addressBook[i].lName}</h4>`;
}//End for loop

//add an event listener for the contact names
document.getElementById('contacts').addEventListener('click', function(cont){
    document.getElementById('moreinfo').innerHTML = addressBook[cont.target.id].displayContact();
})

//add event listener for the new contact
document.getElementById('newcontact').addEventListener('click', function(){
    displayForm();
})

function displayForm(){
    //get the more info div
    document.getElementById('moreinfo').innerHTML =
    `<div id='formcontainer'>
        <form id='theform'>
            <div>
                <h3>Please Enter The Following Information</h3>
            </div>
            Enter Your First Name:
            <div>
                <input type="text" name="fname" id="fname">
            </div>
            Enter Your Last Name:
            <div>
                <input type="text" name="lname" id="lname">
            </div>
            Enter Your Phone Number:
            <div>
                <input type="text" name="phonenum" id="phonenum">
            </div>
            Enter Your Email:
            <div>
                <input type="email" name="email" id="email">
            </div>
            <div>
                <h3 id='submit' onclick='createContact()'>Create Contact</h3>
            </div>
        </form>
     </div>
    `;
}//End new contact info

function createContact(){
    var theForm = document.getElementById('theform');

    //do some validation
    if(theForm.fname.value == "" || theForm.lname.value == "" || theForm.phonenum.value == "" || theForm.email.value == ""){
        document.getElementById('submit').innerText = "Form Entries Can Not Be Blank";
    }
    else{
        //create a new contact
        var contact = new aContact(theForm.fname.value, theForm.lname.value,
            theForm.phonenum.value, theForm.email.value, 'pictures/contact.jpg');

        //add to the array of contacts
        addressBook.push(contact);

        //fill the contacts part of the html div
        contactDiv.innerHTML = `<h3 id="newcontact">New Contact</h3>`;

        for(var i = 0; i < addressBook.length; i++)
        {
            contactDiv.innerHTML +=
            `<h4 id=${i}>${addressBook[i].fName} ${addressBook[i].lName}</h4>`;
        }//End for loop

        //create a new click event
        document.getElementById('newcontact').addEventListener('click', function(){
            displayForm();
        })
    }//End if / else
}//Create contact
