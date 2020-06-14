// Object Literals

// Open closed {} is defined as a new object
// Use name value pair to create properties
var Tony = {
  firstname: 'Tony',
  lastname: 'Alicea',
  address: {
    street: '111 Main St.',
    city: 'New York',
    state: 'NY'
  }
};

function greet(person) {
  console.log('Hi ' + person.firstname);
}

greet(Tony);

// Using Object literal syntax
greet({
  firstname: 'Mary',
  lastname: 'Doe'
});

Tony.address2 = {
  street: '333 Second Street'
}