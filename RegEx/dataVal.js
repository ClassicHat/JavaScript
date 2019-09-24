var newStr = "My name is Dylan and I was here";

// console.log(newStr.length);
// console.log(newStr.charAt(5));

// for(var i = 0; i < newStr.length; i++){
//     console.log(newStr.charAt(i));
// }

//Validation
var phoneNumber = "417-447-8297";
var regex = /\d{3}[-.]\d{3}[-.]\d{4}/;
var isValid = regex.test(phoneNumber);

console.log(isValid);

//Extraction
var address = "1001 N Chestnut Expressway, Springfield, MO 65872";
var nameTest = address.match(/[A-Z]+\s\d{5}$/);
console.log(nameTest);

//Replace
var name = "Dylan does javascript, hello dylan";
var replaceIt = name.replace(/Dylan/gi, "James");
console.log(replaceIt);