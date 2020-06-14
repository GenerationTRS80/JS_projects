// Undertanding Prototypes

var person = {
  firstname: 'Default',
  lastname: 'Default',
  getFullName: function () {
    return this.firstname + ' ' + this.lastname;
  }
};

var john = {
  firstname: 'John',
  lastname: 'Doe'
};


// Don't DO THIS EVER DEMO ONLY
john.__proto__ = person;
console.log(john.getFullName());

var jane = {
  firstname: 'Jane'
};

jane.__proto__ = person;
console.log(jane.getFullName());