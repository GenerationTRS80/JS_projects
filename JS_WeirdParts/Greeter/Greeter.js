// Create new execution context
// Set up an immediately invoked function that accept an global objects and a jquery object
// Make sure you are passing the window and jQuery object
// Use () to immediately invoke the function
(function (global, $) {

  var Greeter = function (firstname, lastname, language) {
    // Use a function constructor to set up the object
    return new Greeter.init(firstname, lastname, language);
  };

  Greeter.prototype = {};

  Greeter.init = function (firstname, lastname, language) {

    //Build object
    var self = this;
    self.firstname = firstname || '';
    self.lastname = lastname || '';
    self.language = language || 'en';
  };

  Greeter.init.prototype = Greeter.prototype;

  // Expose the Greeter object to the outside world
  global.Greeter = global.G$ = Greeter;

}(window, jQuery));