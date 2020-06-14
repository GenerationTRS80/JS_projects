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


// Use brackets [] which accept the property string
for (var prop in john) {
  if (john.hasOwnProperty(prop)) {
    console.log(prop + ': ' + john[prop]);
  }
}

var jane = {
  address: '111 Main St',
  getFullName: function () {
    return this.firstname + ' ' + this.lastname;
  }
};

var jim = {
  getFirstName: function () {
    return firstname;
  }
};

_.extends(john, jane, jim);

console.log(john);