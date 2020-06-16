// Function is a special type of Object
// Function Constructors - A normal function that is used to construct objects
// A Call a function used specifically to create on object. Is called a constructor

// Every function used a function constructor has a prototype property (as opposed to a proto type of and object which is different)

function Person(firstname, lastname) {

  // Note: This keyword is point  to an empty object in memory
  console.log(this);

  this.firstname = firstname;
  this.lastname = lastname;
  console.log('This function is invoked!');
}


// Add method 
Person.prototype.getFullName = function () {
  return this.firstname + ' ' + this.lastname;
}

var john = new Person('John', 'Doe');
console.log(john);


var jane = new Person('Jane', 'Doe');

Person.prototype.getFormalFullName = function () {
  return this.lastname + ' ' + this.firstname;
}

console.log(john.getFormalFullName());