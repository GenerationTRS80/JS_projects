// Function Constructors - A normal function that is used to construct objects


// A Call a function used specifically to create on object. Is called a constructor

function Person(firstname, lastname) {

  // Note: This keyword is point  to an empty object in memory
  console.log(this);

  this.firstname = firstname;
  this.lastname = lastname;
  console.log('This function is invoked!');
}

// Use the "new" key word operator

// The new keyword is allow the construction of an object via a function
var john = new Person('John', 'Doe');
console.log(john);


// function constructors
var jane = new Person(
  'Jane',
  'Doe'
);

console.log(jane);