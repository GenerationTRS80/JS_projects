// Objects are collections of name value pairs
// Objects can have properties and methods
// Methods are functions

var person = new Object {};
//var person = {};

// Add properties
person["firstname"] = "Tony";
person["lastname"] = "Alicia";


var firstNameProperty = "firstname";

console.log(person);
console.log(person[firstNameProperty]);

// Use Dot operator
console.log('Dot operator ' + person.firstname);

// Add sub object
person.address = new Object();

person.address.street = "111 Main St.";
person.address.city = "New York";
person.address.state = "NY";

console.log(person.address.street);
console.log(person.address.city);
console.log(person["address"]["state"]);