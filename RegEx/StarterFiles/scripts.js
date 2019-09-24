var products = ['Rambo', 'ItChapter Two', 'Ad Astra', 'Hustlers', 'Angel Hunt'];

products.forEach(function(el){
    var productSelection = document.createElement("option");
    productSelection.value = el;
    productSelection.innerHTML = el;
    document.getElementById('productSelection').appendChild(productSelection);
})

function valForm(frm)
{
    var userName = document.getElementById('userName');
    var email = document.getElementById('email');
    var phone = document.getElementById('phone');
    var defColor = "white"
    var errColor = "red"

    var isValid=true;
    //reset the background colors
    userName.style.backgroundColor = defColor;
    email.style.backgroundColor = defColor;
    phone.style.backgroundColor = defColor;


    if (frm.userName.value == "")
    {
       document.getElementById('userNameErr').innerHTML = "Invalid Name"
       userName.style.backgroundColor = errColor;
       isValid = false;
    }

    //Validate the email using the following regex
    var emalRegex = /[A-Za-z]+@[A-Za-z]+(.com|.net|.edu|.gov)/;
    if (emalRegex.test(frm.email.value) == false)
    {
       document.getElementById('emailErr').innerHTML = "Invalid Email"
       email.style.backgroundColor = errColor;
       isValid = false;
    }

    //Validate the phone number using the following regex
    var phoneRegex = /\d{3}[-.]\d{3}[-.]\d{4}/;
    if (phoneRegex.test(frm.phone.value) == false)
    {
       document.getElementById('phoneErr').innerHTML = "Invalid Phone"
       phone.style.backgroundColor = errColor;
       isValid = false;
    }

    if (isValid)
    {
        frm.submit();
    }
}

function printQuery() {
    var url = window.location.search.substr(1);
    var pairs = url.split("&");

    pairs.forEach(function(el)
    {
        var keyValue = el.split("=")
        document.write(keyValue[0] +  ": " + keyValue[1] + "<br>")
    })

}
