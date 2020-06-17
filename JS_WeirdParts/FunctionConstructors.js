// Function Constructors - A normal function that is used to construct objects


// A function used specifically to create on object. Is called a "function constructor"

//NOTE: When the execution cont

function Person(firstname, lastname) {

  // Note: This keyword is point to an empty object in memory
  console.log(this);

  // this variable points to the empty object that is invoked my the keyword new
  this.firstname = firstname;
  this.lastname = lastname;
  console.log('This function is invoked!');
}

// Use the "new" key word operator

// The new keyword is allow the construction of an object via a function
// "new" keyword action: creates and empty object then invokes/calls the function Person
var john = new Person('John', 'Doe');
console.log(john);


// function constructors
var jane = new Person(
  'Jane',
  'Doe'
);

// console.log(jane);