// Object Create - Pure Prototypal Inheritance


// Building objects wth Pure Prototypal Inheritance

var person = {

  firstname: 'Default',
  lastname: 'Default',
  greet: function () {
    return 'Hi ' + this.firstname;

  }
};


var john = Object.create(person);
john.firstname = 'John';
john.lastname = 'Doe';
console.log(john);


// Polyfill  - Code that adds a feature that the engine may lack

// For example what if you want to use object.create() and the engine doesn't support it

//Use the following Polyfill to see if object.create doesn't work

//Polyfill
if (!Object.create) {
  Object.create = function (o) {
    if (arguments.length > 1) {
      throw new Error('Object.create implementation' + ' only accepts the first parameter.');
    }

    function F() {}
    F.prototype = o;
    return new F();

  };
}

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